
goog.require('jsopenxml.types.OpenXmlSpreadsheet');     
goog.exportSymbol('jsopenxml.types.OpenXmlSpreadsheet', jsopenxml.types.OpenXmlSpreadsheet);   

goog.require('jsopenxml.ui.Spreadsheet');
goog.exportSymbol('jsopenxml.ui.Spreadsheet', jsopenxml.ui.Spreadsheet);  
goog.exportProperty(jsopenxml.ui.Spreadsheet.prototype, 'render', jsopenxml.ui.Spreadsheet.prototype.render);

goog.require('goog.events');
goog.exportSymbol('goog.events.listen', goog.events.listen); 

goog.require('jsopenxml.types.OpenXmlDocumentData');
goog.exportSymbol('jsopenxml.types.OpenXmlDocumentData', jsopenxml.types.OpenXmlDocumentData); 

goog.require('goog.dom.xml');
goog.exportSymbol('goog.dom.xml.loadXml', goog.dom.xml.loadXml); 

goog.require('goog.userAgent');
goog.exportSymbol('goog.userAgent.IE', goog.userAgent.IE); 

