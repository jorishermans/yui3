YAHOO.env.classMap = {"Console": "console", "YQL": "yql", "DOMEventFacade": "event", "plugin.NodeFocusManager": "node-focusmanager", "YUI": "yui", "DataSource.Local": "datasource", "NodeList": "node", "Selector": "dom", "Widget": "widget", "Plugin.Drag": "dd", "Object": "yui", "YUI~array~extras": "collection", "Base": "base", "History.Module": "history-deprecated", "Plugin.Base": "plugin", "Do.AlterArgs": "event-custom", "Pollable": "datasource", "ImgLoadImgObj": "imageloader", "ClassNameManager": "classnamemanager", "Plugin.DDWindowScroll": "dd", "Assert.ComparisonFailure": "test", "DataSchema.XML": "dataschema", "YUI~dump": "dump", "ArrayList": "collection", "Loader": "loader", "Coverage.Format.ObjectAssert": "test", "Tab": "tabview", "Intl": "intl", "Plugin.SortScroll": "sortable", "Do.Prevent": "event-custom", "DataSourceCacheExtension": "datasource", "State": "attribute", "HistoryHash": "history", "Plugin.Shim": "shim-plugin", "CustomEvent": "event-custom", "Coverage.Format.DateAssert": "test", "Plugin.Drop": "dd", "JSONPRequest": "jsonp", "DataSource.Get": "datasource", "Plugin.CreateLinkBase": "editor", "DataSourceXMLSchema": "datasource", "WidgetPosition": "widget-position", "Uploader": "uploader", "Plugin.Align": "align-plugin", "DD.Drop": "dd", "DataType.Number": "datatype", "HistoryBase": "history", "DataSourceArraySchema": "datasource", "Plugin.EditorLists": "editor", "ScrollView": "scrollview-base", "Profiler": "profiler", "Queue": "yui", "DataSource.IO": "datasource", "Plugin.EditorTab": "editor", "WidgetChild": "widget-child", "ImgLoadGroup": "imageloader", "Test.Wait": "test", "Do.Method": "event-custom", "SliderValueRange": "slider", "DataSourceCache": "datasource", "Selection": "editor", "EditorBase": "editor", "Get": "yui", "Do.AlterReturn": "event-custom", "SyntheticEvent.Notifier": "event", "Event": "event", "Plugin.NodeFX": "anim", "TabView": "tabview", "CacheOffline": "cache", "UA": "yui", "DataSourceJSONSchema": "datasource", "WidgetParent": "widget-parent", "Test.TestNode": "test", "DOM": "dom", "YUI~array~invoke": "collection", "Plugin.Flick": "node-flick", "Cache": "cache", "DD.Delegate": "dd", "plugin.NodeMenuNav": "node-menunav", "DataSchema.Base": "dataschema", "Do.Halt": "event-custom", "SyntheticEvent": "event", "Node": "node", "Test.Runner": "test", "Assert.ShouldError": "test", "Plugin.DDConstrained": "dd", "ArrayList~add": "collection", "JSON": "json", "Test.Manager": "test", "Cookie": "cookie", "DataType.Date": "datatype", "DataSchema.Array": "dataschema", "WidgetPositionConstrain": "widget-position-constrain", "Lang": "yui", "DD.Drag": "dd", "DataSchema.JSON": "dataschema", "Transition": "node", "AsyncQueue": "async-queue", "Easing": "anim", "Plugin.ExecCommand": "editor", "DataSource.Function": "datasource", "History": "history-deprecated", "Plugin.Host": "pluginhost", "Plugin.DDNodeScroll": "dd", "Plugin.Sortable": "sortable", "Attribute": "attribute", "Frame": "editor", "YQLRequest": "yql", "StyleSheet": "stylesheet", "Plugin.WidgetAnim": "widget-anim", "YUI~oop": "oop", "Assert.Error": "test", "ArrayList~filter": "collection", "DD.Scroll": "dd", "SliderBase": "slider", "Plugin.ScrollViewPaginatorPlugin": "scrollview-paginator", "Overlay": "overlay", "SWF": "swf", "Subscriber": "event-custom", "YUI~substitute": "substitute", "io": "io", "Test.Suite": "test", "Assert.UnexpectedError": "test", "Do": "event-custom", "Anim": "anim", "Plugin.Cache": "cache", "DD.DDM": "dd", "WidgetStack": "widget-stack", "Test.Case": "test", "Assert": "test", "Slider": "slider", "Assert.UnexpectedValue": "test", "Coverage.Format.Mock": "test", "config": "yui", "Assert.ShouldFail": "test", "DataSchema.Text": "dataschema", "EventTarget": "event-custom", "DataType.XML": "datatype", "Test.Reporter": "test", "WidgetStdMod": "widget-stdmod", "ArrayAssert": "test", "DataType.Date.Locale": "datatype", "Plugin.DDProxy": "dd", "EventHandle": "event-custom", "Do.Error": "event-custom", "HistoryHTML5": "history", "Plugin.ScrollViewScrollbars": "scrollview-scrollbars", "Plugin.ConsoleFilters": "console-filters", "QueryString": "querystring", "Plugin.EditorBidi": "editor", "WidgetPositionAlign": "widget-position-align", "ValueChange": "event-valuechange", "ClickableRail": "slider", "Array": "yui", "EventFacade": "event-custom", "DataSourceTextSchema": "datasource"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
