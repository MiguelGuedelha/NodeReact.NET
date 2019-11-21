﻿using System;
using System.Buffers;
using System.Threading.Tasks;
using NodeReact.Utils;

namespace NodeReact.Components
{
    public sealed class ReactRouterComponent : ReactBaseComponent
    {
        public ReactRouterComponent(
            ReactConfiguration configuration,
            IReactIdGenerator reactIdGenerator,
            INodeInvocationService _nodeInvocationService,
            IComponentNameInvalidator componentNameInvalidator) : base(
            configuration,
            reactIdGenerator,
            _nodeInvocationService,
            componentNameInvalidator)
        {
        }

        public string Path { get; set; }

        public RoutingContext RoutingContext { get; private set; }

        public async Task RenderRouterWithContext()
        {
            if (ClientOnly)
            {
                return;
            }

            using (var executeEngineCode = GetEngineCodeExecute())
            {
                try
                {
                    RoutingContext = await _nodeInvocationService.Invoke<RoutingContext>("evalCode", executeEngineCode);
                    OutputHtml = RoutingContext.html;
                }
                catch (Exception ex)
                {
                    ExceptionHandler(ex, ComponentName, ContainerId);
                }
            }
        }
        
        private IMemoryOwner<char> GetEngineCodeExecute()
        {
            using (var textWriter = new ArrayPooledTextWriter())
            {
                textWriter.Write("new Function('");

                textWriter.Write("var context={};");
                textWriter.Write(ServerOnly ? "var html = ReactDOMServer.renderToStaticMarkup(React.createElement(" : "var html = ReactDOMServer.renderToString(React.createElement(");
                textWriter.Write(ComponentName);
                textWriter.Write(",Object.assign(");
                WriterSerialziedProps(textWriter);
                textWriter.Write(",{location:\"");
                textWriter.Write(Path);
                textWriter.Write("\",context:context})));");

                textWriter.Write("context.html = html; return context;')();");


                return textWriter.GetMemoryOwner();
            }
        }
    }

    public class RoutingContext
    {
        public string html { get; set; }

        /// <summary>
        /// HTTP Status Code.
        /// If present signifies that the given status code should be returned by server.
        /// </summary>
        public int? status { get; set; }

        /// <summary>
        /// URL to redirect to.
        /// If included this signals that React Router determined a redirect should happen.
        /// </summary>
        public string url { get; set; }
    }
}
