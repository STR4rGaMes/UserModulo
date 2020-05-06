/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/free-jqgrid@4.15.5/js/jquery.jqgrid.src.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(t, r) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return r(e, t.document)
    }) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
        return e || (e = window), void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), r(t, e.document), t
    } : r(jQuery, t.document)
}("undefined" != typeof window ? window : this, function($, document) {
    "use strict";
    var englishLanguageDefaults = {
        name: "English (United States)",
        nameEnglish: "English (United States)",
        isRTL: !1,
        defaults: {
            recordtext: "View {0} - {1} of {2}",
            emptyrecords: "No records to view",
            loadtext: "Loading...",
            pgtext: "Page {0} of {1}",
            pgfirst: "First Page",
            pglast: "Last Page",
            pgnext: "Next Page",
            pgprev: "Previous Page",
            pgrecs: "Records per Page",
            showhide: "Toggle Expand Collapse Grid",
            savetext: "Saving..."
        },
        search: {
            caption: "Search...",
            Find: "Find",
            Reset: "Reset",
            odata: [{
                oper: "eq",
                text: "equal"
            }, {
                oper: "ne",
                text: "not equal"
            }, {
                oper: "lt",
                text: "less"
            }, {
                oper: "le",
                text: "less or equal"
            }, {
                oper: "gt",
                text: "greater"
            }, {
                oper: "ge",
                text: "greater or equal"
            }, {
                oper: "bw",
                text: "begins with"
            }, {
                oper: "bn",
                text: "does not begin with"
            }, {
                oper: "in",
                text: "is in"
            }, {
                oper: "ni",
                text: "is not in"
            }, {
                oper: "ew",
                text: "ends with"
            }, {
                oper: "en",
                text: "does not end with"
            }, {
                oper: "cn",
                text: "contains"
            }, {
                oper: "nc",
                text: "does not contain"
            }, {
                oper: "nu",
                text: "is null"
            }, {
                oper: "nn",
                text: "is not null"
            }],
            groupOps: [{
                op: "AND",
                text: "all"
            }, {
                op: "OR",
                text: "any"
            }],
            addGroupTitle: "Add subgroup",
            deleteGroupTitle: "Delete group",
            addRuleTitle: "Add rule",
            deleteRuleTitle: "Delete rule",
            operandTitle: "Click to select search operation.",
            resetTitle: "Reset Search Value"
        },
        edit: {
            addCaption: "Add Record",
            editCaption: "Edit Record",
            bSubmit: "Submit",
            bCancel: "Cancel",
            bClose: "Close",
            saveData: "Data has been changed! Save changes?",
            bYes: "Yes",
            bNo: "No",
            bExit: "Cancel",
            msg: {
                required: "Field is required",
                number: "Please, enter valid number",
                minValue: "value must be greater than or equal to ",
                maxValue: "value must be less than or equal to",
                email: "is not a valid e-mail",
                integer: "Please, enter valid integer value",
                date: "Please, enter valid date value",
                url: "is not a valid URL. Prefix required ('http://' or 'https://')",
                nodefined: " is not defined!",
                novalue: " return value is required!",
                customarray: "Custom function should return array!",
                customfcheck: "Custom function should be present in case of custom checking!"
            }
        },
        view: {
            caption: "View Record",
            bClose: "Close"
        },
        del: {
            caption: "Delete",
            msg: "Delete selected record(s)?",
            bSubmit: "Delete",
            bCancel: "Cancel"
        },
        nav: {
            edittext: "",
            edittitle: "Edit selected row",
            addtext: "",
            addtitle: "Add new row",
            deltext: "",
            deltitle: "Delete selected row",
            searchtext: "",
            searchtitle: "Find records",
            refreshtext: "",
            refreshtitle: "Reload Grid",
            alertcap: "Warning",
            alerttext: "Please, select row",
            viewtext: "",
            viewtitle: "View selected row",
            savetext: "",
            savetitle: "Save row",
            canceltext: "",
            canceltitle: "Cancel row editing"
        },
        col: {
            caption: "Select columns",
            bSubmit: "Ok",
            bCancel: "Cancel"
        },
        errors: {
            errcap: "Error",
            nourl: "No url is set",
            norecords: "No records to process",
            model: "Length of colNames <> colModel!"
        },
        formatter: {
            integer: {
                thousandsSeparator: ",",
                defaultValue: "0"
            },
            number: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2,
                defaultValue: "0.00"
            },
            currency: {
                decimalSeparator: ".",
                thousandsSeparator: ",",
                decimalPlaces: 2,
                prefix: "",
                suffix: "",
                defaultValue: "0.00"
            },
            date: {
                dayNames: ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                AmPm: ["am", "pm", "AM", "PM"],
                S: function(e) {
                    return e < 11 || 13 < e ? ["st", "nd", "rd", "th"][Math.min((e - 1) % 10, 3)] : "th"
                },
                srcformat: "Y-m-d",
                newformat: "n/j/Y",
                masks: {
                    ShortDate: "n/j/Y",
                    LongDate: "l, F d, Y",
                    FullDateTime: "l, F d, Y g:i:s A",
                    MonthDay: "F d",
                    ShortTime: "g:i A",
                    LongTime: "g:i:s A",
                    YearMonth: "F, Y"
                }
            }
        }
    };
    $.jgrid = $.jgrid || {};
    var jgrid = $.jgrid;
    jgrid.locales = jgrid.locales || {};
    var locales = jgrid.locales,
        COMPONENT_NAMES = {
            GRID_BOX_DIV: 0,
            GRID_OVERLAY_DIV: 1,
            LOADING_DIV: 2,
            DIALOG_ALERT_DIV: 3,
            DIALOG_SEARCH_DIV: 4,
            DIALOG_VIEW_DIV: 5,
            DIALOG_EDIT_DIV: 6,
            DIALOG_DELETE_DIV: 7,
            GRID_VIEW_DIV: 8,
            TITLE_BAR_DIV: 9,
            UPPER_TOOLBAR_DIV: 10,
            TOP_PAGER_DIV: 11,
            HEADER_DIV: 12,
            HEADER_BOX_DIV: 13,
            HEADER_TABLE: 14,
            HEADER_COLS_ROW: 15,
            HEADER_COLS: 16,
            HEADER_ROWS: 47,
            HEADER_TH: 48,
            HEADER_SORTABLE_DIV: 49,
            HEADER_RESIZABLE_SPAN: 50,
            HEADER_SELECT_ALL_ROWS_CHECKBOX: 45,
            SEARCH_TOOLBAR: 17,
            BODY_DIV: 18,
            BODY_SCROLL_FULL_DIV: 19,
            BODY_SCROLL_TOP_DIV: 20,
            BODY_TABLE: 21,
            GRID: 21,
            BODY_COLS_ROW: 22,
            BODY_COLS: 23,
            BODY_DATA_ROWS: 24,
            FOOTER_DIV: 25,
            FOOTER_BOX_DIV: 26,
            FOOTER_TABLE: 27,
            FOOTER_DATA_ROWS: 28,
            BOTTOM_TOOLBAR_DIV: 29,
            FROZEN_HEADER_DIV: 30,
            FROZEN_HEADER_TABLE: 31,
            FROZEN_HEADER_COLS_ROW: 32,
            FROZEN_HEADER_COLS: 33,
            FROZEN_SEARCH_TOOLBAR: 34,
            FROZEN_FOOTER_DIV: 35,
            FROZEN_FOOTER_TABLE: 36,
            FROZEN_FOOTER_DATA_ROWS: 37,
            FROZEN_BODY_DIV: 38,
            FROZEN_BODY_TABLE: 39,
            FROZEN_BODY_COLS_ROW: 40,
            FROZEN_BODY_COLS: 41,
            FROZEN_BODY_DATA_ROWS: 42,
            COLUMN_RESIZER_DIV: 43,
            BOTTOM_PAGER_DIV: 44,
            SEARCH_OPERATION_MENU_UL: 46
        };
    (null == jgrid.defaults || $.isEmptyObject(locales) || void 0 === locales["en-US"]) && (void 0 === locales["en-US"] && $.extend(!0, jgrid, {
        locales: {
            "en-US": englishLanguageDefaults
        }
    }), jgrid.defaults = jgrid.defaults || {}, void 0 === jgrid.defaults.locale && (jgrid.defaults.locale = "en-US")), jgrid.defaults = jgrid.defaults || {};
    var defaults = jgrid.defaults;
    $.extend(!0, jgrid, {
        version: "4.15.5-pre",
        productName: "free jqGrid",
        defaults: {},
        search: {},
        edit: {},
        view: {},
        del: {},
        nav: {},
        col: {},
        errors: {},
        formatter: {
            unused: ""
        },
        icons: {
            jQueryUI: {
                common: "ui-icon",
                pager: {
                    first: "ui-icon-seek-first",
                    prev: "ui-icon-seek-prev",
                    next: "ui-icon-seek-next",
                    last: "ui-icon-seek-end"
                },
                sort: {
                    asc: "ui-icon-triangle-1-n",
                    desc: "ui-icon-triangle-1-s"
                },
                gridMinimize: {
                    visible: "ui-icon-circle-triangle-n",
                    hidden: "ui-icon-circle-triangle-s"
                },
                nav: {
                    edit: "ui-icon-pencil",
                    add: "ui-icon-plus",
                    del: "ui-icon-trash",
                    search: "ui-icon-search",
                    refresh: "ui-icon-refresh",
                    view: "ui-icon-document",
                    save: "ui-icon-disk",
                    cancel: "ui-icon-cancel",
                    newbutton: "ui-icon-newwin"
                },
                actions: {
                    edit: "ui-icon-pencil",
                    del: "ui-icon-trash",
                    save: "ui-icon-disk",
                    cancel: "ui-icon-cancel"
                },
                form: {
                    close: "ui-icon-closethick",
                    prev: "ui-icon-triangle-1-w",
                    next: "ui-icon-triangle-1-e",
                    save: "ui-icon-disk",
                    undo: "ui-icon-close",
                    del: "ui-icon-scissors",
                    cancel: "ui-icon-cancel",
                    resizableLtr: "ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"
                },
                search: {
                    search: "ui-icon-search",
                    reset: "ui-icon-arrowreturnthick-1-w",
                    query: "ui-icon-comment"
                },
                subgrid: {
                    plus: "ui-icon-plus",
                    minus: "ui-icon-minus",
                    openLtr: "ui-icon-caret-1-sw",
                    openRtl: "ui-icon-caret-1-se"
                },
                grouping: {
                    plus: "ui-icon-circlesmall-plus",
                    minus: "ui-icon-circlesmall-minus"
                },
                treeGrid: {
                    minus: "ui-icon-triangle-1-s",
                    leaf: "ui-icon-radio-off",
                    plusLtr: "ui-icon-triangle-1-e",
                    plusRtl: "ui-icon-triangle-1-w"
                }
            },
            fontAwesome: {
                common: "fa",
                pager: {
                    common: "fa-fw",
                    first: "fa-step-backward",
                    prev: "fa-backward",
                    next: "fa-forward",
                    last: "fa-step-forward"
                },
                sort: {
                    common: "fa-lg",
                    asc: "fa-sort-asc",
                    desc: "fa-sort-desc"
                },
                gridMinimize: {
                    visible: "fa-chevron-circle-up",
                    hidden: "fa-chevron-circle-down"
                },
                nav: {
                    common: "fa-lg fa-fw",
                    edit: "fa-pencil",
                    add: "fa-plus",
                    del: "fa-trash-o",
                    search: "fa-search",
                    refresh: "fa-refresh",
                    view: "fa-file-o",
                    save: "fa-floppy-o",
                    cancel: "fa-ban",
                    newbutton: "fa-external-link"
                },
                actions: {
                    common: "fa-fw",
                    edit: "fa-pencil",
                    del: "fa-trash-o",
                    save: "fa-floppy-o",
                    cancel: "fa-ban"
                },
                form: {
                    close: "fa-times",
                    prev: "fa-caret-left",
                    next: "fa-caret-right",
                    save: "fa-floppy-o",
                    undo: "fa-undo",
                    del: "fa-trash-o",
                    cancel: "fa-ban",
                    resizableLtr: "fa-rss fa-rotate-270"
                },
                search: {
                    search: "fa-search",
                    reset: "fa-undo",
                    query: "fa-comments-o"
                },
                subgrid: {
                    common: "fa-fw",
                    plus: "fa-plus",
                    minus: "fa-minus",
                    openLtr: "fa-reply fa-rotate-180",
                    openRtl: "fa-share fa-rotate-180"
                },
                grouping: {
                    common: "fa-fw",
                    plus: "fa-plus-square-o",
                    minus: "fa-minus-square-o"
                },
                treeGrid: {
                    common: "fa-fw",
                    minus: "fa-lg fa-sort-desc",
                    leaf: "fa-dot-circle-o",
                    plusLtr: "fa-lg fa-caret-right",
                    plusRtl: "fa-lg fa-caret-left"
                },
                checkbox: {
                    checkedClasses: "fa-check-square-o",
                    checked: "fa-check-square-o fa-lg",
                    unchecked: "fa-square-o fa-lg"
                }
            },
            fontAwesome5: {
                pager: {
                    common: "fa-fw",
                    first: "fa-step-backward",
                    prev: "fa-backward",
                    next: "fa-forward",
                    last: "fa-step-forward"
                },
                sort: {
                    common: "fa-lg",
                    asc: "fa-sort-up",
                    desc: "fa-sort-down"
                },
                gridMinimize: {
                    visible: "fa-chevron-circle-up",
                    hidden: "fa-chevron-circle-down"
                },
                nav: {
                    common: "fa-lg fa-fw",
                    edit: "fa-pencil-alt",
                    add: "fa-plus",
                    del: "fa-trash-alt",
                    search: "fa-search",
                    refresh: "fa-sync",
                    view: "fa-file",
                    save: "fa-save",
                    cancel: "fa-ban",
                    newbutton: "fa-external-link-alt"
                },
                actions: {
                    common: "fa-fw",
                    edit: "fa-pencil-alt",
                    del: "fa-trash-alt",
                    save: "fa-save",
                    cancel: "fa-ban"
                },
                form: {
                    close: "fa-times",
                    prev: "fa-caret-left",
                    next: "fa-caret-right",
                    save: "fa-save",
                    undo: "fa-undo",
                    del: "fa-trash-alt",
                    cancel: "fa-ban",
                    resizableLtr: "fa-rss fa-lg fa-rotate-270"
                },
                search: {
                    search: "fa-search",
                    reset: "fa-undo",
                    query: "fa-comments"
                },
                subgrid: {
                    common: "fa-fw",
                    plus: "fa-plus",
                    minus: "fa-minus",
                    openLtr: "fa-reply fa-rotate-180",
                    openRtl: "fa-share fa-rotate-180"
                },
                grouping: {
                    common: "fa-fw",
                    plus: "fa-plus-square",
                    minus: "fa-minus-square"
                },
                treeGrid: {
                    common: "fa-fw",
                    minus: "fa-lg fa-sort-down",
                    leaf: "fa-dot-circle",
                    plusLtr: "fa-lg fa-caret-right",
                    plusRtl: "fa-lg fa-caret-left"
                },
                checkbox: {
                    ignoreParents: !0,
                    checkedClasses: "fa-check-square",
                    checked: "far fa-check-square fa-lg",
                    unchecked: "far fa-square fa-lg"
                }
            },
            fontAwesomeBrands: {
                baseIconSet: "fontAwesome5",
                common: "fab"
            },
            fontAwesomeLight: {
                baseIconSet: "fontAwesome5",
                common: "fal"
            },
            fontAwesomeRegular: {
                baseIconSet: "fontAwesome5",
                common: "far"
            },
            fontAwesomeSolid: {
                baseIconSet: "fontAwesome5",
                common: "fas"
            },
            fontAwesomeSVG: {
                baseIconSet: "fontAwesome5",
                common: "fas"
            },
            glyph: {
                common: "glyphicon",
                pager: {
                    common: "",
                    first: "glyphicon-step-backward",
                    prev: "glyphicon-backward",
                    next: "glyphicon-forward",
                    last: "glyphicon-step-forward"
                },
                sort: {
                    common: "",
                    asc: "glyphicon-triangle-top",
                    desc: "glyphicon-triangle-bottom"
                },
                gridMinimize: {
                    visible: "glyphicon-circle-arrow-up",
                    hidden: "glyphicon-circle-arrow-down"
                },
                nav: {
                    common: "",
                    edit: "glyphicon-edit",
                    add: "glyphicon-plus",
                    del: "glyphicon-trash",
                    search: "glyphicon-search",
                    refresh: "glyphicon-refresh",
                    view: "glyphicon-file",
                    save: "glyphicon-save",
                    cancel: "glyphicon-ban-circle",
                    newbutton: "glyphicon-new-window"
                },
                actions: {
                    common: "",
                    edit: "glyphicon-edit",
                    del: "glyphicon-trash",
                    save: "glyphicon-save",
                    cancel: "glyphicon-ban-circle"
                },
                form: {
                    close: "glyphicon-remove-circle",
                    prev: "glyphicon-step-backward",
                    next: "glyphicon-step-forward",
                    save: "glyphicon-save",
                    undo: "glyphicon-repeat",
                    del: "glyphicon-trash",
                    cancel: "glyphicon-ban-circle",
                    resizableLtr: "glyphicon-import"
                },
                search: {
                    search: "glyphicon-search",
                    reset: "glyphicon-repeat",
                    query: "glyphicon-cog"
                },
                subgrid: {
                    common: "",
                    plus: "glyphicon-zoom-in",
                    minus: "glyphicon-zoom-out",
                    openLtr: "glyphicon-indent-left",
                    openRtl: "glyphicon-indent-left"
                },
                grouping: {
                    common: "",
                    plus: "glyphicon-expand",
                    minus: "glyphicon-collapse-down"
                },
                treeGrid: {
                    common: "",
                    minus: "glyphicon-triangle-bottom",
                    leaf: "glyphicon-record",
                    plusLtr: "glyphicon-triangle-right",
                    plusRtl: "glyphicon-triangle-left"
                },
                checkbox: {
                    checkedClasses: "glyphicon-check",
                    checked: "glyphicon-check",
                    unchecked: "glyphicon-unchecked"
                }
            }
        },
        guiStyles: {
            jQueryUI: {
                gBox: "ui-grid-jquery-ui ui-widget ui-widget-content ui-corner-all",
                gView: "",
                overlay: "ui-widget-overlay",
                loading: "ui-state-default ui-state-active",
                hDiv: "ui-state-default ui-corner-top",
                hTable: "",
                colHeaders: "ui-state-default",
                states: {
                    select: "ui-state-highlight",
                    disabled: "ui-state-disabled ui-grid-disablePointerEvents",
                    hover: "ui-state-hover",
                    error: "ui-state-error",
                    active: "ui-state-active",
                    textOfClickable: "ui-state-default"
                },
                dialog: {
                    header: "ui-widget-header ui-dialog-titlebar ui-corner-all ui-helper-clearfix",
                    window: "ui-grid-jquery-ui ui-widget ui-widget-content ui-corner-all ui-front",
                    document: "",
                    subdocument: "",
                    body: "",
                    footer: "",
                    content: "ui-widget-content",
                    hr: "ui-widget-content",
                    closeButton: "ui-corner-all",
                    fmButton: "ui-state-default",
                    dataField: "ui-widget-content ui-corner-all",
                    viewCellLabel: "ui-widget-content",
                    viewLabel: "",
                    viewCellData: "ui-widget-content",
                    viewData: "",
                    leftCorner: "ui-corner-left",
                    rightCorner: "ui-corner-right",
                    defaultCorner: "ui-corner-all"
                },
                filterToolbar: {
                    dataField: "ui-widget-content"
                },
                subgrid: {
                    thSubgrid: "ui-state-default",
                    rowSubTable: "ui-widget-content",
                    row: "ui-widget-content",
                    tdStart: "",
                    tdWithIcon: "ui-widget-content",
                    buttonDiv: "",
                    button: "",
                    tdData: "ui-widget-content",
                    legacyTable: ""
                },
                grid: "",
                gridRow: "ui-widget-content",
                rowNum: "ui-state-default",
                gridFooter: "",
                rowFooter: "ui-widget-content",
                gridTitle: "ui-widget-header ui-corner-top",
                gridError: "ui-state-error",
                gridErrorText: "",
                titleButton: "ui-corner-all",
                toolbarUpper: "ui-state-default",
                toolbarBottom: "ui-state-default",
                actionsDiv: "ui-widget-content",
                actionsButton: "ui-corner-all",
                pager: {
                    pager: "ui-state-default",
                    pagerButton: "ui-corner-all",
                    pagerInput: "ui-widget-content",
                    pagerSelect: "ui-widget-content"
                },
                navButton: "ui-corner-all",
                searchDialog: {
                    operator: "ui-corner-all",
                    label: "ui-corner-all",
                    elem: "ui-corner-all",
                    operationGroup: "",
                    addRuleButton: "ui-corner-all",
                    deleteRuleButton: "ui-corner-all",
                    operationSelect: "ui-corner-all",
                    addGroupButton: "ui-corner-all",
                    deleteGroupButton: "ui-corner-all"
                },
                searchToolbar: {
                    menu: "ui-menu-jqueryui ui-menu ui-widget ui-widget-content ui-corner-all",
                    menuItem: "ui-menu-item",
                    menuItemButton: "ui-corner-all",
                    operButton: "ui-corner-all",
                    clearButton: "ui-corner-all"
                },
                top: "ui-corner-top",
                bottom: "ui-corner-bottom",
                resizer: "ui-widget-header"
            },
            bootstrap: {
                gBox: "ui-grid-bootstrap",
                gView: "panel-info",
                overlay: "modal-backdrop",
                loading: "alert alert-info",
                hDiv: "",
                hTable: "table table-hover table-condensed table-bordered",
                colHeaders: "",
                states: {
                    select: "success",
                    disabled: "disabled ui-grid-disablePointerEvents",
                    hover: "active",
                    error: "danger",
                    active: "active",
                    textOfClickable: ""
                },
                dialog: {
                    header: "modal-header",
                    window: "modal ui-grid-bootstrap",
                    document: "modal-dialog",
                    subdocument: "modal-content",
                    body: "modal-body",
                    footer: "modal-footer",
                    content: "modal-content",
                    hr: "hidden",
                    closeButton: "btn btn-xs btn-default",
                    fmButton: "btn btn-default",
                    dataField: "form-control",
                    viewCellLabel: "",
                    viewLabel: "control-label",
                    viewCellData: "",
                    viewData: "form-control",
                    leftCorner: "",
                    rightCorner: "",
                    defaultCorner: ""
                },
                filterToolbar: {
                    dataField: "form-control"
                },
                subgrid: {
                    thSubgrid: "",
                    rowSubTable: "",
                    row: "",
                    tdStart: "",
                    tdWithIcon: "",
                    buttonDiv: "",
                    button: "btn btn-xs",
                    tdData: "",
                    legacyTable: "table table-condensed table-hover table-bordered"
                },
                grid: "table table-condensed table-hover table-bordered",
                gridRow: "",
                rowNum: "",
                gridFooter: "table table-hover table-condensed table-bordered",
                rowFooter: "",
                gridTitle: "",
                gridError: "alert alert-danger",
                gridErrorText: "sr-only",
                titleButton: "btn btn-xs btn-default",
                actionsDiv: "",
                actionsButton: "btn btn-xs btn-default",
                toolbarUpper: "",
                toolbarBottom: "",
                pager: {
                    pager: "panel-footer",
                    pagerButton: "btn btn-xs",
                    pagerInput: "form-control",
                    pagerSelect: "form-control"
                },
                navButton: "btn btn-xs",
                searchDialog: {
                    operator: "form-control",
                    label: "form-control",
                    elem: "form-control",
                    operationGroup: "form-inline",
                    addRuleButton: "btn btn-xs btn-default",
                    deleteRuleButton: "btn btn-xs btn-default",
                    operationSelect: "form-control",
                    addGroupButton: "btn btn-xs btn-default",
                    deleteGroupButton: "btn btn-xs btn-default"
                },
                searchToolbar: {
                    menu: "dropdown-menu",
                    menuItem: "",
                    menuItemButton: "ui-corner-all",
                    operButton: "btn btn-xs btn-default",
                    clearButton: "btn btn-xs btn-default"
                },
                top: "ui-grid-bootstrap-corner-top",
                bottom: "ui-grid-bootstrap-corner-bottom",
                resizer: "ui-grid-bootstrap"
            },
            bootstrapPrimary: {
                baseGuiStyle: "bootstrap",
                dialog: {
                    closeButton: "btn btn-xs close",
                    fmButton: "btn btn-primary"
                },
                searchDialog: {
                    addRuleButton: "btn btn-xs btn-primary",
                    deleteRuleButton: "btn btn-xs btn-primary",
                    addGroupButton: "btn btn-xs btn-primary",
                    deleteGroupButton: "btn btn-xs btn-primary"
                }
            },
            bootstrap4: {
                gBox: "ui-grid-bootstrap",
                gView: "card",
                overlay: "modal-backdrop",
                loading: "alert alert-info",
                hDiv: "",
                hTable: "table table-hover table-sm table-bordered",
                colHeaders: "",
                states: {
                    select: "table-success",
                    disabled: "disabled ui-grid-disablePointerEvents",
                    hover: "active",
                    hoverTh: "table-active",
                    error: "danger",
                    active: "active",
                    textOfClickable: ""
                },
                dialog: {
                    header: "modal-header",
                    window: "modal ui-grid-bootstrap",
                    document: "modal-dialog",
                    subdocument: "modal-content",
                    body: "modal-body",
                    footer: "modal-footer",
                    content: "modal-content",
                    hr: "d-none",
                    closeButton: "btn btn-xs btn-outline-primary",
                    fmButton: "btn btn-outline-secondary",
                    dataField: "form-control",
                    viewCellLabel: "",
                    viewLabel: "control-label",
                    viewCellData: "",
                    viewData: "form-control",
                    leftCorner: "",
                    rightCorner: "",
                    defaultCorner: ""
                },
                filterToolbar: {
                    dataField: "form-control"
                },
                subgrid: {
                    thSubgrid: "",
                    rowSubTable: "",
                    row: "",
                    tdStart: "",
                    tdWithIcon: "",
                    buttonDiv: "",
                    button: "btn btn-xs",
                    tdData: "",
                    legacyTable: "table table-condensed table-hover table-bordered"
                },
                grid: "table table-condensed table-hover table-bordered",
                gridRow: "",
                rowNum: "",
                gridFooter: "table table-hover table-condensed table-bordered",
                rowFooter: "",
                gridTitle: "",
                gridError: "alert alert-danger",
                gridErrorText: "sr-only",
                titleButton: "btn btn-xs btn-outline-primary",
                actionsDiv: "",
                actionsButton: "btn btn-xs btn-outline-secondary",
                toolbarUpper: "",
                toolbarBottom: "",
                pager: {
                    pager: "card-footer",
                    pagerButton: "btn btn-xs",
                    pagerInput: "form-control",
                    pagerSelect: "form-control"
                },
                navButton: "btn btn-xs",
                searchDialog: {
                    operator: "form-control",
                    label: "form-control",
                    elem: "form-control",
                    operationGroup: "form-inline",
                    addRuleButton: "btn btn-xs btn-default",
                    deleteRuleButton: "btn btn-xs btn-default",
                    operationSelect: "form-control",
                    addGroupButton: "btn btn-xs btn-default",
                    deleteGroupButton: "btn btn-xs btn-default"
                },
                searchToolbar: {
                    menu: "dropdown-menu",
                    menuItem: "",
                    menuItemButton: "dropdown-item",
                    operButton: "btn btn-xs btn-outline-secondary",
                    clearButton: "btn btn-xs btn-outline-secondary"
                },
                top: "ui-grid-bootstrap-corner-top",
                bottom: "ui-grid-bootstrap-corner-bottom",
                resizer: "ui-grid-bootstrap"
            }
        },
        htmlDecode: function(e) {
            return e && (" " === e || " " === e || 1 === e.length && 160 === e.charCodeAt(0)) ? "" : e ? String(e).replace(/>/g, ">").replace(/</g, "<").replace(/'/g, "'").replace(///g, "/").replace(/'/g, "'").replace(///g, "/").replace(/"/g, '"').replace(/&/g, "&") : e
        },
        htmlEncode: function(e) {
            return e ? String(e).replace(/&/g, "&").replace(/"/g, """).replace(/'/g, "'").replace(/\//g, "/").replace(//g, ">") : e
        },
        oldEncodePostedData: function(e) {
            return e ? String(e).replace(/&/g, "&").replace(/"/g, """).replace(//g, ">") : e
        },
        oldDecodePostedData: function(e) {
            return e && (" " === e || " " === e || 1 === e.length && 160 === e.charCodeAt(0)) ? "" : e ? String(e).replace(/>/g, ">").replace(/</g, "<").replace(/"/g, '"').replace(/&/g, "&") : e
        },
        clearArray: function(e) {
            for (; 0 < e.length;) e.pop()
        },
        format: function(e) {
            var r = $.makeArray(arguments).slice(1);
            return null == e && (e = ""), e.replace(/\{(\d+)\}/g, function(e, t) {
                return r[t]
            })
        },
        template: function(e) {
            var a, o = $.makeArray(arguments).slice(1),
                l = o.length;
            return null == e && (e = ""), e.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((\.*?)?\))?)?\}/g, function(e, t) {
                var r, i;
                if (!isNaN(parseInt(t, 10))) return o[parseInt(t, 10)];
                for (a = 0; a < l; a++)
                    if ($.isArray(o[a]))
                        for (i = (r = o[a]).length; i--;)
                            if (t === r[i].nm) return r[i].v
            })
        },
        msie: "Microsoft Internet Explorer" === navigator.appName,
        msiever: function() {
            var e, t = -1;
            return "Microsoft Internet Explorer" === navigator.appName ? null != (e = /(MSIE) ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)) && 3 === e.length && (t = parseFloat(e[2] || -1)) : "Netscape" === navigator.appName && null != (e = /rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)) && 2 === e.length && (t = parseFloat(e[1] || -1)), t
        },
        fixMaxHeightOfDiv: function(e) {
            return "Microsoft Internet Explorer" === navigator.appName ? Math.min(e, 1533917) : null != /(Firefox)/.exec(navigator.userAgent) ? Math.min(e, 17895696) : e
        },
        getRelativeRect: function(e) {
            var t, r, i = e instanceof $ && 0 < e.length ? e[0] : e,
                a = $(i).outerHeight(),
                o = $(this).closest(".ui-grid")[0];
            return o ? (t = null != i.getBoundingClientRect ? i.getBoundingClientRect() : $(i).offset(), r = null != o.getBoundingClientRect ? o.getBoundingClientRect() : $(o).offset(), {
                top: t.top + a - r.top,
                left: t.left - r.left
            }) : {
                top: 0,
                left: 0
            }
        },
        getCellIndex: function(e) {
            var t = $(e);
            return t.is("tr") ? -1 : null == (t = (t.is("td") || t.is("th") ? t : t.closest("td,th"))[0]) ? -1 : jgrid.msie ? $.inArray(t, t.parentNode.cells) : t.cellIndex
        },
        stripHtml: function(e) {
            return (e = String(e)) ? (e = e.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "")) && " " !== e && " " !== e ? e.replace(/"/g, "'") : "" : e
        },
        stripPref: function(e, t) {
            var r = $.type(e);
            return "string" !== r && "number" !== r || (t = "" !== (e = String(e)) ? String(t).replace(String(e), "") : t), t
        },
        getRes: function(e, t) {
            var r, i = t.split("."),
                a = i.length;
            if (null != e) {
                for (r = 0; r < a; r++) {
                    if (!i[r]) return null;
                    if (void 0 === (e = e[i[r]])) break;
                    if ("string" == typeof e) return e
                }
                return e
            }
        },
        parseDate: function(e, t, r, i) {
            var a, o, l, n = 0,
                s = 0,
                d = "string" == typeof t ? t.match(/^\/Date\((([\-+])?[0-9]+)(([\-+])([0-9]{2})([0-9]{2}))?\)\/$/) : null,
                c = function(e, t) {
                    for (e = String(e), t = parseInt(t, 10) || 2; e.length < t;) e = "0" + e;
                    return e
                },
                u = {
                    m: 1,
                    d: 1,
                    y: 1970,
                    h: 0,
                    i: 0,
                    s: 0,
                    u: 0
                },
                p = function(e, t) {
                    return 0 === e ? 12 === t && (t = 0) : 12 !== t && (t += 12), t
                };
            if (void 0 === (i = function(e, t) {
                    var r, i, a = ["AmPm", "dayNames", "masks", "monthNames", "userLocalTime", "parseRe", "S", "srcformat"],
                        o = t || {},
                        l = (jgrid.formatter || {}).date || {},
                        n = ((locales[(e || $.jgrid.defaults).locale] || {}).formatter || {}).date,
                        s = a.length,
                        d = {};
                    for (r = 0; r < s; r++) void 0 !== o[i = a[r]] ? d[i] = o[i] : void 0 !== l[i] ? d[i] = l[i] : void 0 !== n[i] && (d[i] = n[i]);
                    return d
                }(this.p, i)).parseRe && (i.parseRe = /[#%\\\/:_;.,\t\s\-]/), i.masks.hasOwnProperty(e) && (e = i.masks[e]), t && null != t)
                if (isNaN(t) || "u" !== String(e).toLowerCase())
                    if (isNaN(t) || "u1000" !== String(e).toLowerCase())
                        if (t.constructor === Date) n = t;
                        else if (null !== d) n = new Date(parseInt(d[1], 10)), d[3] && (s = 60 * Number(d[5]) + Number(d[6]), s *= "-" === d[4] ? 1 : -1, s -= n.getTimezoneOffset(), n.setTime(Number(Number(n) + 60 * s * 1e3)));
            else {
                for ("ISO8601Long" === i.srcformat && "Z" === t.charAt(t.length - 1) && (s -= (new Date).getTimezoneOffset()), t = String(t).replace(/\T/g, "#").replace(/\t/, "%").split(i.parseRe), e = e.replace(/\T/g, "#").replace(/\t/, "%").split(i.parseRe), o = 0, l = Math.min(e.length, t.length); o < l; o++) {
                    switch (e[o]) {
                        case "M":
                            -1 !== (a = $.inArray(t[o], i.monthNames)) && a < 12 && (t[o] = a + 1, u.m = t[o]);
                            break;
                        case "F":
                            -1 !== (a = $.inArray(t[o], i.monthNames, 12)) && 11 < a && (t[o] = a + 1 - 12, u.m = t[o]);
                            break;
                        case "n":
                            u.m = parseInt(t[o], 10);
                            break;
                        case "j":
                            u.d = parseInt(t[o], 10);
                            break;
                        case "g":
                            u.h = parseInt(t[o], 10);
                            break;
                        case "a":
                            -1 !== (a = $.inArray(t[o], i.AmPm)) && a < 2 && t[o] === i.AmPm[a] && (t[o] = a, u.h = p(t[o], u.h));
                            break;
                        case "A":
                            -1 !== (a = $.inArray(t[o], i.AmPm)) && 1 < a && t[o] === i.AmPm[a] && (t[o] = a - 2, u.h = p(t[o], u.h))
                    }
                    void 0 === t[o] || "" === t[o] || isNaN(t[o]) || (u[e[o].toLowerCase()] = parseInt(t[o], 10))
                }
                if (u.f && (u.m = u.f), 0 === u.m && 0 === u.y && 0 === u.d) return " ";
                u.m = parseInt(u.m, 10) - 1;
                var f = u.y;
                70 <= f && f <= 99 ? u.y = 1900 + u.y : 0 <= f && f <= 69 && (u.y = 2e3 + u.y), n = new Date(u.y, u.m, u.d, u.h, u.i, u.s, u.u), 0 !== s && n.setTime(Number(Number(n) + 60 * s * 1e3))
            } else n = new Date(parseFloat(t));
            else n = new Date(1e3 * parseFloat(t));
            else n = new Date(u.y, u.m, u.d, u.h, u.i, u.s, u.u);
            if (i.userLocalTime && 0 === s && 0 !== (s -= (new Date).getTimezoneOffset()) && n.setTime(Number(Number(n) + 60 * s * 1e3)), void 0 === r) return n;
            if (i.masks.hasOwnProperty(r) ? r = i.masks[r] : r || (r = "Y-m-d"), "u1000" === r.toLowerCase()) return n.getTime();
            var h = n.getHours(),
                g = n.getMinutes(),
                m = n.getDate(),
                v = n.getMonth() + 1,
                b = n.getTimezoneOffset(),
                w = n.getSeconds(),
                y = n.getMilliseconds(),
                x = n.getDay(),
                j = n.getFullYear(),
                C = (x + 6) % 7 + 1,
                D = (new Date(j, v - 1, m) - new Date(j, 0, 1)) / 864e5,
                S = C < 5 ? Math.floor((D + C - 1) / 7) + 1 : Math.floor((D + C - 1) / 7) || ((new Date(j - 1, 0, 1).getDay() + 6) % 7 < 4 ? 53 : 52),
                q = {
                    d: c(m),
                    D: i.dayNames[x],
                    j: m,
                    l: i.dayNames[x + 7],
                    N: C,
                    S: i.S(m),
                    w: x,
                    z: D,
                    W: S,
                    F: i.monthNames[v - 1 + 12],
                    m: c(v),
                    M: i.monthNames[v - 1],
                    n: v,
                    t: "?",
                    L: "?",
                    o: "?",
                    Y: j,
                    y: String(j).substring(2),
                    a: h < 12 ? i.AmPm[0] : i.AmPm[1],
                    A: h < 12 ? i.AmPm[2] : i.AmPm[3],
                    B: "?",
                    g: h % 12 || 12,
                    G: h,
                    h: c(h % 12 || 12),
                    H: c(h),
                    i: c(g),
                    s: c(w),
                    u: y,
                    e: "?",
                    I: "?",
                    O: (0 < b ? "-" : "+") + c(100 * Math.floor(Math.abs(b) / 60) + Math.abs(b) % 60, 4),
                    P: "?",
                    T: (String(n).match(/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[\-+]\d{4})?)\b/g) || [""]).pop().replace(/[^\-+\dA-Z]/g, ""),
                    Z: "?",
                    c: "?",
                    r: "?",
                    U: Math.floor(n / 1e3)
                };
            return r.replace(/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g, function(e) {
                return q.hasOwnProperty(e) ? q[e] : e.substring(1)
            })
        },
        parseDateToNumber: function(e, t) {
            var r = jgrid.parseDate.call(this, e, t);
            return r instanceof Date ? r.getTime() : 0
        },
        jqID: function(e) {
            return String(e).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g, "\\$&")
        },
        getGridComponentId: function(e) {
            if (null == this.p || !this.p.id) return "";
            var t = this.p.id;
            switch (e) {
                case COMPONENT_NAMES.GRID:
                    return t;
                case COMPONENT_NAMES.GRID_BOX_DIV:
                    return "gbox_" + t;
                case COMPONENT_NAMES.GRID_VIEW_DIV:
                    return "gview_" + t;
                case COMPONENT_NAMES.DIALOG_ALERT_DIV:
                    return "alertmod_" + t;
                case COMPONENT_NAMES.COLUMN_RESIZER_DIV:
                    return "rs_m" + t;
                case COMPONENT_NAMES.HEADER_SELECT_ALL_ROWS_CHECKBOX:
                    return "cb_" + t;
                case COMPONENT_NAMES.SEARCH_OPERATION_MENU_UL:
                    return "sopt_menu";
                default:
                    return ""
            }
        },
        getGridComponentIdSelector: function(e) {
            var t = jgrid.getGridComponentId.call(this, e);
            return t ? "#" + jgrid.jqID(t) : ""
        },
        isHTMLElement: function(e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement : null != e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
        },
        getGridComponent: function(e, t) {
            var r;
            if (t instanceof $ || 0 < t.length) r = t[0];
            else {
                if (!jgrid.isHTMLElement(t)) return $();
                t = $(r = t)
            }
            switch (e) {
                case COMPONENT_NAMES.BODY_TABLE:
                    return t.hasClass("ui-grid-bdiv") ? t.children("div").children(".ui-grid-btable") : $();
                case COMPONENT_NAMES.HEADER_TABLE:
                    return t.hasClass("ui-grid-hdiv") ? t.children("div").children(".ui-grid-htable") : $();
                case COMPONENT_NAMES.FOOTER_TABLE:
                    return t.hasClass("ui-grid-sdiv") ? t.children("div").children(".ui-grid-ftable") : $();
                case COMPONENT_NAMES.FROZEN_HEADER_TABLE:
                    return t.hasClass("ui-grid-hdiv") ? t.children(".ui-grid-htable") : $();
                case COMPONENT_NAMES.FROZEN_FOOTER_TABLE:
                    return t.hasClass("ui-grid-sdiv") ? t.children(".ui-grid-ftable") : $();
                case COMPONENT_NAMES.BODY_DIV:
                    return t.hasClass("ui-grid-btable") && null != r.grid ? $(r.grid.bDiv) : $();
                case COMPONENT_NAMES.HEADER_DIV:
                    return t.hasClass("ui-grid-btable") && null != r.grid ? $(r.grid.hDiv) : $();
                case COMPONENT_NAMES.FOOTER_DIV:
                    return t.hasClass("ui-grid-btable") && null != r.grid ? $(r.grid.sDiv) : $();
                default:
                    return $()
            }
        },
        fixScrollOffsetAndhBoxPadding: function() {
            var e = this.grid;
            if (e) {
                var r = this.p,
                    i = e.bDiv,
                    t = function(e) {
                        var t = $(e).children("div").first();
                        t.css(t.hasClass("ui-grid-hbox-rtl") ? "padding-left" : "padding-right", r.scrollOffset), e.scrollLeft = i.scrollLeft
                    };
                0 < $(i).width() && (r.scrollOffset = i.offsetWidth - i.clientWidth, t(e.hDiv), e.sDiv && t(e.sDiv))
            }
        },
        mergeCssClasses: function() {
            var e, t, r, i, a = $.makeArray(arguments),
                o = {},
                l = [];
            for (e = 0; e < a.length; e++)
                for (r = String(a[e]).replace(/[\t\r\n\f]/g, " ").split(" "), t = 0; t < r.length; t++) "" === (i = r[t]) || o.hasOwnProperty(i) || (o[i] = !0, l.push(i));
            return l.join(" ")
        },
        hasOneFromClasses: function(e, t) {
            var r, i = $(e),
                a = String(t).replace(/[\t\r\n\f]/g, " ").split(" "),
                o = a.length;
            for (r = 0; r < o; r++)
                if (i.hasClass(a[r])) return !0;
            return !1
        },
        hasAllClasses: function(e, t) {
            var r, i = $(e),
                a = String(t).replace(/[\t\r\n\f]/g, " ").split(" "),
                o = a.length;
            for (r = 0; r < o; r++)
                if (!i.hasClass(a[r])) return !1;
            return !0
        },
        detectRowEditing: function(e) {
            return this.grid && null != this.p && null != this.p.editingInfo && null != this.p.editingInfo[e] ? this.p.editingInfo[e] : null
        },
        getCell: function(e, t) {
            var r, i, a = this.grid,
                o = this.p;
            return a && o ? ((e instanceof $ || 0 < e.length) && (e = e[0]), ("object" == typeof HTMLTableRowElement || "function" == typeof HTMLTableRowElement) && e instanceof HTMLTableRowElement && null != e.cells ? (i = $(e.cells[t]), null != (r = a.fbRows) && t < r[0].cells.length ? i.add(r[e.rowIndex].cells[t]) : i) : $()) : $()
        },
        getDataFieldOfCell: function(e, t) {
            var r, i = this.p,
                a = jgrid.getCell.call(this, e, t);
            return i.treeGrid && 0 < a.children("div.tree-wrap").length && (a = a.children("span.cell-wrapperleaf,span.cell-wrapper")), i.colModel[t].autoResizable ? 0 === (r = a.children("span." + i.autoResizing.wrapperClassName)).length && (r = a) : r = a, r
        },
        enumEditableCells: function(e, t, r) {
            var i = this,
                a = i.grid,
                o = i.rows,
                l = i.p;
            if (null == a || null == o || null == l || null == e || null == e.rowIndex || !e.id || !$.isFunction(r)) return null;
            var n, s, d, c, u, p, f, h, g, m, v, b = l.colModel,
                w = b.length,
                y = e.rowIndex,
                x = a.fbRows,
                j = null != x,
                C = j ? x[y] : null;
            for (j && (e = i.rows[y]), n = 0; n < w && ("cb" === (d = (s = b[n]).name) || "subgrid" === d || "rn" === d || (j && !s.frozen && (j = !1), g = (j ? C : e).cells[n], (m = $(g)).hasClass("not-editable-cell") || (v = m.width(), !0 === l.treeGrid && d === l.ExpandColumn ? (v -= m.children("div.tree-wrap").outerWidth(), m = m.children("span.cell-wrapperleaf,span.cell-wrapper").first()) : v = 0, u = stripPref(l.idPrefix, e.id), c = {
                    rowid: e.id,
                    id: u,
                    iCol: n,
                    iRow: y,
                    cmName: d,
                    cm: s,
                    mode: t,
                    td: g,
                    tr: e,
                    trFrozen: C,
                    dataElement: m[0],
                    dataWidth: v
                }, "local" === l.datatype && (f = null != (p = l._index[u]) ? l.data[p] : void 0) && (c.item = f), s.edittype || (s.edittype = "text"), ((l.editingInfo[e.id] || {}).editable || {}).hasOwnProperty(d) ? h = l.editingInfo[e.id].editable[d] : (h = s.editable, h = $.isFunction(h) ? h.call(i, c) : h), !0 !== h && "hidden" !== h || (c.editable = h, !1 !== r.call(i, c))))); n++);
        },
        getEditedValue: function(e, t, r, i) {
            var a, o, l, n, s, d, c = t.formatoptions || {},
                u = t.editoptions || {},
                p = u.custom_value,
                f = "[name=" + jgrid.jqID(t.name) + "]",
                h = this,
                g = $(h);
            if ("hidden" === i || "readonly" === i) return $(h).jqGrid("getCell", e.closest("tr.jqgrow").attr("id"), t.name);
            switch (t.edittype) {
                case "checkbox":
                    o = ["Yes", "No"], "string" == typeof u.value && (o = u.value.split(":")), a = e.find("input[type=checkbox]").is(":checked") ? o[0] : o[1];
                    break;
                case "text":
                case "password":
                case "textarea":
                case "button":
                    a = (n = e.find("input" + f + ",textarea" + f)).val(), "date" === n.prop("type") && 3 === String(a).split("-").length && (l = c.newformat || g.jqGrid("getGridRes", "formatter.date.newformat"), a = jgrid.parseDate.call(h, "Y-m-d", a, l));
                    break;
                case "select":
                    n = e.find("select option:selected"), u.multiple ? (s = [], d = [], n.each(function() {
                        s.push($(this).val()), d.push($(this).text())
                    }), a = s.join(","), r.text = d.join(",")) : (a = n.val(), r.text = n.text()), r.value = a;
                    break;
                case "custom":
                    try {
                        if (!$.isFunction(p)) throw "e1";
                        if (void 0 === (a = p.call(h, e.find(".customelement"), "get"))) throw "e2"
                    } catch (e) {
                        var m, v = jgrid.info_dialog,
                            b = function(e) {
                                g.jqGrid("getGridRes", e)
                            };
                        switch (String(e)) {
                            case "e1":
                                m = "function 'custom_value' " + b("edit.msg.nodefined");
                                break;
                            case "e2":
                                break;
                            default:
                                m = e.message
                        }
                        v && $.isFunction(v) ? v.call(h, b("errors.errcap"), m, b("edit.bClose")) : ($.isFunction(defaults.fatalError) ? defaults.fatalError : alert)(m)
                    }
                    break;
                default:
                    a = e.find("*" + f).text()
            }
            return a
        },
        guid: 1,
        uidPref: "jqg",
        randId: function(e) {
            return (e || jgrid.uidPref) + jgrid.guid++
        },
        getAccessor: function(e, t) {
            var r, i, a, o = [];
            if ($.isFunction(t)) return t(e);
            if (null != e && e.hasOwnProperty(t)) return e[t];
            try {
                if ("string" == typeof t && (o = t.split(".")), a = o.length)
                    for (r = e; null != r && a--;) i = o.shift(), r = r.hasOwnProperty(i) ? r[i] : void 0
            } catch (e) {}
            return r
        },
        getXmlData: function(e, t, r) {
            var i = "string" == typeof t ? t.match(/^(.*)\[(\w+)\]$/) : null;
            if ($.isFunction(t)) return t(e);
            if (i && i[2]) return i[1] ? $(i[1], e).attr(i[2]) : $(e).attr(i[2]);
            if (void 0 !== e) {
                var a = $(e).find(t);
                return r ? a : 0 < a.length ? $(a).text() : void 0
            }
        },
        cellWidth: function() {
            var e = $("
"),
                t = e.appendTo("body").find("td").width();
            return e.remove(), .1 < Math.abs(t - 5)
        },
        isCellClassHidden: function(e) {
            if (null == e || "" === e) return !1;
            var t = $("
"),
                r = t.appendTo("body").find("td").is(":hidden");
            return t.remove(), r
        },
        cell_width: !0,
        ajaxOptions: {},
        from: function(source) {
            var context = this,
                QueryObject = function(d, q) {
                    var self = this,
                        _data = d,
                        _usecase = !0,
                        _trim = !1,
                        _query = q,
                        _stripNum = /[\$,%]/g,
                        _lastCommand = null,
                        _lastField = null,
                        _orDepth = 0,
                        _negate = !1,
                        _queuedOperator = "",
                        _sorting = [],
                        toString = Object.prototype.toString;
                    if ("object" != typeof d || !d.push) throw "data provides is not an array";
                    if (0 < d.length && "object" != typeof d[0]) throw "data items are not objects";
                    return this._hasData = function() {
                        return null !== _data && 0 !== _data.length
                    }, this._getStr = function(e) {
                        var t = [];
                        return _trim && t.push("jQuery.trim("), t.push("String(" + e + " || '')"), _trim && t.push(")"), _usecase || t.push(".toUpperCase()"), t.join("")
                    }, this._strComp = function(e) {
                        return "string" == typeof e ? ".toString()" : ""
                    }, this._group = function(e, t) {
                        return {
                            field: e.toString(),
                            unique: t,
                            items: []
                        }
                    }, this._toStr = function(e) {
                        return _trim && (e = $.trim(e)), e = e.toString().replace(/\\/g, "\\\\").replace(/"/g, '\\"'), _usecase ? e : e.toUpperCase()
                    }, this._funcLoop = function(r) {
                        var i = [];
                        return $.each(_data, function(e, t) {
                            i.push(r(t))
                        }), i
                    }, this._append = function(e) {
                        var t;
                        for (null === _query ? _query = "" : _query += "" === _queuedOperator ? " && " : _queuedOperator, t = 0; t < _orDepth; t++) _query += "(";
                        _negate && (_query += "!"), _query += "(" + e + ")", _negate = !1, _queuedOperator = "", _orDepth = 0
                    }, this._setCommand = function(e, t) {
                        _lastCommand = e, _lastField = t
                    }, this._resetNegate = function() {
                        _negate = !1
                    }, this._repeatCommand = function(e, t) {
                        return null === _lastCommand ? self : null !== e && null !== t ? _lastCommand(e, t) : null === _lastField ? _lastCommand(e) : _lastCommand(_lastField, e)
                    }, this._equals = function(e, t) {
                        return 0 === self._compare(e, t, 1)
                    }, this._compare = function(e, t, r) {
                        return void 0 === r && (r = 1), void 0 === e && (e = null), void 0 === t && (t = null), null === e && null === t ? 0 : null === e && null !== t ? 1 : null !== e && null === t ? -1 : ("[object Date]" === toString.call(e) && "[object Date]" === toString.call(t) || _usecase || "number" == typeof e || "number" == typeof t || (e = String(e), t = String(t)), e < t ? -r : t < e ? r : 0)
                    }, this._performSort = function() {
                        0 !== _sorting.length && (_data = self._doSort(_data, 0))
                    }, this._doSort = function(e, t) {
                        var r = _sorting[t].by,
                            i = _sorting[t].dir,
                            a = _sorting[t].type,
                            o = _sorting[t].datefmt,
                            l = _sorting[t].sfunc;
                        if (t === _sorting.length - 1) return self._getOrder(e, r, i, a, o, l);
                        t++;
                        var n, s, d, c = self._getGroup(e, r, i, a, o),
                            u = [];
                        for (n = 0; n < c.length; n++)
                            for (d = self._doSort(c[n].items, t), s = 0; s < d.length; s++) u.push(d[s]);
                        return u
                    }, this._getOrder = function(e, r, t, i, a, o) {
                        var l, n, s, d = [],
                            c = [],
                            u = "a" === t ? 1 : -1;
                        void 0 === i && (i = "text"), s = "float" === i || "number" === i || "currency" === i || "numeric" === i ? function(e) {
                            var t = parseFloat(String(e).replace(_stripNum, ""));
                            return isNaN(t) ? Number.NEGATIVE_INFINITY : t
                        } : "int" === i || "integer" === i ? function(e) {
                            return null != e ? parseFloat(String(e).replace(_stripNum, "")) : Number.NEGATIVE_INFINITY
                        } : "date" === i || "datetime" === i ? function(e) {
                            return jgrid.parseDateToNumber.call(context, a, e)
                        } : $.isFunction(i) ? i : function(e) {
                            return e = null != e ? $.trim(String(e)) : "", _usecase ? e : e.toUpperCase()
                        }, $.each(e, function(e, t) {
                            void 0 === (n = "" !== r ? jgrid.getAccessor(t, r) : t) && (n = ""), n = s.call(context, n, t), c.push({
                                vSort: n,
                                data: t,
                                index: e
                            })
                        }), $.isFunction(o) ? c.sort(function(e, t) {
                            return o.call(context, e.vSort, t.vSort, u, e.data, t.data)
                        }) : c.sort(function(e, t) {
                            return self._compare(e.vSort, t.vSort, u)
                        });
                        for (var p = 0, f = e.length; p < f;) l = c[p].index, d.push(e[l]), p++;
                        return d
                    }, this._getGroup = function(e, i, t, r, a) {
                        var o = [],
                            l = null,
                            n = null;
                        return $.each(self._getOrder(e, i, t, r, a), function(e, t) {
                            var r = jgrid.getAccessor(t, i);
                            null == r && (r = ""), self._equals(n, r) || (n = r, null !== l && o.push(l), l = self._group(i, r)), l.items.push(t)
                        }), null !== l && o.push(l), o
                    }, this.ignoreCase = function() {
                        return _usecase = !1, self
                    }, this.useCase = function() {
                        return _usecase = !0, self
                    }, this.trim = function() {
                        return _trim = !0, self
                    }, this.noTrim = function() {
                        return _trim = !1, self
                    }, this.execute = function() {
                        var match = _query,
                            results = [];
                        return null === match || ($.each(_data, function() {
                            (function() {
                                var localMath = '(function (context) {\nvar yesObject = { 1: 1, x: 1, "true": 1, yes: 1, y: 1, on: 1 },noObject = { 0: 1, "false": 1, no: 1, n: 1, off: 1 },normilizeBoolean = function (v) {\nif (typeof v === "string") {\nif (noObject[v.toLowerCase()]) { return false; } else if (yesObject[v.toLowerCase()]) { return true; } }\nreturn !!v;\n},intFunc = function (jQuery, self) { return ' + match + "; }; return intFunc.call(context.item, context.jQuery, context.context); }(this))";
                                eval(localMath) && results.push(this.item)
                            }).call({
                                item: this,
                                jQuery: $,
                                context: context
                            })
                        }), _data = results), self
                    }, this.data = function() {
                        return _data
                    }, this.select = function(r) {
                        if (self.execute(), $.isFunction(r)) {
                            var i = [];
                            return $.each(_data, function(e, t) {
                                i.push(r(t))
                            }), i
                        }
                        return self._hasData() ? (self._performSort(), _data) : []
                    }, this.hasMatch = function() {
                        return !!self._hasData() && (self.execute(), 0 < _data.length)
                    }, this.andNot = function(e, t, r) {
                        return _negate = !_negate, self.and(e, t, r)
                    }, this.orNot = function(e, t, r) {
                        return _negate = !_negate, self.or(e, t, r)
                    }, this.not = function(e, t, r) {
                        return self.andNot(e, t, r)
                    }, this.and = function(e, t, r) {
                        return _queuedOperator = " && ", void 0 === e ? self : self._repeatCommand(e, t, r)
                    }, this.or = function(e, t, r) {
                        return _queuedOperator = " || ", void 0 === e ? self : self._repeatCommand(e, t, r)
                    }, this.orBegin = function() {
                        return _orDepth++, self
                    }, this.orEnd = function() {
                        return null !== _query && (_query += ")"), self
                    }, this.isNot = function(e) {
                        return _negate = !_negate, self.is(e)
                    }, this.is = function(e) {
                        return self._append("this." + e), self._resetNegate(), self
                    }, this._compareValues = function(e, t, r, i, a) {
                        var o = t;
                        void 0 === r && (r = null);
                        var l = r,
                            n = void 0 === a.stype ? "text" : a.stype;
                        if (null !== r) switch (n) {
                            case "int":
                            case "integer":
                                l = String(l).replace(_stripNum, ""), l = isNaN(Number(l)) || "" === l ? "0" : Number(l), o = "parseInt(" + o + "||0,10)", l = String(parseInt(l, 10));
                                break;
                            case "boolean":
                                o = "normilizeBoolean(" + o + ")", l = "normilizeBoolean(" + String(l) + ")";
                                break;
                            case "float":
                            case "number":
                            case "currency":
                            case "numeric":
                                l = String(l).replace(_stripNum, ""), l = isNaN(Number(l)) || "" === l ? "0" : Number(l), o = "parseFloat(" + o + "||0)", l = String(l);
                                break;
                            case "date":
                            case "datetime":
                                l = String(jgrid.parseDateToNumber.call(context, a.newfmt || "Y-m-d", l)), o = 'jQuery.jgrid.parseDateToNumber.call(self,"' + a.srcfmt + '",' + o + ")";
                                break;
                            default:
                                o = self._getStr(o), l = self._getStr('"' + self._toStr(l) + '"')
                        }
                        return self._append(o + " " + i + " " + l), self._setCommand(e, t), self._resetNegate(), self
                    }, this.equals = function(e, t, r) {
                        return self._compareValues(self.equals, e, t, "==", r)
                    }, this.notEquals = function(e, t, r) {
                        return self._compareValues(self.equals, e, t, "!==", r)
                    }, this.isNull = function(e, t, r) {
                        return self._compareValues(self.equals, e, null, "===", r)
                    }, this.greater = function(e, t, r) {
                        return self._compareValues(self.greater, e, t, ">", r)
                    }, this.less = function(e, t, r) {
                        return self._compareValues(self.less, e, t, "<", r)
                    }, this.greaterOrEquals = function(e, t, r) {
                        return self._compareValues(self.greaterOrEquals, e, t, ">=", r)
                    }, this.lessOrEquals = function(e, t, r) {
                        return self._compareValues(self.lessOrEquals, e, t, "<=", r)
                    }, this.startsWith = function(e, t) {
                        var r = null == t ? e : t,
                            i = _trim ? $.trim(r.toString()).length : r.toString().length;
                        return self._append(self._getStr(e) + ".substr(0," + i + ") == " + self._getStr('"' + self._toStr(t) + '"')), self._setCommand(self.startsWith, e), self._resetNegate(), self
                    }, this.endsWith = function(e, t) {
                        var r = null == t ? e : t,
                            i = _trim ? $.trim(r.toString()).length : r.toString().length;
                        return self._append(self._getStr(e) + ".substr(" + self._getStr(e) + ".length-" + i + "," + i + ') == "' + self._toStr(t) + '"'), self._setCommand(self.endsWith, e), self._resetNegate(), self
                    }, this.contains = function(e, t) {
                        return self._append(self._getStr(e) + '.indexOf("' + self._toStr(t) + '",0) > -1'), self._setCommand(self.contains, e), self._resetNegate(), self
                    }, this.groupBy = function(e, t, r, i) {
                        return self._hasData() ? self._getGroup(_data, e, t, r, i) : null
                    }, this.orderBy = function(e, t, r, i, a) {
                        return null == r && (r = "text"), null == i && (i = "Y-m-d"), null == a && (a = !1), "desc" !== (t = null == t ? "a" : $.trim(t.toString().toLowerCase())) && "descending" !== t || (t = "d"), "asc" !== t && "ascending" !== t || (t = "a"), _sorting.push({
                            by: e,
                            dir: t,
                            type: r,
                            datefmt: i,
                            sfunc: a
                        }), self
                    }, this.inSet = function(e, t, r) {
                        var i = void 0 === t ? null : t,
                            a = void 0 === r.stype ? "text" : r.stype;
                        return i = self._getStr('"' + self._toStr(i) + '"'), "text" !== a ? self._compareValues(self.equals, e, t, "==", r) : (self._append("jQuery.inArray(" + self._getStr(e) + "," + i + ".split('" + (context.p.inFilterSeparator || ",") + "')) >= 0"), self._setCommand(self.inSet, e), self._resetNegate(), self)
                    }, this.custom = function(e, t, r) {
                        return self._append("self.p.customSortOperations." + e + '.filter.call(self,{item:this,cmName:"' + t + '",iCol:self.p.iColByName["' + t + '"]>=0 ? self.p.iColByName["' + t + '"] : self.p.iPropByName["' + t + '"],isAddProp:self.p.iColByName["' + t + '"]<0,searchValue:"' + r + '"})'), self._setCommand(self.custom, t), self._resetNegate(), self
                    }, self
                };
            return new QueryObject(source, null)
        },
        serializeFeedback: function(e, t, r) {
            var i, a = this;
            return a instanceof $ && 0 < a.length && (a = a[0]), "string" == typeof r ? r : "string" == typeof(i = $(a).triggerHandler(t, r)) ? i : (null != i && "object" == typeof i || (i = r), $.isFunction(e) ? e.call(a, i) : i)
        },
        fullBoolFeedback: function(e, t) {
            var r = $.makeArray(arguments).slice(2),
                i = $(this).triggerHandler(t, r);
            if (i = !1 !== i && "stop" !== i, $.isFunction(e)) {
                var a = e.apply(this, r);
                !1 !== a && "stop" !== a || (i = !1)
            }
            return i
        },
        feedback: function(e, t, r, i) {
            var a = this;
            if (a instanceof $ && 0 < a.length && (a = a[0]), null == e || "string" != typeof i || i.length < 2) return null;
            var o = "on" === i.substring(0, 2) ? "jqGrid" + t + i.charAt(2).toUpperCase() + i.substring(3) : "jqGrid" + t + i.charAt(0).toUpperCase() + i.substring(1),
                l = $.makeArray(arguments).slice(4),
                n = e[i + r];
            return l.unshift(o), l.unshift(n), jgrid.fullBoolFeedback.apply(a, l)
        },
        builderSortIcons: function(a) {
            var o = this,
                l = o.p,
                n = $(o),
                s = n.jqGrid("getGuiStyles", "states.disabled"),
                e = function(e) {
                    var t = l.colModel[a],
                        r = null != t && $.isFunction(t.sortIconName) ? t.sortIconName : l.sortIconName,
                        i = $.isFunction(r) ? r.call(o, {
                            order: e,
                            iCol: a,
                            cm: t
                        }) : n.jqGrid("getIconRes", "sort." + e);
                    return jgrid.mergeCssClasses("ui-grid-ico-sort", "ui-icon-" + e, "horizontal" === l.viewsortcols[1] ? "ui-i-" + e : "", s, i, "ui-sort-" + l.direction)
                };
            return ""
        },
        builderFmButon: function(e, t, r, i, a) {
            var o = this.p,
                l = $(this),
                n = function(e) {
                    return l.jqGrid("getGuiStyles", "dialog." + e)
                };
            return null == o ? "" : "" + (r ? "" : "") + (t ? "" + t + "" : "") + ""
        },
        convertOnSaveLocally: function(e, t, r, i, a, o) {
            if (null == this.p) return e;
            if ($.isFunction(t.convertOnSave)) return t.convertOnSave.call(this, {
                newValue: e,
                cm: t,
                oldValue: r,
                id: i,
                item: a,
                iCol: o
            });
            if ("boolean" != typeof r && "number" != typeof r) return e;
            if ("boolean" != typeof r || "checkbox" !== t.edittype && "checkbox" !== t.formatter) "number" != typeof r || isNaN(e) || ("number" === t.formatter || "currency" === t.formatter ? e = parseFloat(e) : "integer" === t.formatter && (e = parseInt(e, 10)));
            else {
                var l = String(e).toLowerCase(),
                    n = null != t.editoptions && "string" == typeof t.editoptions.value ? t.editoptions.value.split(":") : ["yes", "no"];
                0 <= $.inArray(l, ["1", "true", n[0].toLowerCase()]) ? e = !0 : 0 <= $.inArray(l, ["0", "false", n[1].toLowerCase()]) && (e = !1)
            }
            return e
        },
        parseDataToHtml: function(e, t, r, i, a, o, l) {
            var n, s, d, c, u, p, f, h, g, m, v, b, w, y, x, j, C, D, S, q, F, R, _, I, G, O, k, N, E = this,
                A = E.p,
                T = $(E),
                M = !1,
                B = [],
                P = [],
                z = !0 !== A.altRows || T.jqGrid("isBootstrapGuiStyle") ? "" : A.altclass,
                L = A.groupingView,
                V = !1,
                H = parseInt(A.rowNum, 10),
                W = $.fn.jqGrid,
                U = !0 === A.treeGrid && -1 < A.treeANode ? E.rows[A.treeANode].rowIndex + 1 : E.rows.length,
                Y = E.formatCol;
            for (U <= 1 && (A.rowIndexes = {}), ("local" === A.datatype && !A.deselectAfterSort || A.multiPageSelection) && (M = !0), o && (H *= o + 1), n = 0; n < Math.min(e, H); n++) {
                for (u = t[n], p = r[n], f = null != i ? i[n] : p, d = ((1 === a ? 0 : a) + n) % 2 == 1 ? z : "", M ? A.multiselect ? (c = -1 !== $.inArray(u, A.selarrrow)) && null === A.selrow && (A.selrow = u) : c = u === A.selrow : c = !1, h = B.length, B.push(""), s = 0; s < A.colModel.length; s++) switch (g = A.colModel[s].name) {
                    case "rn":
                        B.push((I = s, G = n, O = A.page, k = A.rowNum, void 0, N = (parseInt(O, 10) - 1) * parseInt(k, 10) + 1 + G, "" + N + ""));
                        break;
                    case "cb":
                        B.push((F = void 0, F = " ", R = !(R = void 0), _ = {
                            rowid: C = u,
                            iRow: S = n,
                            iCol: D = s,
                            data: p,
                            checked: q = c
                        }, $.isFunction(A.hasMultiselectCheckBox) && (R = A.hasMultiselectCheckBox.call(E, _)), R && (F = $.isFunction(A.checkboxHtml) ? A.checkboxHtml.call(E, _) : ""), "" + F + ""));
                        break;
                    case "subgrid":
                        B.push(W.addSubGridCell.call(T, s, n + a, u, p));
                        break;
                    default:
                        B.push((m = u, v = p[g], b = s, w = n + a, y = f, x = p, void 0, j = E.formatter(m, v, b, y, "add", x), "" + j + ""))
                }
                A.grouping && (W.groupingPrepare && !L._locgr && W.groupingPrepare.call(T, p, n), V = $.isFunction(L.groupCollapse) ? L.groupCollapse.call(E, {
                    group: L.groups[L.groups.length - 1],
                    rowid: u,
                    data: p
                }) : L.groupCollapse), B[h] = E.constructTr(u, V, d, p, f, c), B.push(""), A.rowIndexes[u] = U, U++, A.grouping && (P.push(B), B = []), B.length > A.maxItemsToJoin && (B = [B.join("")])
            }
            return A.grouping && W.groupingRender && (l && (L._locgr = !0), B = [W.groupingRender.call(T, P, H)], jgrid.clearArray(P)), B
        },
        fillSelectOptions: function(e, t, r, i, a, o) {
            var l, n, s, d, c, u, p, f, h = [],
                g = !1,
                m = function(e, t) {
                    if (0 < t) return e
                };
            if (t) {
                if ("function" == typeof t && (t = t()), "string" == typeof t)
                    for (n = t.split(i), l = 0; l < n.length; l++) 2 < (s = n[l].split(r)).length && (s[1] = $.map(s, m).join(r)), h.push({
                        value: s[0],
                        innerHtml: s[1],
                        selectValue: $.trim(s[0]),
                        selectText: $.trim(s[1]),
                        selected: !1
                    }), "" === s[0] && (g = !0);
                else if ("object" == typeof t)
                    for (p in t) t.hasOwnProperty(p) && h.push({
                        value: p,
                        innerHtml: t[p],
                        selectValue: $.trim(p),
                        selectText: $.trim(t[p]),
                        selected: !1
                    }), "" === p && (g = !0);
                if ("string" == typeof o) {
                    for (f = a ? $.map(o.split(","), function(e) {
                            return $.trim(e)
                        }) : [$.trim(o)], o = $.trim(o), l = 0; l < h.length; l++) c = h[l], a || c.selectValue !== o || (u = c.selected = !0), a && -1 < $.inArray(c.selectValue, f) && (u = c.selected = !0);
                    if (!u)
                        for (l = 0; l < h.length; l++) c = h[l], a || c.selectText !== o || (c.selected = !0), a && -1 < $.inArray(c.selectText, f) && (c.selected = !0)
                }
                for (l = 0; l < h.length; l++) c = h[l], (d = document.createElement("option")).value = c.value, d.innerHTML = c.innerHtml, c.selected && (d.selected = !0), e.appendChild(d);
                return g
            }
        },
        getMethod: function(e) {
            return this.getAccessor($.fn.jqGrid, e)
        },
        extend: function(e) {
            $.extend($.fn.jqGrid, e), this.no_legacy_api || $.fn.extend(e)
        }
    });
    var clearArray = jgrid.clearArray,
        jqID = jgrid.jqID,
        getGridComponentIdSelector = jgrid.getGridComponentIdSelector,
        getGridComponentId = jgrid.getGridComponentId,
        getGridComponent = jgrid.getGridComponent,
        stripPref = jgrid.stripPref,
        randId = jgrid.randId,
        getAccessor = jgrid.getAccessor,
        convertOnSaveLocally = jgrid.convertOnSaveLocally,
        stripHtml = jgrid.stripHtml,
        htmlEncode = jgrid.htmlEncode,
        htmlDecode = jgrid.htmlDecode,
        mergeCssClasses = jgrid.mergeCssClasses,
        hasOneFromClasses = jgrid.hasOneFromClasses,
        feedback = function() {
            var e = $.makeArray(arguments);
            return e.unshift(""), e.unshift(""), e.unshift(this.p), jgrid.feedback.apply(this, e)
        };
    $.fn.jqGrid = function(Xe) {
        var e, Qe = $.fn.jqGrid;
        if ("string" == typeof Xe) {
            if (!(e = Qe[Xe])) throw "jqGrid - No such method: " + Xe;
            return e.apply(this, $.makeArray(arguments).slice(1))
        }
        return this.each(function() {
            if (!this.grid) {
                var e, t, D = this,
                    h = $(D),
                    Z = $.isFunction,
                    K = $.isArray,
                    S = $.extend,
                    b = $.inArray,
                    r = $.trim,
                    q = $.each,
                    g = Qe.setSelection,
                    i = Qe.getGridRes,
                    F = Z(defaults.fatalError) ? defaults.fatalError : alert,
                    a = Xe.locale || defaults.locale || "en-US",
                    o = null != locales[a] && "boolean" == typeof locales[a].isRTL && locales[a].isRTL ? "rtl" : "ltr",
                    l = Xe.iconSet || defaults.iconSet || ("bootstrap" === (Xe.guiStyle || defaults.guiStyle) || "bootstrapPrimary" === (Xe.guiStyle || defaults.guiStyle) ? "glyph" : "jQueryUI"),
                    n = Xe.guiStyle || defaults.guiStyle || "jQueryUI",
                    R = function(e) {
                        return Qe.getIconRes.call(D, e)
                    },
                    _ = function(e, t) {
                        return h.jqGrid("getGuiStyles", e, t)
                    };
                null == Xe && (Xe = {
                    datatype: "local"
                }), void 0 !== Xe.datastr && K(Xe.datastr) && (t = Xe.datastr, Xe.datastr = []), void 0 !== Xe.data && (e = Xe.data, Xe.data = []), null != jgrid.formatter && null != jgrid.formatter.unused || F("CRITICAL ERROR!!!\n\n\nOne uses probably\n\n\t$.extend($.jgrid.defaults, {...});\n\nto set default settings of jqGrid instead of the usage the DEEP version of jQuery.extend (with true as the first parameter):\n\n\t$.extend(true, $.jgrid.defaults, {...});\n\nOne other possible reason:\n\nyou included some OLD version of language file (grid.locale-en.js for example) AFTER jquery.jqGrid.min.js. For example all language files of jqGrid 4.7.0 uses non-deep call of jQuery.extend.\n\n\nSome options of jqGrid could still work, but another one will be broken."), void 0 === Xe.datatype && void 0 !== Xe.dataType && (Xe.datatype = Xe.dataType, delete Xe.dataType), void 0 === Xe.mtype && void 0 !== Xe.type && (Xe.mtype = Xe.type, delete Xe.type), D.p = {
                    iconSet: l
                };
                var ee = S(!0, {
                        height: "auto",
                        page: 1,
                        rowNum: 20,
                        maxRowNum: 1e4,
                        pagingDuringEditing: "prevent",
                        sortingDuringEditing: "prevent",
                        reloadingDuringEditing: "prevent",
                        autoresizeOnLoad: !1,
                        columnsToReResizing: [],
                        autoResizing: {
                            wrapperClassName: "ui-grid-cell-wrapper",
                            minColWidth: 33,
                            maxColWidth: 300,
                            adjustGridWidth: !0,
                            compact: !1,
                            fixWidthOnShrink: !1
                        },
                        doubleClickSensitivity: 250,
                        minResizingWidth: 10,
                        rowTotal: null,
                        records: 0,
                        pager: "",
                        pgbuttons: !0,
                        pginput: !0,
                        colModel: [],
                        additionalProperties: [],
                        arrayReader: [],
                        rowList: [],
                        colNames: [],
                        sortorder: "asc",
                        threeStateSort: !1,
                        sortname: "",
                        mtype: "GET",
                        altRows: !1,
                        selarrrow: [],
                        savedRow: [],
                        editingInfo: {},
                        shrinkToFit: !0,
                        xmlReader: {},
                        subGrid: !1,
                        subGridModel: [],
                        reccount: 0,
                        lastpage: 0,
                        lastsort: 0,
                        selrow: null,
                        singleSelectClickMode: "toggle",
                        selectOnContextMenu: !0,
                        beforeSelectRow: null,
                        onSelectRow: null,
                        onSortCol: null,
                        ondblClickRow: null,
                        onRightClickRow: null,
                        onPaging: null,
                        onSelectAll: null,
                        onInitGrid: null,
                        loadComplete: null,
                        gridComplete: null,
                        loadError: function(e, t, r) {
                            if ("abort" !== t && "abort" !== r) {
                                var i = e.getResponseHeader("Content-Type"),
                                    a = e.responseText || "",
                                    o = function(e) {
                                        try {
                                            var t, r = $.parseJSON(e),
                                                i = [];
                                            for (t in r) r.hasOwnProperty(t) && "StackTrace" !== t && i.push(t + ": " + r[t]);
                                            e = i.join("
")
                                        } catch (e) {}
                                        return e
                                    };
                                "text/html" === i ? a = function(e) {
                                    var t, r, i, a = document.createElement("div");
                                    for (i = /]*>([\s\S]*)<\/body\s*>/gim.exec(e), a.innerHTML = null != i && 2 === i.length ? i[1] : e, r = (t = a.getElementsByTagName("script")).length; r--;) t[r].parentNode.removeChild(t[r]);
                                    e = a.innerHTML;
                                    try {
                                        "" === $.trim($(e).text()) && (e = "")
                                    } catch (e) {}
                                    return e
                                }(a) : "application/json" === i ? a = o(a) : "text/plain" === i && (a = o(a)), 500 !== e.status && 0 !== e.status && (a = (t || r) + (r && r !== t ? ": " + r : "") + " " + e.status + " " + e.statusText + ("" !== a ? "
" : "") + a), h.jqGrid("displayErrorMessage", a || t || r)
                            }
                        },
                        loadBeforeSend: null,
                        afterInsertRow: null,
                        beforeRequest: null,
                        beforeProcessing: null,
                        onHeaderClick: null,
                        viewrecords: !1,
                        loadonce: !1,
                        forceClientSorting: !1,
                        multiselect: !1,
                        multikey: !1,
                        editurl: "clientArray",
                        search: !1,
                        caption: "",
                        hidegrid: !0,
                        hiddengrid: !1,
                        useUnformattedDataForCellAttr: !0,
                        postData: {},
                        userData: {},
                        treeGrid: !1,
                        treeGridModel: "nested",
                        treeReader: {},
                        treeANode: -1,
                        ExpandColumn: null,
                        tree_root_level: 0,
                        prmNames: {
                            page: "page",
                            rows: "rows",
                            sort: "sidx",
                            order: "sord",
                            search: "_search",
                            filters: "filters",
                            nd: "nd",
                            id: "id",
                            idold: "idOld",
                            oper: "oper",
                            editoper: "edit",
                            addoper: "add",
                            deloper: "del",
                            subgridid: "id",
                            npage: null,
                            totalrows: "totalrows"
                        },
                        forceFit: !1,
                        gridstate: "visible",
                        cellEdit: !1,
                        iCol: -1,
                        iRow: -1,
                        nv: 0,
                        loadui: "enable",
                        toolbar: [!1, ""],
                        scroll: !1,
                        multiboxonly: !1,
                        deselectAfterSort: !0,
                        resetPageAfterSort: !0,
                        multiPageSelection: !1,
                        selectAllMode: "filtered",
                        scrollrows: !1,
                        autowidth: !1,
                        scrollOffset: 18,
                        cellLayout: 5,
                        subGridWidth: 16,
                        multiselectWidth: 16,
                        multiselectPosition: "left",
                        gridview: !0,
                        rownumWidth: 25,
                        rownumbers: !1,
                        pagerpos: "center",
                        footerrow: !1,
                        userDataOnFooter: !1,
                        hoverrows: !0,
                        altclass: "ui-priority-secondary",
                        viewsortcols: [!1, "vertical", !0],
                        resizeclass: "",
                        autoencode: !0,
                        autoEncodeOnEdit: !1,
                        remapColumns: [],
                        cmNamesInputOrder: [],
                        ajaxGridOptions: {},
                        direction: o,
                        toppager: !1,
                        headertitles: !1,
                        scrollTimeout: 40,
                        maxItemsToJoin: 32768,
                        data: [],
                        lastSelectedData: [],
                        quickEmpty: "quickest",
                        _index: {},
                        indexByColumnData: {},
                        dataIndexById: {},
                        iColByName: {},
                        iPropByName: {},
                        reservedColumnNames: ["rn", "cb", "subgrid"],
                        grouping: !1,
                        groupingView: {
                            groupField: [],
                            groupOrder: [],
                            groupText: [],
                            groupColumnShow: [],
                            groupSummary: [],
                            showSummaryOnHide: !1,
                            useDefaultValuesOnGrouping: !0,
                            summary: [],
                            displayField: [],
                            groupSummaryPos: [],
                            formatDisplayField: [],
                            _locgr: !1,
                            commonIconClass: R("grouping.common"),
                            plusicon: R("grouping.plus"),
                            minusicon: R("grouping.minus")
                        },
                        ignoreCase: !0,
                        cmTemplate: {},
                        idPrefix: "",
                        iconSet: l,
                        guiStyle: n,
                        locale: a,
                        multiSort: !1,
                        showSortOrder: !0,
                        sortOrderPosition: "afterSortIcons",
                        multiSortOrder: "lastClickedFirstSorted",
                        maxSortColumns: 3,
                        treeIcons: {
                            commonIconClass: R("treeGrid.common"),
                            plusLtr: R("treeGrid.plusLtr"),
                            plusRtl: R("treeGrid.plusRtl"),
                            minus: R("treeGrid.minus"),
                            leaf: R("treeGrid.leaf")
                        }
                    }, defaults, {
                        navOptions: S(!0, {
                            commonIconClass: R("nav.common"),
                            editicon: R("nav.edit"),
                            addicon: R("nav.add"),
                            delicon: R("nav.del"),
                            searchicon: R("nav.search"),
                            refreshicon: R("nav.refresh"),
                            viewicon: R("nav.view"),
                            saveicon: R("nav.save"),
                            cancelicon: R("nav.cancel"),
                            buttonicon: R("nav.newbutton")
                        }, jgrid.nav || {}),
                        actionsNavOptions: S(!0, {
                            commonIconClass: R("actions.common"),
                            editicon: R("actions.edit"),
                            delicon: R("actions.del"),
                            saveicon: R("actions.save"),
                            cancelicon: R("actions.cancel")
                        }, jgrid.actionsNav || {}),
                        formEditing: S(!0, {
                            commonIconClass: R("form.common"),
                            prevIcon: R("form.prev"),
                            nextIcon: R("form.next"),
                            saveicon: [!0, "left", R("form.save")],
                            closeicon: [!0, "left", R("form.undo")]
                        }, jgrid.edit || {}),
                        searching: S(!0, {
                            commonIconClass: R("search.common"),
                            findDialogIcon: R("search.search"),
                            resetDialogIcon: R("search.reset"),
                            queryDialogIcon: R("search.query")
                        }, jgrid.search || {}),
                        formViewing: S(!0, {
                            commonIconClass: R("form.common"),
                            prevIcon: R("form.prev"),
                            nextIcon: R("form.next"),
                            closeicon: [!0, "left", R("form.cancel")]
                        }, jgrid.view || {}),
                        formDeleting: S(!0, {
                            commonIconClass: R("form.common"),
                            delicon: [!0, "left", R("form.del")],
                            cancelicon: [!0, "left", R("form.cancel")]
                        }, jgrid.del || {})
                    }, Xe || {}),
                    I = function(e) {
                        return i.call(h, e)
                    },
                    G = function(e) {
                        var t = jgrid.getRes(ee, e);
                        return void 0 !== t ? t : i.call(h, "defaults." + e)
                    };
                if (ee.recordpos = ee.recordpos || ("rtl" === ee.direction ? "left" : "right"), ee.autoResizing.widthOfVisiblePartOfSortIcon = void 0 !== ee.autoResizing.widthOfVisiblePartOfSortIcon ? ee.autoResizing.widthOfVisiblePartOfSortIcon : "fontAwesome" === ee.iconSet ? 13 : 12, ee.datatype = void 0 !== ee.datatype ? ee.datatype : void 0 !== e || null == ee.url ? "local" : null != ee.jsonReader && "object" == typeof ee.jsonReader ? "json" : "xml", ee.jsonReader = ee.jsonReader || {}, ee.url = ee.url || "", ee.cellsubmit = void 0 !== ee.cellsubmit ? ee.cellsubmit : void 0 === ee.cellurl ? "clientArray" : "remote", ee.gridview = void 0 !== ee.gridview ? ee.gridview : null == ee.afterInsertRow, void 0 !== e && (ee.data = e, Xe.data = e), void 0 !== t && (ee.datastr = t, Xe.datastr = t), "TABLE" === D.tagName.toUpperCase())
                    if ("" === D.id && h.attr("id", randId()), void 0 !== document.documentMode && document.documentMode <= 5) F("Grid can not be used in this ('quirks') mode!");
                    else {
                        h.empty().attr("tabindex", "0"), (D.p = ee).id = D.id, ee.idSel = "#" + jqID(D.id), ee.gBoxId = getGridComponentId.call(D, COMPONENT_NAMES.GRID_BOX_DIV), ee.gBox = getGridComponentIdSelector.call(D, COMPONENT_NAMES.GRID_BOX_DIV), ee.gViewId = getGridComponentId.call(D, COMPONENT_NAMES.GRID_VIEW_DIV), ee.gView = getGridComponentIdSelector.call(D, COMPONENT_NAMES.GRID_VIEW_DIV), ee.rsId = getGridComponentId.call(D, COMPONENT_NAMES.COLUMN_RESIZER_DIV), ee.rs = getGridComponentIdSelector.call(D, COMPONENT_NAMES.COLUMN_RESIZER_DIV), ee.cbId = getGridComponentId.call(D, COMPONENT_NAMES.HEADER_SELECT_ALL_ROWS_CHECKBOX), ee.cb = getGridComponentIdSelector.call(D, COMPONENT_NAMES.HEADER_SELECT_ALL_ROWS_CHECKBOX);
                        var O = jgrid.fixScrollOffsetAndhBoxPadding,
                            s = function(e) {
                                var t, r = {},
                                    i = e.length;
                                for (t = 0; t < i; t++) r[e[t].name] = t;
                                return r
                            },
                            d = function() {
                                var e, t, r = {},
                                    i = ee.colModel,
                                    a = i.length;
                                for (e = 0; e < a; e++)((t = i[e]).createColumnIndex || ee.createColumnIndex && !1 !== t.createColumnIndex || "select" === t.stype && (t.searchoptions || {}).generateValue || "select" === t.edittype && (t.editoptions || {}).generateValue) && (r[i[e].name] = {});
                                return r
                            },
                            c = function(e) {
                                var t, r, i = {},
                                    a = e.length;
                                for (t = 0; t < a; t++) i["string" == typeof(r = e[t]) ? r : r.name] = t;
                                return i
                            },
                            te = function() {
                                var e, t, r = {};
                                for (this.p.rowIndexes = r, t = 0; t < this.rows.length; t++) e = this.rows[t], $(e).hasClass("jqgrow") && (r[e.id] = e.rowIndex)
                            },
                            u = function(e) {
                                var t = $(this).data("pageX");
                                t ? (t = (t = String(t).split(";"))[t.length - 1], $(this).data("pageX", t + ";" + e.pageX)) : $(this).data("pageX", e.pageX)
                            },
                            re = function(e, t) {
                                return e = parseInt(e, 10), isNaN(e) ? t || 0 : e
                            },
                            ie = {
                                headers: [],
                                cols: [],
                                footers: [],
                                dragStart: function(e, t, r, i) {
                                    var a = this,
                                        o = $(a.bDiv),
                                        l = o.closest(ee.gBox).offset(),
                                        n = i.offset().left + ("rtl" === ee.direction ? 0 : a.headers[e].width + (jgrid.cell_width ? 0 : re(ee.cellLayout, 0)) - 2);
                                    a.resizing = {
                                        idx: e,
                                        startX: n,
                                        sOL: n,
                                        moved: !1,
                                        delta: n - t.pageX
                                    }, a.curGbox = $(ee.rs), a.curGbox.prependTo("body"), a.curGbox.css({
                                        display: "block",
                                        left: n,
                                        top: r[1] + l.top + 1,
                                        height: r[2]
                                    }), a.curGbox.css("height", r[2] - (a.curGbox.outerHeight() - a.curGbox.height()) + "px"), a.curGbox.data("idx", e), a.curGbox.data("delta", n - t.pageX), u.call(this.curGbox, t), feedback.call(getGridComponent(COMPONENT_NAMES.BODY_TABLE, o)[0], "resizeStart", t, e), document.onselectstart = function() {
                                        return !1
                                    }, $(document).on("mousemove.jqGrid", function(e) {
                                        if (ie.resizing) return ie.dragMove(e), !1
                                    }).on("mouseup.jqGrid" + ee.id, function() {
                                        if (ie.resizing) return ie.dragEnd(), !1
                                    })
                                },
                                dragMove: function(e) {
                                    var t = this,
                                        r = t.resizing;
                                    if (r) {
                                        var i, a, o = e.pageX + r.delta - r.startX,
                                            l = t.headers,
                                            n = l[r.idx],
                                            s = "ltr" === ee.direction ? n.width + o : n.width - o,
                                            d = ((ee.colModel[r.idx] || {}).autoResizing || {}).minColWidth || ee.minResizingWidth;
                                        r.moved = !0, d < s && (null == t.curGbox && (t.curGbox = $(ee.rs)), t.curGbox.css({
                                            left: r.sOL + o
                                        }), !0 === ee.forceFit ? (i = l[r.idx + ee.nv], (a = "ltr" === ee.direction ? i.width - o : i.width + o) > ee.autoResizing.minColWidth && (n.newWidth = s, i.newWidth = a)) : (t.newWidth = "ltr" === ee.direction ? ee.tblwidth + o : ee.tblwidth - o, n.newWidth = s))
                                    }
                                },
                                resizeColumn: function(e, t, r) {
                                    var i, a = this,
                                        o = a.headers,
                                        l = a.footers,
                                        n = o[e],
                                        s = n.newWidth || n.width,
                                        d = getGridComponent(COMPONENT_NAMES.BODY_TABLE, a.bDiv),
                                        c = getGridComponent(COMPONENT_NAMES.HEADER_TABLE, a.hDiv).children("thead").children("tr").first()[0].cells;
                                    s = parseInt(s, 10), ee.colModel[e].width = s, n.width = s, c[e].style.width = s + "px", a.cols[e].style.width = s + "px", a.fbRows && ($(a.fbRows[0].cells[e]).css("width", s), $(getGridComponent(COMPONENT_NAMES.FROZEN_HEADER_TABLE, a.fhDiv)[0].rows[0].cells[e]).css("width", s), ee.footerrow && $(getGridComponent(COMPONENT_NAMES.FROZEN_FOOTER_TABLE, a.fsDiv)[0].rows[0].cells[e]).css("width", s)), 0 < l.length && (l[e].style.width = s + "px"), !0 !== r && O.call(d[0]), !0 === ee.forceFit ? (s = (i = o[e + ee.nv]).newWidth || i.width, i.width = s, c[e + ee.nv].style.width = s + "px", a.cols[e + ee.nv].style.width = s + "px", 0 < l.length && (l[e + ee.nv].style.width = s + "px"), ee.colModel[e + ee.nv].width = s) : (ee.tblwidth = a.newWidth || ee.tblwidth, !0 !== r && (a.hDiv.scrollLeft = a.bDiv.scrollLeft, ee.footerrow && (a.sDiv.scrollLeft = a.bDiv.scrollLeft))), ee.autowidth || void 0 !== ee.widthOrg && "auto" !== ee.widthOrg && "100%" !== ee.widthOrg || !0 === r || Qe.setGridWidth.call(d, a.newWidth + ee.scrollOffset, !1), t || feedback.call(d[0], "resizeStop", s, e)
                                },
                                dragEnd: function() {
                                    var e = this;
                                    e.hDiv.style.cursor = "default", e.resizing && (null !== e.resizing && !0 === e.resizing.moved && ($(e.headers[e.resizing.idx].el).removeData("autoResized"), e.resizeColumn(e.resizing.idx, !1)), $(ee.rs).removeData("pageX"), e.resizing = !1, setTimeout(function() {
                                        $(ee.rs).css("display", "none").prependTo(ee.gBox)
                                    }, ee.doubleClickSensitivity)), e.curGbox = null, document.onselectstart = function() {
                                        return !0
                                    }, $(document).off("mousemove.jqGrid mouseup.jqGrid" + ee.id)
                                },
                                populateVisible: function() {
                                    var e = this,
                                        t = $(e),
                                        r = e.grid,
                                        i = r.bDiv,
                                        a = $(i);
                                    r.timer && clearTimeout(r.timer), r.timer = null;
                                    var o = a.height();
                                    if (o) {
                                        var l, n;
                                        if (e.rows.length) try {
                                            n = (l = e.rows[1]) && $(l).outerHeight() || r.prevRowHeight
                                        } catch (e) {
                                            n = r.prevRowHeight
                                        }
                                        if (n) {
                                            r.prevRowHeight = n;
                                            var s = ee.rowNum;
                                            r.scrollTop = i.scrollTop;
                                            var d, c, u, p = r.scrollTop,
                                                f = Math.round(t.position().top) - p,
                                                h = f + t.height(),
                                                g = n * s;
                                            if (h < o && f <= 0 && (void 0 === ee.lastpage || (parseInt((h + p + g - 1) / g, 10) || 0) <= ee.lastpage) && (c = parseInt((o - h + g - 1) / g, 10) || 1, 0 <= h || c < 2 || !0 === ee.scroll ? (d = (Math.round((h + p) / g) || 0) + 1, f = -1) : f = 1), 0 < f && (d = (parseInt(p / g, 10) || 0) + 1, c = (parseInt((p + o) / g, 10) || 0) + 2 - d, u = !0), c) {
                                                if (ee.lastpage && (d > ee.lastpage || 1 === ee.lastpage || d === ee.page && d === ee.lastpage)) return;
                                                r.hDiv.loading ? r.timer = setTimeout(function() {
                                                    r.populateVisible.call(e)
                                                }, ee.scrollTimeout) : (ee.page = d, u && (r.selectionPreserver.call(e), r.emptyRows.call(e, !1, !1)), r.populate.call(e, c))
                                            }
                                        }
                                    }
                                },
                                scrollGrid: function() {
                                    if (ee.scroll) {
                                        var e = this.scrollTop;
                                        void 0 === ie.scrollTop && (ie.scrollTop = 0), e !== ie.scrollTop && (ie.scrollTop = e, ie.timer && clearTimeout(ie.timer), ie.timer = setTimeout(function() {
                                            ie.populateVisible.call(D)
                                        }, ee.scrollTimeout))
                                    }
                                    return ie.hDiv.scrollLeft = this.scrollLeft, ee.footerrow && (ie.sDiv.scrollLeft = this.scrollLeft), !1
                                },
                                selectionPreserver: function() {
                                    var t = $(this),
                                        r = ee.selrow,
                                        i = ee.selarrrow ? $.makeArray(ee.selarrrow) : null,
                                        a = this.grid.bDiv,
                                        o = a.scrollLeft,
                                        l = function() {
                                            var e;
                                            if (ee.selrow = null, !ee.multiPageSelection) {
                                                if (clearArray(ee.selarrrow), ee.multiselect && i && 0 < i.length)
                                                    for (e = 0; e < i.length; e++) i[e] !== r && g.call(t, i[e], !1, null);
                                                r && g.call(t, r, !1, null)
                                            }
                                            a.scrollLeft = o, t.off(".selectionPreserver", l)
                                        };
                                    t.on("jqGridGridComplete.selectionPreserver", l)
                                }
                            };
                        D.grid = ie, feedback.call(D, "beforeInitGrid"), ee.iColByName = s(ee.colModel), ee.iPropByName = c(ee.additionalProperties), jgrid.msie = 0 < jgrid.msiever();
                        var k, p = $("
"),
                            f = jgrid.msie;
                        ee.direction = r(ee.direction.toLowerCase()), -1 === b(ee.direction, ["ltr", "rtl"]) && (ee.direction = "ltr"), k = ee.direction, $(p).insertBefore(D), h.removeClass("scroll").appendTo(p);
                        var m = $("
");
                        $(m).attr({
                            id: ee.gBoxId,
                            dir: k
                        }).insertBefore(p), $(p).attr("id", ee.gViewId).appendTo(m), $("
").insertBefore(p), $("
" + G("loadtext") + "
").insertBefore(p), h.attr({
                            role: "presentation",
                            "aria-labelledby": "gbox_" + D.id
                        });
                        var v, w = function(e, t, r, i, a, o) {
                                var l, n, s, d, c, u = ee.colModel[e],
                                    p = u.autoResizable ? "" : "",
                                    f = u.autoResizable ? r.substring(p.length, r.length - "".length) : r,
                                    h = ee.useUnformattedDataForCellAttr && null != o ? o[u.name] : u.autoResizable ? f : r,
                                    g = u.classes,
                                    m = u.align ? "text-align:" + u.align + ";" : "",
                                    v = function(e) {
                                        return "string" == typeof e ? e.replace(/'/g, "'") : e
                                    },
                                    b = " aria-describedby='" + ee.id + "_" + u.name + "'";
                                if (!0 === u.hidden && (m += "display:none;"), 0 === t) m += "width: " + ie.headers[e].width + "px;";
                                else if ((Z(u.cellattr) || "string" == typeof u.cellattr && null != jgrid.cellattr && Z(jgrid.cellattr[u.cellattr])) && "string" == typeof(n = (Z(u.cellattr) ? u.cellattr : jgrid.cellattr[u.cellattr]).call(D, a, h, i, u, o, f)))
                                    for (n = n.replace(/\n/g, "
");;) {
                                        if (null === (s = /^\s*(\w+[\w|\-]*)\s*=\s*([\"|\'])(.*?)\2(.*)/.exec(n)) || s.length < 5) return !c && u.title && (c = h), b + " style='" + v(m) + "'" + (g ? " class='" + v(g) + "'" : "") + (c ? " title='" + v(c) + "'" : "");
                                        switch (d = s[3], n = s[4], s[1].toLowerCase()) {
                                            case "class":
                                                g ? g += " " + d : g = d;
                                                break;
                                            case "title":
                                                c = d;
                                                break;
                                            case "style":
                                                m += d;
                                                break;
                                            default:
                                                b += " " + s[1] + "=" + s[2] + d + s[2]
                                        }
                                    }
                                return l = "" !== m ? "style='" + m + "'" : "", l += (void 0 !== g ? " class='" + g + "'" : "") + (u.title && h ? " title='" + stripHtml(r).replace(/'/g, "'") + "'" : ""), l += b
                            },
                            y = function(e) {
                                return null == e || "" === e ? " " : ee.autoencode ? htmlEncode(e) : String(e)
                            },
                            ae = function(e) {
                                var t = ee.treeReader,
                                    r = t.loaded,
                                    i = t.leaf_field,
                                    a = t.expanded_field,
                                    o = function(e) {
                                        return !0 === e || "true" === e || "1" === e
                                    };
                                if ("nested" === ee.treeGridModel && !e[i]) {
                                    var l = parseInt(e[t.left_field], 10),
                                        n = parseInt(e[t.right_field], 10);
                                    e[i] = n === l + 1
                                }
                                void 0 !== e[r] && (e[r] = o(e[r])), e[i] = o(e[i]), e[a] = o(e[a])
                            },
                            oe = function(e, t) {
                                var r, i;
                                for (r in ee.indexByColumnData) ee.indexByColumnData.hasOwnProperty(r) && (i = e[r], e.hasOwnProperty(r) && void 0 !== i && "" !== i && (ee.ignoreCase && (i = String(i).toLowerCase()), void 0 === ee.indexByColumnData[r][i] && (ee.indexByColumnData[r][i] = {}), ee.indexByColumnData[r][i][t] = e[r], void 0 === ee.dataIndexById[t] && (ee.dataIndexById[t] = {}), void 0 === ee.dataIndexById[t][r] && (ee.dataIndexById[t][r] = {}), ee.dataIndexById[t][r][i] = ee.indexByColumnData[r][i]))
                            },
                            x = function() {
                                var e, t, r, i, a, o, l, n, s, d, c, u, p = ee.data,
                                    f = p.length,
                                    h = ee.localReader,
                                    g = ee.additionalProperties,
                                    m = h.cell,
                                    v = ee.arrayReaderInfos;
                                if ("local" === ee.datatype && !0 === h.repeatitems)
                                    for (i = !1 === ee.keyName ? Z(h.id) ? h.id.call(D, p) : h.id : ee.keyName, isNaN(i) ? Z(i) || null != ee.arrayReaderInfos[i] && (a = ee.arrayReaderInfos[i].order) : a = Number(i), e = 0; e < f; e++) {
                                        for (s in t = p[e], r = m && getAccessor(t, m) || t, d = K(r), l = {}, v) v.hasOwnProperty(s) && (u = v[s], o = getAccessor(r, d ? u.order : u.name), 1 === u.type && null != (c = g[u.index]) && Z(c.convert) && (o = c.convert(o, r)), void 0 !== o && (l[s] = o));
                                        void 0 !== l[i] ? n = void 0 !== l[i] ? l[i] : randId() : (void 0 === (n = getAccessor(t, K(t) ? a : i)) && (n = getAccessor(r, K(r) ? a : i)), void 0 === n && (n = randId())), n = String(n), l[h.id] = n, ee.treeGrid && ae(l), S(p[e], l)
                                    } else if (ee.treeGrid)
                                        for (e = 0; e < f; e++) ae(p[e])
                            },
                            j = function() {
                                var e, t, r, i, a = ee.data.length;
                                for (e = !1 === ee.keyName || ee.loadonce && ee.dataTypeOrg ? ee.localReader.id : ee.keyName, ee._index = {}, ee.dataIndexById = {}, ee.indexByColumnData = d(), t = 0; t < a; t++) i = ee.data[t], void 0 === (r = getAccessor(i, e)) && (r = String(randId()), void 0 === i[e] && (i[e] = r)), ee._index[r] = t, oe.call(this, i, r)
                            },
                            le = function(e, t) {
                                var r, i, a, o = ee.colModel,
                                    l = o.length,
                                    n = function(e) {
                                        return null == e || "" === e ? " " : htmlEncode(e)
                                    },
                                    s = function(e) {
                                        return null == e || "" === e ? " " : String(e)
                                    };
                                for (r = 0; r < l; r++)(i = o[r]).cellBuilder = null, e || (a = {
                                    colModel: i,
                                    gid: ee.id,
                                    pos: r
                                }, void 0 === i.formatter ? i.cellBuilder = ee.autoencode ? n : s : "string" == typeof i.formatter && null != $.fn.fmatter && Z($.fn.fmatter.getCellBuilder) ? i.cellBuilder = $.fn.fmatter.getCellBuilder.call(D, i.formatter, a, t || "add") : Z(i.getCellBuilder) && (i.cellBuilder = i.getCellBuilder.call(D, a, t || "add")))
                            },
                            N = function(e, t, r, i) {
                                var a = this,
                                    o = $(a),
                                    l = new Date,
                                    n = ee.datatype,
                                    s = "local" !== n && ee.loadonce || "xmlstring" === n || "jsonstring" === n,
                                    d = ("xmlstring" === n || "xml" === n) && $.isXMLDoc(e),
                                    c = "_id_",
                                    u = ee.localReader,
                                    p = getAccessor;
                                if (e && ("xml" !== n || d)) {
                                    switch (-1 !== ee.treeANode || ee.scroll ? t = 1 < t ? t : 1 : (ie.emptyRows.call(a, !1, !0), t = 1), s && (clearArray(ee.data), clearArray(ee.lastSelectedData), ee._index = {}, ee.grouping && null != ee.groupingView && (ee.groupingView.groups = [], ee.groupingView._locgr = !1), ee.localReader.id = c), ee.reccount = 0, n) {
                                        case "xml":
                                        case "xmlstring":
                                            u = ee.xmlReader, p = jgrid.getXmlData;
                                            break;
                                        case "json":
                                        case "jsonp":
                                        case "jsonstring":
                                            u = ee.jsonReader
                                    }
                                    var f, h, g, m, v, b, w, y, x, j, C, D, S, q = {},
                                        F = ee.colModel,
                                        R = F.length,
                                        _ = ee.arrayReaderInfos,
                                        I = {},
                                        G = function(r) {
                                            return function(e) {
                                                var t = null != e && Z(e.getAttribute) ? e.getAttribute(r) : null;
                                                return null !== t ? t : void 0
                                            }
                                        },
                                        O = function(r) {
                                            return function() {
                                                var e, t = I[r];
                                                if (null != t) return 0 < (e = t.childNodes).length ? e[0].nodeValue : void 0
                                            }
                                        };
                                    ee.page = re(p(e, u.page), ee.page), ee.lastpage = re(p(e, u.total), 1), ee.records = re(p(e, u.records)), Z(u.userdata) ? ee.userData = u.userdata.call(a, e) || {} : d ? p(e, u.userdata, !0).each(function() {
                                        ee.userData[this.getAttribute("name")] = $(this).text()
                                    }) : ee.userData = p(e, u.userdata) || {}, le();
                                    var k, N, E, A, T = {},
                                        M = ee.additionalProperties,
                                        B = function(e, t) {
                                            d && "string" == typeof t && (/^\w+$/.test(t) ? T[e] = O(t) : /^\[\w+\]$/.test(t) && (T[e] = G(t.substring(1, t.length - 1))))
                                        },
                                        P = function(e) {
                                            var t = e.name,
                                                r = d ? e.xmlmap || t : ("local" === n && !ee.dataTypeOrg || "jsonstring" === n || "json" === n || "jsonp" === n) && e.jsonmap || t;
                                            !1 !== ee.keyName && !0 === e.key && (ee.keyName = t), ("string" == typeof r || Z(r)) && (T[t] = r), Z(r) || B(t, r)
                                        };
                                    for (f = 0; f < R; f++) P(F[f]);
                                    for (R = M.length, f = 0; f < R; f++) "object" == typeof(E = M[f]) && null != E ? P(E) : B(E, E);
                                    if (v = !1 === ee.keyName ? Z(u.id) ? u.id.call(a, e) : u.id : ee.keyName, isNaN(v) ? Z(v) || (_[v] && (b = _[v].order), d && !1 === ee.keyName && ("string" == typeof v && /^\[\w+\]$/.test(v) ? v = G(v.substring(1, v.length - 1)) : "string" == typeof v && /^\w+$/.test(v) && (v = O(v)))) : b = Number(v), m = p(e, u.root, !0), u.row)
                                        if (1 === m.length && "string" == typeof u.row && /^\w+$/.test(u.row)) {
                                            for (A = [], C = (j = m[0].childNodes).length, x = 0; x < C; x++) 1 === (D = j[x]).nodeType && D.nodeName === u.row && A.push(D);
                                            m = A
                                        } else m = p(m, u.row, !0);
                                    null == m && K(e) && (m = e), m || (m = []), 0 < (g = m.length) && ee.page <= 0 && (ee.page = 1);
                                    var z = parseInt(ee.rowNum, 10);
                                    i && (z *= i + 1);
                                    var L, V, H = [],
                                        W = [];
                                    for (A = [], f = 0; f < g; f++) {
                                        if (V = m[f], h = u.repeatitems && u.cell && p(V, u.cell, !0) || V, k = u.repeatitems && (d || K(h)), q = {}, I = {}, d && !k && null != h)
                                            for (C = (j = h.childNodes).length, x = 0; x < C; x++) 1 === (D = j[x]).nodeType && (I[D.nodeName] = D);
                                        for (y in _) _.hasOwnProperty(y) && (S = _[y], k ? (N = h[S.order], d && null != N && (N = N.textContent || N.text)) : N = null != T[y] && "string" != typeof T[y] ? T[y].call(a, h, {
                                            cmName: y,
                                            iItem: f
                                        }) : p(h, "string" == typeof T[y] ? T[y] : S.name), 1 === S.type && null != (E = M[S.index]) && Z(E.convert) && (N = E.convert(N, h)), void 0 !== N && (q[y] = N));
                                        if (void 0 !== q[v] ? L = void 0 !== q[v] ? q[v] : randId() : (void 0 === (L = p(V, K(V) ? b : v)) && (L = p(h, K(h) ? b : v)), void 0 === L && (L = randId())), void 0 === q[v] && (q[v] = L), L = String(L), w = ee.idPrefix + L, ee.treeGrid && ae(q), f < z) W.push(w), H.push(h), A.push(q);
                                        else if (!s) break;
                                        (s || !0 === ee.treeGrid) && (q[c] = L, ee.data.push(q), oe(q, L), ee._index[q[c]] = ee.data.length - 1)
                                    }
                                    if (s && !0 !== ee.treeGrid) {
                                        if (ee.forceClientSorting) return;
                                        ee.lastSelectedData = ee.data.slice()
                                    }
                                    var U = jgrid.parseDataToHtml.call(a, g, W, A, H, t, i, s);
                                    le(!0);
                                    var Y = -1 < ee.treeANode ? ee.treeANode : 0,
                                        X = $(a.tBodies[0]);
                                    if (!0 === ee.treeGrid && 0 < Y ? $(a.rows[Y]).after(U.join("")) : ee.scroll ? X.append(U.join("")) : (null == a.firstElementChild || void 0 !== document.documentMode && document.documentMode <= 9 ? X.html(X.html() + U.join("")) : a.firstElementChild.innerHTML += U.join(""), a.grid.cols = a.rows[0].cells), ee.grouping) {
                                        te.call(a);
                                        var Q, J = function(e) {
                                            var t = $(this).closest("tr.jqgroup").attr("id");
                                            return o.jqGrid("groupingToggle", t, this, e), !1
                                        };
                                        for (f = 0; f < a.rows.length; f++)(Q = $(a.rows[f])).hasClass("jqgroup") && Q.children("td").children("span.tree-wrap").click(J)
                                    }
                                    if (!0 === ee.subGrid) try {
                                        Qe.addSubGrid.call(o, ee.iColByName.subgrid)
                                    } catch (e) {}
                                    if (!1 === ee.gridview || Z(ee.afterInsertRow))
                                        for (f = 0; f < Math.min(g, z); f++) feedback.call(a, "afterInsertRow", W[f], A[f], H[f]);
                                    if (ee.totaltime = new Date - l, 0 < f && 0 === ee.records && (ee.records = g), clearArray(U), !0 === ee.treeGrid) try {
                                        Qe.setTreeNode.call(o, Y + 1, f + Y + 1)
                                    } catch (e) {}
                                    ee.reccount = Math.min(g, z), ee.treeANode = -1, ee.userDataOnFooter && Qe.footerData.call(o, "set", ee.userData, !0), s && (ee.records = g, ee.lastpage = Math.ceil(g / z)), r || a.updatepager(!1, !0),
                                        function() {
                                            var e, t, r = $.fn.fmatter;
                                            for (e = 0; e < ee.colModel.length; e++) "string" == typeof(t = ee.colModel[e].formatter) && null != r && Z(r[t]) && Z(r[t].pageFinalization) && r[t].pageFinalization.call(this, e)
                                        }.call(a)
                                }
                            },
                            E = function(e) {
                                var t, r = e.outerWidth();
                                return r <= 0 && (t = $(this).closest(".ui-grid>.ui-grid-view").css("font-size") || "11px", $(document.body).append("
"), $(e).clone().appendTo("#testpg"), r = $("#testpg>.ui-pg-table").width(), $("#testpg").remove()), 0 < r && e.parent().width(r), r
                            },
                            A = function() {
                                this.grid.hDiv.loading = !0, ee.hiddengrid || Qe.progressBar.call($(this), {
                                    method: "show",
                                    loadtype: ee.loadui,
                                    htmlcontent: G("loadtext")
                                })
                            },
                            T = function() {
                                this.grid.hDiv.loading = !1, Qe.progressBar.call($(this), {
                                    method: "hide",
                                    loadtype: ee.loadui
                                })
                            },
                            M = function(i) {
                                var a = this,
                                    t = $(a),
                                    r = a.grid;
                                if (!r.hDiv.loading) {
                                    var e, o, l = ee.scroll && !1 === i,
                                        n = {},
                                        s = ee.prmNames;
                                    ee.page <= 0 && (ee.page = Math.min(1, ee.lastpage)), null !== s.search && (n[s.search] = ee.search), null !== s.nd && (n[s.nd] = (new Date).getTime()), (isNaN(parseInt(ee.rowNum, 10)) || parseInt(ee.rowNum, 10) <= 0) && (ee.rowNum = ee.maxRowNum), null !== s.rows && (n[s.rows] = ee.rowNum), null !== s.page && (n[s.page] = ee.page), null !== s.sort && (n[s.sort] = ee.sortname), null !== s.order && (n[s.order] = ee.sortorder), null !== ee.rowTotal && null !== s.totalrows && (n[s.totalrows] = ee.rowTotal);
                                    var d = Z(ee.loadComplete),
                                        c = d ? ee.loadComplete : null,
                                        u = 0;
                                    if (1 < (i = i || 1) ? null !== s.npage ? (n[s.npage] = i, u = i - 1, i = 1) : c = function(e) {
                                            ee.page++, r.hDiv.loading = !1, d && ee.loadComplete.call(a, e), M.call(a, i - 1)
                                        } : null !== s.npage && delete ee.postData[s.npage], ee.grouping && Qe.groupingSetup) {
                                        Qe.groupingSetup.call(t);
                                        var p, f, h, g, m = ee.groupingView,
                                            v = "";
                                        for (p = 0; p < m.groupField.length; p++) {
                                            for (f = m.groupField[p], h = 0; h < ee.colModel.length; h++)(g = ee.colModel[h]).name === f && g.index && (f = g.index);
                                            v += f + " " + m.groupOrder[p] + ", "
                                        }
                                        n[s.sort] = v + n[s.sort]
                                    }
                                    S(ee.postData, n);
                                    var b = ee.scroll ? a.rows.length - 1 : 1,
                                        w = function() {
                                            O.call(a), ee.autowidth || void 0 !== ee.widthOrg && "auto" !== ee.widthOrg && "100%" !== ee.widthOrg || Qe.setGridWidth.call(t, ee.tblwidth + ee.scrollOffset, !1)
                                        },
                                        y = function() {
                                            var e;
                                            if (ee.autoresizeOnLoad) Qe.autoResizeAllColumns.call(t), clearArray(ee.columnsToReResizing), ee.autowidth && Qe.setGridWidth.call(t, t.closest(".ui-grid").parent().width(), !0);
                                            else {
                                                for (e = 0; e < ee.columnsToReResizing.length; e++) Qe.autoResizeColumn.call(t, ee.columnsToReResizing[e]);
                                                clearArray(ee.columnsToReResizing)
                                            }
                                        },
                                        x = function() {
                                            feedback.call(a, "loadComplete", o), y(), t.triggerHandler("jqGridAfterLoadComplete", [o]), T.call(a), ee.datatype = "local", ee.datastr = null, w()
                                        },
                                        j = function(e) {
                                            t.triggerHandler("jqGridLoadComplete", [e]), c && c.call(a, e), y(), t.triggerHandler("jqGridAfterLoadComplete", [e]), l && r.populateVisible.call(a), 1 === i && T.call(a), w()
                                        },
                                        C = function() {
                                            var e = function() {
                                                var e = $(this),
                                                    n = ee.multiSort ? [] : "",
                                                    t = {},
                                                    s = !1,
                                                    c = {},
                                                    d = [],
                                                    u = [],
                                                    p = I("formatter.date.srcformat"),
                                                    f = I("formatter.date.newformat");
                                                if (!K(ee.data)) return {};
                                                ee.multiSort && z(n, t);
                                                var h, g, m = !!ee.grouping && ee.groupingView,
                                                    r = function(e, t, r) {
                                                        var i, a, o = e.index || e.name,
                                                            l = e.sorttype || "text";
                                                        if (c[e.name] = {
                                                                reader: ee.dataTypeOrg ? e.name : e.jsonmap || e.name,
                                                                iCol: t,
                                                                stype: l,
                                                                srcfmt: "",
                                                                newfmt: "",
                                                                sfunc: e.sortfunc || null,
                                                                isAddProp: !0 === r
                                                            }, "date" !== l && "datetime" !== l || (e.formatter && "string" == typeof e.formatter && "date" === e.formatter ? (i = e.formatoptions && e.formatoptions.srcformat ? e.formatoptions.srcformat : p, a = e.formatoptions && e.formatoptions.newformat ? e.formatoptions.newformat : f) : i = a = e.datefmt || "Y-m-d", c[e.name].srcfmt = i, c[e.name].newfmt = a), ee.grouping)
                                                            for (g = 0, h = m.groupField.length; g < h; g++) e.name === m.groupField[g] && (d[g] = c[o], u[g] = o);
                                                        ee.multiSort || s || e.index !== ee.sortname && e.name !== ee.sortname || (n = e.name, s = !0)
                                                    };
                                                if (q(ee.colModel, function(e) {
                                                        r(this, e)
                                                    }), q(ee.additionalProperties, function(e) {
                                                        r("string" == typeof this ? {
                                                            name: this
                                                        } : this, e, !0)
                                                    }), ee.treeGrid) return Qe.SortTree.call(e, n, ee.sortorder, null != c[n] && c[n].stype ? c[n].stype : "text", null != c[n] && c[n].srcfmt ? c[n].srcfmt : ""), !1;
                                                var v = {
                                                        eq: function(e) {
                                                            return e.equals
                                                        },
                                                        ne: function(e) {
                                                            return e.notEquals
                                                        },
                                                        lt: function(e) {
                                                            return e.less
                                                        },
                                                        le: function(e) {
                                                            return e.lessOrEquals
                                                        },
                                                        gt: function(e) {
                                                            return e.greater
                                                        },
                                                        ge: function(e) {
                                                            return e.greaterOrEquals
                                                        },
                                                        cn: function(e) {
                                                            return e.contains
                                                        },
                                                        nc: function(e, t) {
                                                            return "OR" === t ? e.orNot().contains : e.andNot().contains
                                                        },
                                                        bw: function(e) {
                                                            return e.startsWith
                                                        },
                                                        bn: function(e, t) {
                                                            return "OR" === t ? e.orNot().startsWith : e.andNot().startsWith
                                                        },
                                                        en: function(e, t) {
                                                            return "OR" === t ? e.orNot().endsWith : e.andNot().endsWith
                                                        },
                                                        ew: function(e) {
                                                            return e.endsWith
                                                        },
                                                        ni: function(e, t) {
                                                            return "OR" === t ? e.orNot().inSet : e.andNot().inSet
                                                        },
                                                        in: function(e) {
                                                            return e.inSet
                                                        },
                                                        nu: function(e) {
                                                            return e.isNull
                                                        },
                                                        nn: function(e, t) {
                                                            return "OR" === t ? e.orNot().isNull : e.andNot().isNull
                                                        }
                                                    },
                                                    b = jgrid.from.call(this, ee.data);
                                                if (ee.ignoreCase && (b = b.ignoreCase()), !0 === ee.search) {
                                                    var i = ee.postData[(ee.searching || {}).sFilter || ee.prmNames.filters];
                                                    if (i) "string" == typeof i && (i = $.parseJSON(i)),
                                                        function e(t) {
                                                            var r, i, a, o, l, n, s, d = 0;
                                                            if (null != t.groups) {
                                                                for ((i = t.groups.length && "OR" === t.groupOp.toString().toUpperCase()) && b.orBegin(), r = 0; r < t.groups.length; r++) {
                                                                    0 < d && i && b.or();
                                                                    try {
                                                                        e(t.groups[r])
                                                                    } catch (e) {
                                                                        F(e)
                                                                    }
                                                                    d++
                                                                }
                                                                i && b.orEnd()
                                                            }
                                                            if (null != t.rules) try {
                                                                for ((a = t.rules.length && "OR" === t.groupOp.toString().toUpperCase()) && b.orBegin(), r = 0; r < t.rules.length; r++) l = t.rules[r], o = t.groupOp.toString().toUpperCase(), v[l.op] && l.field ? (0 < d && o && "OR" === o && (b = b.or()), null != (s = c[l.field]) && (n = s.reader, b = v[l.op](b, o)(Z(n) ? 'jQuery.jgrid.getAccessor(this,jQuery("' + ee.idSel + '")[0].p.colModel[' + s.iCol + "].jsonmap)" : "jQuery.jgrid.getAccessor(this,'" + n + "')", l.data, c[l.field]))) : null != ee.customSortOperations && null != ee.customSortOperations[l.op] && Z(ee.customSortOperations[l.op].filter) && (b = b.custom(l.op, l.field, l.data)), d++;
                                                                a && b.orEnd()
                                                            } catch (e) {
                                                                F(e)
                                                            }
                                                        }(i);
                                                    else try {
                                                        var a = c[ee.postData.searchField];
                                                        b = v[ee.postData.searchOper](b)(Z(a.reader) ? 'jQuery.jgrid.getAccessor(this,jQuery("' + ee.idSel + '")[0].p.colModel[' + a.iCol + "].jsonmap)" : "jQuery.jgrid.getAccessor(this,'" + a.reader + "')", ee.postData.searchString, c[ee.postData.searchField])
                                                    } catch (e) {}
                                                }
                                                if (ee.grouping)
                                                    for (g = 0; g < h && g < u.length && g < d.length; g++) b.orderBy(u[g], m.groupOrder[g], d[g].stype, d[g].srcfmt);
                                                ee.multiSort ? q(n, function() {
                                                    b.orderBy(this, t[this], c[this].stype, c[this].srcfmt, c[this].sfunc)
                                                }) : n && ee.sortorder && s && b.orderBy(ee.sortname, "DESC" === ee.sortorder.toUpperCase() ? "d" : "a", c[n].stype, c[n].srcfmt, c[n].sfunc), ee.lastSelectedData = b.select();
                                                var o = parseInt(ee.rowNum, 10),
                                                    l = ee.lastSelectedData.length,
                                                    w = parseInt(ee.page, 10),
                                                    y = Math.ceil(l / o),
                                                    x = {};
                                                if (ee.grouping && ee.groupingView._locgr) {
                                                    var j, C, D;
                                                    if (ee.groupingView.groups = [], ee.footerrow && ee.userDataOnFooter) {
                                                        for (C in ee.userData) ee.userData.hasOwnProperty(C) && (ee.userData[C] = 0);
                                                        D = !0
                                                    }
                                                    for (j = 0; j < l; j++) {
                                                        if (D)
                                                            for (C in ee.userData) ee.userData.hasOwnProperty(C) && (ee.userData[C] += parseFloat(ee.lastSelectedData[j][C] || 0));
                                                        Qe.groupingPrepare.call(e, ee.lastSelectedData[j], j, o)
                                                    }
                                                }
                                                c = b = null;
                                                var S = ee.localReader;
                                                return x[S.total] = y, x[S.page] = w, x[S.records] = l, x[S.root] = ee.lastSelectedData.slice((w - 1) * o, w * o), x[S.userdata] = ee.userData, x
                                            }.call(a);
                                            N.call(a, e, b, 1 < i, u), j(e)
                                        };
                                    if (!feedback.call(a, "beforeRequest")) return;
                                    if (Z(ee.datatype)) return void ee.datatype.call(a, ee.postData, "load_" + ee.id, b, i, u);
                                    switch (e = ee.datatype.toLowerCase(), $(ie.eDiv).hide(), e) {
                                        case "json":
                                        case "jsonp":
                                        case "xml":
                                        case "script":
                                            $.ajax(S({
                                                url: ee.url,
                                                type: ee.mtype,
                                                dataType: e,
                                                data: jgrid.serializeFeedback.call(D, ee.serializeGridData, "jqGridSerializeGridData", ee.postData),
                                                success: function(e, t, r) {
                                                    ee.jqXhr = null, $(ie.eDiv).hide(), Z(ee.beforeProcessing) && !1 === ee.beforeProcessing.call(a, e, t, r) ? T.call(a) : (N.call(a, e, b, 1 < i, u), j(e), (ee.loadonce || ee.treeGrid) && (ee.dataTypeOrg = ee.datatype, ee.datatype = "local", ee.forceClientSorting && C()))
                                                },
                                                error: function(e, t, r) {
                                                    ee.jqXhr = null, Z(ee.loadError) && ee.loadError.call(a, e, t, r), 1 === i && T.call(a)
                                                },
                                                beforeSend: function(e, t) {
                                                    var r = !0;
                                                    if (Z(ee.loadBeforeSend) && (r = ee.loadBeforeSend.call(a, e, t)), void 0 === r && (r = !0), !1 === r) return !1;
                                                    ee.jqXhr = e, A.call(a)
                                                }
                                            }, jgrid.ajaxOptions, ee.ajaxGridOptions));
                                            break;
                                        case "xmlstring":
                                            A.call(a), o = "string" == typeof ee.datastr ? $.parseXML(ee.datastr) : ee.datastr, N.call(a, o), x(), ee.forceClientSorting && C();
                                            break;
                                        case "jsonstring":
                                            A.call(a), o = ee.datastr && "string" == typeof ee.datastr ? $.parseJSON(ee.datastr) : ee.datastr, N.call(a, o), x(), ee.forceClientSorting && C();
                                            break;
                                        case "local":
                                        case "clientside":
                                            A.call(a), ee.datatype = "local", C()
                                    }
                                }
                            },
                            B = function(e) {
                                var t = this.grid;
                                $(ee.cb, t.hDiv).prop("checked", e), ee.frozenColumns && $(ee.cb, t.fhDiv).prop("checked", e)
                            },
                            P = function(e) {
                                var t, r;
                                for (t = 0; t < ee.savedRow.length; t++) r = ee.savedRow[t], "save" === e ? r.hasOwnProperty("ic") ? h.jqGrid("saveCell", r.id, r.ic) : h.jqGrid("saveRow", r.id) : r.hasOwnProperty("ic") ? h.jqGrid("restoreCell", r.id, r.ic) : h.jqGrid("restoreRow", r.id)
                            },
                            C = function(e, d) {
                                var t, r, i, a, o, l, n, s, c, u = _("states.hover"),
                                    p = _("states.disabled"),
                                    f = "",
                                    h = "",
                                    g = "",
                                    m = "",
                                    v = function(e, t, r) {
                                        return !(0 < ee.savedRow.length && "prevent" === ee.pagingDuringEditing) && (!!feedback.call(D, "onPaging", e, {
                                            newPage: t,
                                            currentPage: re(ee.page, 1),
                                            lastPage: re(ee.lastpage, 1),
                                            currentRowNum: re(ee.rowNum, 10),
                                            newRowNum: r
                                        }) && (ee.selrow = null, ee.multiselect && (ee.multiPageSelection || clearArray(ee.selarrrow), B.call(D, !1)), P(ee.pagingDuringEditing), !0))
                                    };
                                if (d += "_" + e, t = "pg_" + e, r = e + "_left", i = e + "_center", a = e + "_right", $("#" + jqID(e)).append("
").attr("dir", "ltr"), t = "#" + jqID(t), 0 < ee.rowList.length) {
                                    m = "";
                                    var b, w = G("pgrecs");
                                    for (m += ""
                                }
                                if ("rtl" === k && (g += m), !0 === ee.pginput && (h = "" + jgrid.format(G("pgtext") || "", "
0
", "0") + ""), e = "#" + jqID(e), !0 === ee.pgbuttons) {
                                    var y = ["first", "prev", "next", "last"],
                                        x = y.slice(),
                                        j = _("pager.pagerButton", "ui-pg-button");
                                    for ("rtl" === k && y.reverse(), l = 0; l < y.length; l++) g += (n = y[l], s = x[l], void 0, c = G("pg" + n), ""), 1 === l && (g += "" !== h ? f + h + f : "")
                                } else "" !== h && (g += h);
                                "ltr" === k && (g += m), g += "", !0 === ee.viewrecords && $("td" + e + "_" + ee.recordpos, t).append("");
                                var C = $("td" + e + "_" + ee.pagerpos, t);
                                C.append(g), o = E.call(this, C.children(".ui-pg-table")), ee._nvtd = [], ee._nvtd[0] = o ? Math.floor((ee.width - o) / 2) : Math.floor(ee.width / 3), ee._nvtd[1] = 0, g = null, $(".ui-pg-selbox", t).on("change", function() {
                                    var e = re(this.value, 10),
                                        t = Math.round(ee.rowNum * (ee.page - 1) / e - .5) + 1;
                                    return v("records", t, e) && (ee.page = t, ee.rowNum = e, ee.pager && $(".ui-pg-selbox", ee.pager).val(e), ee.toppager && $(".ui-pg-selbox", ee.toppager).val(e), M.call(D)), !1
                                }), !0 === ee.pgbuttons && ($(".ui-pg-button", t).hover(function() {
                                    hasOneFromClasses(this, p) ? this.style.cursor = "default" : ($(this).addClass(u), this.style.cursor = "pointer")
                                }, function() {
                                    hasOneFromClasses(this, p) || ($(this).removeClass(u), this.style.cursor = "default")
                                }), $("#first" + jqID(d) + ", #prev" + jqID(d) + ", #next" + jqID(d) + ", #last" + jqID(d)).click(function() {
                                    if (hasOneFromClasses(this, p)) return !1;
                                    var e = re(ee.page, 1),
                                        t = e,
                                        r = this.id,
                                        i = re(ee.lastpage, 1),
                                        a = !1,
                                        o = !0,
                                        l = !0,
                                        n = !0,
                                        s = !0;
                                    return 0 === i || 1 === i ? (e <= 1 && (l = o = !1), s = n = !1) : 1 < i && 1 <= e ? 1 === e ? l = o = !1 : e === i && (s = n = !1) : 1 < i && 0 === e && (s = n = !1, e = i - 1), this.id === "first" + d && o && (r = "first", t = 1, a = !0), this.id === "prev" + d && l && (r = "prev", t = e - 1, a = !0), this.id === "next" + d && n && (r = "next", t = e + 1, a = !0), this.id === "last" + d && s && (r = "last", t = i, a = !0), v(r, t, re(ee.rowNum, 10)) && (ee.page = t, a && M.call(D)), !1
                                })), !0 === ee.pginput && $("input.ui-pg-input", t).on("keypress.jqGrid", function(e) {
                                    var t = e.charCode || e.keyCode || 0,
                                        r = re($(this).val(), 1);
                                    return 13 === t ? (v("user", r, re(ee.rowNum, 10)) && ($(this).val(r), ee.page = 0 < $(this).val() ? $(this).val() : ee.page, M.call(D)), !1) : this
                                }), C.children(".ui-pg-table").on("keydown.jqGrid", function(e) {
                                    var t;
                                    13 === e.which && 0 < (t = C.find(":focus")).length && t.trigger("click")
                                })
                            },
                            z = function(r, i, e) {
                                if (q((ee.sortname + " " + ee.sortorder).split(","), function() {
                                        var e = $.trim(this).split(" ");
                                        2 === e.length && r.push(e[0])
                                    }), null != e) {
                                    var t = $.inArray(e.index || e.name, r);
                                    "" !== e.lso && t < 0 ? r.push(e.index || e.name) : "" === e.lso && 0 <= t && r.splice(t, 1)
                                }
                                q(ee.colModel, function() {
                                    var e, t = this.index || this.name;
                                    this.lso && (e = this.lso.split("-"), $.inArray(t, r) < 0 && r.push(t), i[t] = e[e.length - 1])
                                })
                            },
                            L = function(e, t, r, i, a, o) {
                                var l = this,
                                    n = l.grid,
                                    s = ee.colModel[t],
                                    d = _("states.disabled");
                                if (null != s && s.sortable && !(0 < ee.savedRow.length && "prevent" === ee.sortingDuringEditing)) {
                                    if (ee.lastsort === t && "" !== ee.sortname ? "asc" === ee.sortorder ? ee.sortorder = "desc" : "desc" === ee.sortorder ? ee.sortorder = "asc" : ee.sortorder = s.firstsortorder || "asc" : ee.sortorder = s.firstsortorder || "asc", s.lso ? "asc" === s.lso ? s.lso += "-desc" : "desc" === s.lso ? s.lso += "-asc" : "asc-desc" !== s.lso && "desc-asc" !== s.lso || !ee.threeStateSort && !ee.multiSort || (s.lso = "") : s.lso = s.firstsortorder || "asc", !r && ee.resetPageAfterSort && (ee.page = 1), ee.multiSort) ! function(e, t) {
                                        var r, i = "",
                                            a = ee.colModel[e],
                                            o = _("states.disabled"),
                                            l = ee.frozenColumns ? $(D.grid.headers[e].el).add($(t)) : $(D.grid.headers[e].el),
                                            n = l.find("span.s-ico"),
                                            s = n.children("span.ui-icon-asc"),
                                            d = n.children("span.ui-icon-desc"),
                                            c = s,
                                            u = d,
                                            p = [],
                                            f = {};
                                        if (l.find("span.ui-grid-ico-sort").addClass(o), l.attr("aria-selected", "false"), a.lso ? (n.show(), "desc" === (r = (r = a.lso.split("-"))[r.length - 1]) && (c = d, u = s), c.removeClass(o).css("display", ""), ee.showOneSortIcon && u.hide(), l.attr("aria-selected", "true")) : ee.viewsortcols[0] || n.hide(), z(p, f, a), "string" == typeof ee.sortname && "" !== ee.sortname && ee.sortname.split(",").length < p.length) {
                                            var h = function(i) {
                                                q(ee.colModel, function() {
                                                    var e, t = "#jqgh_" + jgrid.jqID(ee.id + "_" + this.name),
                                                        r = $(t);
                                                    if (this.lso && (this.index || this.name) === i) {
                                                        if ("function" == typeof p.indexOf) e = p.indexOf(i);
                                                        else {
                                                            for (e = 0; e < p.length && p[e] !== i; e++);
                                                            e === p.length && (e = -1)
                                                        }
                                                        0 <= e && (p.splice(e, 1), this.lso = "")
                                                    }
                                                    ee.frozenColumns && (r = r.add($(ie.fhDiv).find(t))), r.children(".s-ico")[this.lso ? "show" : "hide"]()
                                                })
                                            };
                                            if ("lastClickedFirstSorted" === ee.multiSortOrder && 1 < p.length)
                                                for (p.unshift(p[p.length - 1]), p.pop(); p.length > ee.maxSortColumns;) h(p[p.length - 1]);
                                            else Z(ee.multiSortOrder) && (p = ee.multiSortOrder.call(D, {
                                                sortNames: p,
                                                cm: a,
                                                sortDirs: f,
                                                removeSorting: h
                                            }) || p)
                                        }
                                        q(p, function() {
                                            0 < i.length && (i += ", "), i += this + " " + f[this], ee.sortorder = f[this]
                                        }), ee.sortname = i.substring(0, i.length - ee.sortorder.length - 1), ee.showSortOrder && q(ee.colModel, function() {
                                            if (this.sortable) {
                                                var e = b(this.name, p),
                                                    t = "#jqgh_" + jgrid.jqID(ee.id + "_" + this.name),
                                                    r = $(t);
                                                ee.frozenColumns && (r = r.add($(ie.fhDiv).find(t))), r.children(".ui-grid-sort-order").html(e < 0 ? " " : Z(ee.formatSortOrder) ? ee.formatSortOrder.call(D, {
                                                    cm: this,
                                                    sortIndex: e
                                                }) : e + 1)
                                            }
                                        })
                                    }(t, a);
                                    else {
                                        if (i) {
                                            if (ee.lastsort === t && ee.sortorder === i && !r) return;
                                            ee.sortorder = i
                                        }
                                        var c = n.headers,
                                            u = n.fhDiv,
                                            p = c[ee.lastsort] ? $(c[ee.lastsort].el) : $(),
                                            f = ee.frozenColumns ? $(a) : $(c[t].el),
                                            h = f.find("span.s-ico"),
                                            g = h.children(".ui-icon-" + ee.sortorder),
                                            m = h.children(".ui-icon-" + ("asc" === ee.sortorder ? "desc" : "asc"));
                                        s = ee.colModel[ee.lastsort], p.find(".ui-grid-ico-sort").addClass(d), p.attr("aria-selected", "false"), ee.frozenColumns && (u.find(".ui-grid-ico-sort").addClass(d), u.find("th").attr("aria-selected", "false")), ee.viewsortcols[0] || (ee.lastsort !== t ? (ee.frozenColumns && u.find("span.s-ico").hide(), p.find("span.s-ico").hide(), h.show()) : "" === ee.sortname && h.show()), ee.lastsort !== t && "true" === p.data("autoResized") && (null != s && null != s.autoResizing && s.autoResizing.compact || ee.autoResizing.compact) && ee.columnsToReResizing.push(ee.lastsort), s = ee.colModel[t], h.css("display", ""), "" !== s.lso ? (g.removeClass(d).css("display", ""), ee.showOneSortIcon && m.removeClass(d).hide(), f.attr("aria-selected", "true")) : (f.attr("aria-selected", "false"), ee.threeStateSort && (ee.sortorder = "", ee.viewsortcols[0] || h.hide())), ee.lastsort !== t && "true" === f.data("autoResized") && (null != s && null != s.autoResizing && s.autoResizing.compact || ee.autoResizing.compact) && ee.columnsToReResizing.push(t), ee.sortname = s.index || e
                                    }
                                    if (feedback.call(l, "onSortCol", ee.sortname, t, ee.sortorder, o || {})) {
                                        if ("local" === ee.datatype ? ee.deselectAfterSort && !ee.multiPageSelection && Qe.resetSelection.call($(l)) : ee.multiPageSelection || (ee.selrow = null, ee.multiselect && (B.call(l, !1), clearArray(ee.selarrrow))), P(ee.sortingDuringEditing), ee.scroll) {
                                            var v = n.bDiv.scrollLeft;
                                            ie.emptyRows.call(l, !0, !1), n.hDiv.scrollLeft = v
                                        }
                                        ee.subGrid && "local" === ee.datatype && $("td.sgexpanded", "#" + jqID(ee.id)).each(function() {
                                            $(this).trigger("click")
                                        }), M.call(l), ee.lastsort = t, ee.sortname !== e && t && (ee.lastsort = t)
                                    } else ee.lastsort = t
                                }
                            },
                            V = function(e) {
                                return ee.iColByName[(e.id || "").substring(ee.id.length + 1)]
                            }; - 1 === b(ee.multikey, ["shiftKey", "altKey", "ctrlKey"]) && (ee.multikey = !1), ee.keyName = !1, ee.sortorder = ee.sortorder.toLowerCase(), jgrid.cell_width = jgrid.cellWidth();
                        var H, W, U = jgrid.cmTemplate;
                        for (H = 0; H < ee.colModel.length; H++) v = "string" == typeof(W = ee.colModel[H]).template ? null == U || "object" != typeof U[W.template] && !Z(U[W.template]) ? {} : U[W.template] : W.template, Z(v) && (v = v.call(D, {
                            cm: W,
                            iCol: H
                        })), W = S(!0, {}, ee.cmTemplate, v || {}, W), !1 === ee.keyName && !0 === W.key && (ee.keyName = W.name), ee.colModel[H] = W;
                        for (ee.indexByColumnData = d(), H = 0; H < ee.additionalProperties.length; H++) W = ee.additionalProperties[H], !1 === ee.keyName && !0 === W.key && (ee.keyName = W.name);
                        if (0 === ee.colNames.length)
                            for (H = 0; H < ee.colModel.length; H++) ee.colNames[H] = void 0 !== ee.colModel[H].label ? ee.colModel[H].label : ee.colModel[H].name;
                        if (ee.colNames.length === ee.colModel.length) {
                            if (!0 === ee.grouping && (ee.scroll = !1, ee.rownumbers = !1, ee.treeGrid = !1, ee.gridview = !0), ee.subGrid && Z(Qe.setSubGrid)) try {
                                Qe.setSubGrid.call(h)
                            } catch (e) {}
                            if (ee.multiselect && ("left" === ee.multiselectPosition || "right" === ee.multiselectPosition)) {
                                var Y = "left" === ee.multiselectPosition ? "unshift" : "push";
                                ee.colNames[Y](""), ee.colModel[Y]({
                                    name: "cb",
                                    width: jgrid.cell_width ? ee.multiselectWidth + ee.cellLayout : ee.multiselectWidth,
                                    labelClasses: "jqgh_cbox",
                                    classes: "td_cbox",
                                    sortable: !1,
                                    resizable: !1,
                                    hidedlg: !0,
                                    search: !1,
                                    align: "center",
                                    fixed: !0,
                                    frozen: !0
                                })
                            }
                            if (ee.rownumbers && (ee.colNames.unshift(""), ee.colModel.unshift({
                                    name: "rn",
                                    width: jgrid.cell_width ? ee.rownumWidth + ee.cellLayout : ee.rownumWidth,
                                    labelClasses: "jqgh_rn",
                                    sortable: !1,
                                    resizable: !1,
                                    hidedlg: !0,
                                    search: !1,
                                    align: "center",
                                    fixed: !0,
                                    frozen: !0
                                })), ee.iColByName = s(ee.colModel), ee.xmlReader = S(!0, {
                                    root: "rows",
                                    row: "row",
                                    page: "rows>page",
                                    total: "rows>total",
                                    records: "rows>records",
                                    repeatitems: !0,
                                    cell: "cell",
                                    id: "[id]",
                                    userdata: "userdata",
                                    subgrid: {
                                        root: "rows",
                                        row: "row",
                                        repeatitems: !0,
                                        cell: "cell"
                                    }
                                }, ee.xmlReader), ee.jsonReader = S(!0, {
                                    root: "rows",
                                    page: "page",
                                    total: "total",
                                    records: "records",
                                    repeatitems: !0,
                                    cell: "cell",
                                    id: "id",
                                    userdata: "userdata",
                                    subgrid: {
                                        root: "rows",
                                        repeatitems: !0,
                                        cell: "cell"
                                    }
                                }, ee.jsonReader), ee.localReader = S(!0, {
                                    root: "rows",
                                    page: "page",
                                    total: "total",
                                    records: "records",
                                    repeatitems: !1,
                                    cell: "cell",
                                    id: "id",
                                    userdata: "userdata",
                                    subgrid: {
                                        root: "rows",
                                        repeatitems: !0,
                                        cell: "cell"
                                    }
                                }, ee.localReader), ee.scroll && (ee.pgbuttons = !1, ee.pginput = !1, ee.rowList = []), !0 === ee.treeGrid) {
                                try {
                                    Qe.setTreeGrid.call(h)
                                } catch (e) {}
                                "local" !== ee.datatype && (ee.localReader = {
                                    id: "_id_"
                                }), ee.iPropByName = c(ee.additionalProperties)
                            }
                            if (function() {
                                    var e, t, r, i = ee.remapColumns,
                                        a = ee.colModel,
                                        o = a.length,
                                        l = [];
                                    for (e = 0; e < o; e++) r = a[e].name, b(r, ee.reservedColumnNames) < 0 && l.push(r);
                                    if (null != i)
                                        for (t = l.slice(), e = 0; e < i.length; e++) l[e] = t[i[e]];
                                    ee.cmNamesInputOrder = l
                                }(), function() {
                                    var e, t, r, i, a, o = ee.colModel,
                                        l = ee.cmNamesInputOrder,
                                        n = ee.additionalProperties,
                                        s = l.length;
                                    for (ee.arrayReaderInfos = {}, t = ee.arrayReaderInfos, a = 0; a < s; a++) r = l[a], b(r, ee.reservedColumnNames) < 0 && !t.hasOwnProperty(r) && (void 0 !== (i = ee.iColByName[r]) ? t[r] = {
                                        name: r,
                                        index: i,
                                        order: a,
                                        type: 0
                                    } : void 0 !== (i = ee.iPropByName[r]) ? t[r] = {
                                        name: r,
                                        index: i,
                                        order: a,
                                        type: 1
                                    } : r === (ee.prmNames.rowidName || "rowid") && (t[r] = {
                                        index: i,
                                        type: 2
                                    }));
                                    for (s = o.length, e = 0; e < s; e++) r = o[e].name, b(r, ee.reservedColumnNames) < 0 && !t.hasOwnProperty(r) && (t[r] = {
                                        name: r,
                                        index: e,
                                        order: a,
                                        type: 0
                                    }, a++);
                                    for (s = n.length, e = 0; e < s; e++) null == (r = n[e]) || t.hasOwnProperty(r) || ("object" == typeof r && "string" === $.type(r.name) && (r = r.name), t[r] = {
                                        name: r,
                                        index: e,
                                        order: a,
                                        type: 1
                                    }, a++)
                                }(), ee.data.length && (x.call(D), j.call(D)), !0 === ee.shrinkToFit && !0 === ee.forceFit)
                                for (H = ee.colModel.length - 1; 0 <= H; H--)
                                    if (!0 !== ee.colModel[H].hidden) {
                                        ee.colModel[H].resizable = !1;
                                        break
                                    }
                            var X, Q, J, ne, se, de, ce, ue, pe, fe = [],
                                he = [],
                                ge = [],
                                me = "",
                                ve = "",
                                be = _("states.hover"),
                                we = _("states.hoverTh") || be,
                                $e = _("states.disabled");
                            if (ee.multiSort)
                                for (fe = ee.sortname.split(","), pe = 0; pe < fe.length; pe++) ge = r(fe[pe]).split(" "), fe[pe] = r(ge[0]), he[pe] = ge[1] ? r(ge[1]) : ee.sortorder || "asc";
                            for (H = 0; H < ee.colNames.length; H++) {
                                switch (W = ee.colModel[H], se = ee.headertitles || W.headerTitle ? " title='" + stripHtml("string" == typeof W.headerTitle ? W.headerTitle : ee.colNames[H]) + "'" : "", me += "", X = W.index || W.name, W.labelAlign) {
                                    case "left":
                                        de = "text-align:left;";
                                        break;
                                    case "right":
                                        de = "text-align:right;";
                                        break;
                                    case "likeData":
                                        de = void 0 === W.align || "left" === W.align ? "text-align:left;" : "right" === W.align ? "text-align:right;" : "";
                                        break;
                                    default:
                                        de = ""
                                }
                                me += "
", ue = W.autoResizable && "actions" !== W.formatter || W.rotated ? "" + ee.colNames[H] + "" : ee.colNames[H], ee.sortIconsBeforeText ? (me += (ee.builderSortIcons || jgrid.builderSortIcons).call(D, H), me += ue) : (me += ue, me += (ee.builderSortIcons || jgrid.builderSortIcons).call(D, H)), me += "
", ve += "", W.width = W.width ? parseInt(W.width, 10) : 150, "boolean" != typeof W.title && (W.title = !0), W.lso = "", X === ee.sortname && (ee.lastsort = H, W.lso = ee.sortorder || W.firstsortorder || "asc"), ee.multiSort && -1 !== (ge = b(X, fe)) && (W.lso = he[ge])
                            }
                            me += "", ve += "";
                            var ye, xe, je, Ce, De, Se, qe, Fe, Re, _e, Ie, Ge = $("" + me + ve + "
");
                            if ($(Ge[0].tHead).children("tr").children("th").hover(function() {
                                    $(this).addClass(we)
                                }, function() {
                                    $(this).removeClass(we)
                                }), ee.multiselect && $(ee.cb, Ge).on("click", function() {
                                    var t, e, r, i = _("states.select"),
                                        a = [],
                                        o = ee.iColByName.cb,
                                        l = function(e, t) {
                                            $(e)[t ? "addClass" : "removeClass"](i).attr(t ? {
                                                "aria-selected": "true",
                                                tabindex: "0"
                                            } : {
                                                "aria-selected": "false",
                                                tabindex: "-1"
                                            }), void 0 !== o && $(e.cells[o]).children("input.cbox").prop("checked", t)
                                        },
                                        n = ie.fbRows,
                                        s = $e + " ui-subgrid jqgroup jqfoot jqgfirstrow jqgskipselect",
                                        d = ee._index;
                                    if (clearArray(ee.selarrrow), this.checked) {
                                        if (t = !0, ee.selrow = 1 < D.rows.length ? D.rows[D.rows.length - 1].id : null, ee.multiPageSelection && ("local" === ee.datatype || ee.treeGrid))
                                            if ("filtered" === ee.selectAllMode && null != ee.lastSelectedData && 0 < ee.lastSelectedData.length)
                                                for (ee.selarrrow = [], r = 0; r < ee.lastSelectedData.length; r++) ee.lastSelectedData[r].hasOwnProperty(ee.localReader.id) && ee.selarrrow.push(ee.idPrefix + ee.lastSelectedData[r][ee.localReader.id]);
                                            else if (null != ee.data && 0 < ee.data.length && null != d)
                                            for (e in d) d.hasOwnProperty(e) && ee.selarrrow.push(ee.idPrefix + e)
                                    } else t = !1, ee.selrow = null;
                                    var c = t ? ee.selarrrow : a;
                                    $(D.rows).each(function(e) {
                                        hasOneFromClasses(this, s) || (l(this, t), $.inArray(this.id, c) < 0 && c.push(this.id), n && l(n[e], t))
                                    }), feedback.call(D, "onSelectAll", t ? ee.selarrrow : a, t)
                                }), !0 === ee.autowidth) {
                                var Oe = Math.floor($(m).innerWidth());
                                ee.width = 0 < Oe ? Oe : "nw"
                            }
                            isNaN(ee.width) ? isNaN(parseFloat(ee.width)) || (ee.width = parseFloat(ee.width)) : ee.width = Number(ee.width), ee.widthOrg = ee.width, De = 0, Se = jgrid.cell_width ? 0 : re(ee.cellLayout, 0), qe = 0, Fe = re(ee.scrollOffset, 0), Re = !1, _e = 0, Ie = jgrid.isCellClassHidden, q(ee.colModel, function() {
                                if (void 0 === this.hidden && (this.hidden = !1), ee.grouping && ee.autowidth) {
                                    var e = b(this.name, ee.groupingView.groupField);
                                    0 <= e && ee.groupingView.groupColumnShow.length > e && (this.hidden = !ee.groupingView.groupColumnShow[e])
                                }
                                this.widthOrg = xe = re(this.width, 0), !1 !== this.hidden || Ie(this.classes) || (De += xe + Se, this.fixed ? _e += xe + Se : qe++)
                            }), isNaN(ee.width) && (ee.width = De + (!1 !== ee.shrinkToFit || isNaN(ee.height) ? 0 : Fe)), ie.width = ee.width, ee.tblwidth = De, !1 === ee.shrinkToFit && !0 === ee.forceFit && (ee.forceFit = !1), !0 === ee.shrinkToFit && 0 < qe && (je = ie.width - Se * qe - _e, isNaN(ee.height) || (je -= Fe, Re = !0), De = 0, q(ee.colModel, function(e) {
                                !1 !== this.hidden || Ie(this.classes) || this.fixed || (xe = Math.round(je * this.width / (ee.tblwidth - Se * qe - _e)), this.width = xe, De += xe, ye = e)
                            }), Ce = 0, Re ? ie.width - _e - (De + Se * qe) !== Fe && (Ce = ie.width - _e - (De + Se * qe) - Fe) : Re || 1 === Math.abs(ie.width - _e - (De + Se * qe)) || (Ce = ie.width - _e - (De + Se * qe)), ee.colModel[ye].width += Ce, ee.tblwidth = De + Ce + Se * qe + _e, ee.tblwidth > ee.width && (ee.colModel[ye].width -= ee.tblwidth - parseInt(ee.width, 10), ee.tblwidth = ee.width)), $(m).css("width", ie.width + "px").append("
 
"), $(ee.rs).on("selectstart", function() {
                                return !1
                            }).click(u).dblclick(function(e) {
                                var t = $(this).data("idx"),
                                    r = $(this).data("pageX"),
                                    i = ee.colModel[t];
                                if (null == r || null == i) return !1;
                                var a = String(r).split(";"),
                                    o = parseFloat(a[0]),
                                    l = parseFloat(a[1]);
                                return 2 === a.length && (5 < Math.abs(o - l) || 5 < Math.abs(e.pageX - o) || 5 < Math.abs(e.pageX - l)) || (feedback.call(D, "resizeDblClick", t, i, e) && i.autoResizable && Qe.autoResizeColumn.call(h, t), feedback.call(D, "afterResizeDblClick", {
                                    iCol: t,
                                    cm: i,
                                    cmName: i.name
                                })), !1
                            }), $(p).css("width", ie.width + "px");
                            var ke = "";
                            ee.footerrow && (ke += "");
                            var Ne = "";
                            if (ee.disableClick = !1, $("th", Ge[0].tHead.rows[0]).each(function(e) {
                                    var t = ee.colModel[e],
                                        r = t.name,
                                        i = $(this),
                                        a = i.children("div"),
                                        o = a.children("span.s-ico"),
                                        l = ee.showOneSortIcon;
                                    Q = t.width, void 0 === t.resizable && (t.resizable = !0), t.resizable ? (J = document.createElement("span"), $(J).html(" ").addClass("ui-grid-resize ui-grid-resize-" + k).on("selectstart", function() {
                                        return !1
                                    }), i.addClass(ee.resizeclass)) : J = "", i.css("width", Q + "px").prepend(J);
                                    var n = "";
                                    if (!(J = null) === t.hidden && (i.css("display", "none"), n = "display:none;"), Ne += "", ie.headers[e] = {
                                            width: Q,
                                            el: this
                                        }, "boolean" != typeof(ne = t.sortable) && (t.sortable = !0, ne = !0), "cb" !== r && "subgrid" !== r && "rn" !== r && ne && ee.viewsortcols[2] && a.addClass("ui-grid-sortable"), ne)
                                        if (ee.multiSort) {
                                            var s = "desc" === t.lso ? "asc" : "desc";
                                            ee.viewsortcols[0] ? (o.css("display", ""), t.lso && (o.children("span.ui-icon-" + t.lso).removeClass($e), l && o.children("span.ui-icon-" + s).hide())) : t.lso && (o.css("display", ""), o.children("span.ui-icon-" + t.lso).removeClass($e), l && o.children("span.ui-icon-" + s).hide()), ee.showSortOrder && (ge = b(r, fe), o["beforeSortIcons" === ee.sortOrderPosition ? "before" : "after"]("" + (ge < 0 ? " " : Z(ee.formatSortOrder) ? ee.formatSortOrder.call(D, {
                                                cm: this,
                                                sortIndex: ge
                                            }) : ge + 1) + ""))
                                        } else {
                                            var d = "desc" === ee.sortorder ? "asc" : "desc";
                                            ee.viewsortcols[0] ? (o.css("display", ""), e === ee.lastsort && (o.children("span.ui-icon-" + ee.sortorder).removeClass($e), l && o.children("span.ui-icon-" + d).hide())) : e === ee.lastsort && "" !== t.lso && (o.css("display", ""), o.children("span.ui-icon-" + ee.sortorder).removeClass($e), l && o.children("span.ui-icon-" + d).hide())
                                        }
                                    ee.footerrow && (ke += "")
                                }).mousedown(function(e) {
                                    var t, r, i = $(this),
                                        a = i.closest(".ui-grid-hdiv").hasClass("frozen-div");
                                    if (1 === $(e.target).closest("th>span.ui-grid-resize").length) return null != (t = V(this)) && (!0 === ee.forceFit && (ee.nv = function(e) {
                                        var t, r = e,
                                            i = e;
                                        for (t = e + 1; t < ee.colModel.length; t++)
                                            if (!0 !== ee.colModel[t].hidden) {
                                                i = t;
                                                break
                                            }
                                        return i - r
                                    }(t)), ie.dragStart(t, e, (r = [i.position().left + i.outerWidth()], "rtl" === ee.direction && (r[0] = ee.width - r[0]), r[0] -= a ? 0 : ie.bDiv.scrollLeft, r.push($(ie.hDiv).position().top), r.push($(ie.bDiv).offset().top - $(ie.hDiv).offset().top + $(ie.bDiv).height() + (ie.sDiv ? $(ie.sDiv).height() : 0)), r), i)), !1
                                }).click(function(e) {
                                    if (ee.disableClick) return ee.disableClick = !1;
                                    var t, r, i = "th.ui-th-column>div";
                                    ee.viewsortcols[2] ? i += ".ui-grid-sortable" : i += ">span.s-ico>span.ui-grid-ico-sort";
                                    var a = $(e.target).closest(i);
                                    if (1 === a.length) {
                                        ee.viewsortcols[2] || (t = !0, r = a.hasClass("ui-icon-desc") ? "asc" : "desc");
                                        var o = V(this);
                                        return null != o && L.call(D, $("div", this)[0].id.substring(5 + ee.id.length + 1), o, t, r, this, e), !1
                                    }
                                }), ee.sortable && Z(Qe.sortableColumns)) try {
                                Qe.sortableColumns.call(h, $(Ge[0].tHead.rows[0]))
                            } catch (e) {}
                            ee.footerrow && (ke += "
 
"), Ne += "", h.html("" + Ne + ""), h.addClass(_("grid", "ui-grid-btable" + (!0 === ee.altRows && h.jqGrid("isBootstrapGuiStyle") ? " table-striped" : "")));
                            var Ee, Ae, Te = !(!ee.caption || !0 !== ee.hiddengrid),
                                Me = $("
"),
                                Be = _("top"),
                                Pe = _("bottom");
                            if (ie.hDiv = document.createElement("div"), $(ie.hDiv).css({
                                    width: ie.width + "px"
                                }).addClass(_("hDiv", "ui-grid-hdiv")).append(Me).scroll(function() {
                                    var e = $(this).next(".ui-grid-bdiv")[0];
                                    return e && (e.scrollLeft = this.scrollLeft), !1
                                }), $(Me).append(Ge), Ge = null, Te && $(ie.hDiv).hide(), ee.rowNum = parseInt(ee.rowNum, 10), (isNaN(ee.rowNum) || ee.rowNum <= 0) && (ee.rowNum = ee.maxRowNum), ee.pager) "string" == typeof ee.pager && "#" !== ee.pager.substr(0, 1) ? (Ae = ee.pager, Ee = $("#" + jqID(ee.pager))) : !0 === ee.pager ? (Ae = randId(), (Ee = $("
")).appendTo("body"), ee.pager = "#" + jqID(Ae)) : Ae = (Ee = $(ee.pager)).attr("id"), 0 < Ee.length ? (Ee.css({
                                width: ie.width + "px"
                            }).addClass(_("pager.pager", "ui-grid-pager " + Pe)).appendTo(m), Te && Ee.hide(), C.call(D, Ae, ""), ee.pager = "#" + jqID(Ae)) : ee.pager = "";
                            !1 === ee.cellEdit && !0 === ee.hoverrows && h.on("mouseover.jqGrid", function(e) {
                                ce = $(e.target).closest("tr.jqgrow"), "ui-subgrid" !== $(ce).attr("class") && $(ce).addClass(be)
                            }).on("mouseout.jqGrid", function(e) {
                                ce = $(e.target).closest("tr.jqgrow"), $(ce).removeClass(be)
                            });
                            var ze = function(e) {
                                var t, r, i;
                                do {
                                    if (0 < (t = $(e).closest("td")).length) {
                                        if (i = (r = t.parent()).parent().parent(), r.is(".jqgrow") && (i[0] === this || i.is("table.ui-grid-btable") && (i[0].id || "").replace("_frozen", "") === this.id)) break;
                                        e = t.parent()
                                    }
                                } while (0 < t.length);
                                return t
                            };
                            h.before(ie.hDiv).click(function(e) {
                                var i = _("states.select"),
                                    t = e.target,
                                    r = ze.call(D, t),
                                    a = r.parent();
                                if (0 !== a.length && !hasOneFromClasses(a, $e)) {
                                    var o = a[0].id,
                                        l = r[0].cellIndex,
                                        n = $(t).hasClass("cbox") && $(t).is(":enabled") && !hasOneFromClasses(t, $e),
                                        s = feedback.call(D, "beforeSelectRow", o, e),
                                        d = !1,
                                        c = jgrid.detectRowEditing.call(D, o),
                                        u = null != c && "cellEditing" !== c.mode;
                                    if ("A" !== t.tagName && (!u || n)) {
                                        if (feedback.call(D, "onCellSelect", o, l, r.html(), e), !0 === ee.cellEdit) {
                                            if (s && ee.multiselect && n) {
                                                if (g.call(h, o, !0, e), n && !ee.noCellSelection) return;
                                                d = !0
                                            }
                                            try {
                                                Qe.editCell.call(h, a[0].rowIndex, l, !0)
                                            } catch (e) {}
                                            if (!ee.multiselect || !ee.noCellSelection || ee.multiboxonly && d) return
                                        }
                                        if (s)
                                            if (ee.multikey) e[ee.multikey] && !d ? g.call(h, o, !0, e) : ee.multiselect && n && (n = $("#jqg_" + jqID(ee.id) + "_" + o).is(":checked"), $("#jqg_" + jqID(ee.id) + "_" + o).prop("checked", !n));
                                            else if (ee.multiselect && ee.multiboxonly)
                                            if (n && !d) g.call(h, o, !0, e);
                                            else {
                                                var p = ee.frozenColumns ? ee.id + "_frozen" : "";
                                                $(ee.selarrrow).each(function(e, t) {
                                                    var r = Qe.getGridRowById.call(h, t);
                                                    r && $(r).removeClass(i), $("#jqg_" + jqID(ee.id) + "_" + jqID(t)).prop("checked", !1), p && ($("#" + jqID(t), "#" + jqID(p)).removeClass(i), $("#jqg_" + jqID(ee.id) + "_" + jqID(t), "#" + jqID(p)).prop("checked", !1))
                                                }), clearArray(ee.selarrrow), d || g.call(h, o, !0, e)
                                            }
                                        else {
                                            var f = ee.selrow;
                                            d || g.call(h, o, !0, e), "toggle" !== ee.singleSelectClickMode || ee.multiselect || f !== o || (D.grid.fbRows && (a = a.add(D.grid.fbRows[a[0].rowIndex] === a[0] ? D.rows[a[0].rowIndex] : D.grid.fbRows[a[0].rowIndex])), a.removeClass(i).attr({
                                                "aria-selected": "false",
                                                tabindex: "-1"
                                            }), ee.selrow = null)
                                        } else n && $(t).prop("checked", !1)
                                    }
                                }
                            }).on("reloadGrid", function(e, t) {
                                var r = this,
                                    i = r.grid,
                                    a = $(this),
                                    o = r.p;
                                if (0 < o.savedRow.length && "prevent" === o.reloadingDuringEditing) return !1;
                                if (!0 === o.treeGrid && (o.datatype = o.treedatatype), t = S({}, defaults.reloadGridOptions || {}, o.reloadGridOptions || {}, t || {}), "local" === o.datatype && o.dataTypeOrg && o.loadonce && t.fromServer && (o.datatype = o.dataTypeOrg, delete o.dataTypeOrg), t.current && i.selectionPreserver.call(r), "local" === o.datatype ? (o.multiPageSelection || Qe.resetSelection.call(a), o.data.length && (x.call(r), j.call(r))) : o.treeGrid || o.multiPageSelection || (o.selrow = null, o.multiselect && (clearArray(o.selarrrow), B.call(r, !1)), clearArray(o.savedRow), o.editingInfo = {}), P(o.reloadingDuringEditing), o.iRow = -1, o.iCol = -1, o.scroll && ie.emptyRows.call(r, !0, !1), t.page) {
                                    var l = parseInt(t.page, 10);
                                    l > o.lastpage && (l = o.lastpage), l < 1 && (l = 1), o.page = l, i.prevRowHeight ? i.bDiv.scrollTop = (l - 1) * i.prevRowHeight * o.rowNum : i.bDiv.scrollTop = 0
                                }
                                return i.prevRowHeight && o.scroll && void 0 === t.page ? (delete o.lastpage, i.populateVisible.call(r)) : i.populate.call(r), !0 === o._inlinenav && a.jqGrid("showAddEditButtons", !1), !1
                            }).dblclick(function(e) {
                                var t = ze.call(D, e.target),
                                    r = t.parent();
                                if (0 < t.length && !feedback.call(D, "ondblClickRow", r.attr("id"), r[0].rowIndex, t[0].cellIndex, e)) return !1
                            }).on("contextmenu", function(e) {
                                var t = ze.call(D, e.target),
                                    r = t.parent(),
                                    i = r.attr("id");
                                if (0 !== t.length) return ee.multiselect || ee.selrow === i || !0 !== ee.selectOnContextMenu || g.call(h, i, !0, e), !!feedback.call(D, "onRightClickRow", i, r[0].rowIndex, t[0].cellIndex, e) && void 0
                            }), ie.bDiv = document.createElement("div"), f && "auto" === String(ee.height).toLowerCase() && (ee.height = "100%"), $(ie.bDiv).append($("
").append("
").append(D)).addClass("ui-grid-bdiv").css({
                                height: ee.height + (isNaN(ee.height) ? "" : "px"),
                                width: ie.width + "px"
                            }).scroll(ie.scrollGrid), ee.maxHeight && $(ie.bDiv).css("max-height", ee.maxHeight + (isNaN(ee.maxHeight) ? "" : "px")), h.css({
                                width: "1px"
                            }), $.support.tbody || 2 === $(">tbody", D).length && $(">tbody:gt(0)", D).remove(), ee.multikey && $(ie.bDiv).on(jgrid.msie ? "selectstart" : "mousedown", function() {
                                return !1
                            }), Te && $(ie.bDiv).hide(), ie.cDiv = document.createElement("div");
                            var Le = R("gridMinimize.visible"),
                                Ve = R("gridMinimize.hidden"),
                                He = G("showhide"),
                                We = !0 === ee.hidegrid ? $("").hover(function() {
                                    We.addClass(be)
                                }, function() {
                                    We.removeClass(be)
                                }).append("") : "";
                            if ($(ie.cDiv).append("" + ee.caption + "").append(We).addClass(_("gridTitle", "ui-grid-titlebar ui-grid-caption" + ("rtl" === k ? "-rtl " : " ") + Be)), $(ie.cDiv).insertBefore(ie.hDiv), ee.toolbar[0]) {
                                ie.uDiv = document.createElement("div"), "top" === ee.toolbar[1] ? $(ie.uDiv).insertBefore(ie.hDiv) : "bottom" === ee.toolbar[1] && $(ie.uDiv).insertAfter(ie.hDiv);
                                var Ue = _("toolbarUpper", "ui-userdata");
                                "both" === ee.toolbar[1] ? (ie.ubDiv = document.createElement("div"), $(ie.uDiv).addClass(Ue).attr("id", "t_" + ee.id).insertBefore(ie.hDiv), $(ie.ubDiv).addClass(_("toolbarBottom", "ui-userdata")).attr("id", "tb_" + ee.id).insertAfter(ie.hDiv), Te && $(ie.ubDiv).hide()) : $(ie.uDiv).width(ie.width).addClass(Ue).attr("id", "t_" + ee.id), Te && $(ie.uDiv).hide()
                            }
                            if ("string" == typeof ee.datatype && (ee.datatype = ee.datatype.toLowerCase()), ee.toppager ? (ee.toppager = ee.id + "_toppager", ie.topDiv = $("
")[0], $(ie.topDiv).addClass(_("pager.pager", "ui-grid-toppager" + (ee.caption ? "" : " " + Be))).css({
                                    width: ie.width + "px"
                                }).insertBefore(ie.hDiv), C.call(D, ee.toppager, "_t"), ee.toppager = "#" + jqID(ee.toppager)) : "" !== ee.pager || ee.scroll || (ee.rowNum = ee.maxRowNum), ee.footerrow && (ie.sDiv = $("
")[0], Me = $("
"), $(ie.sDiv).append(Me).width(ie.width).insertAfter(ie.hDiv), $(Me).append(ke), ie.footers = $(".ui-grid-ftable", ie.sDiv)[0].rows[0].cells, ee.rownumbers && (ie.footers[0].className = _("rowNum", "jqgrid-rownum")), Te && $(ie.sDiv).hide()), Me = null, ee.caption) {
                                var Ye = ee.datatype;
                                !0 === ee.hidegrid && ($(".ui-grid-titlebar-close", ie.cDiv).click(function(e) {
                                    var t = ".ui-grid-bdiv,.ui-grid-hdiv,.ui-grid-pager,.ui-grid-sdiv",
                                        r = this;
                                    !0 === ee.toolbar[0] && ("both" === ee.toolbar[1] && (t += ",#" + jqID($(ie.ubDiv).attr("id"))), t += ",#" + jqID($(ie.uDiv).attr("id")));
                                    var i = $(t, ee.gView).length;
                                    return ee.toppager && (t += "," + ee.toppager), "visible" === ee.gridstate ? $(t, ee.gBox).slideUp("fast", function() {
                                        0 === --i && ($("span", r).removeClass(Le).addClass(Ve), ee.gridstate = "hidden", $(ee.gBox).hasClass("ui-resizable") && $(".ui-resizable-handle", ee.gBox).hide(), $(ie.cDiv).addClass(Pe), Te || feedback.call(D, "onHeaderClick", ee.gridstate, e))
                                    }) : "hidden" === ee.gridstate && ($(ie.cDiv).removeClass(Pe), $(t, ee.gBox).slideDown("fast", function() {
                                        0 === --i && ($("span", r).removeClass(Ve).addClass(Le), Te && (ee.datatype = Ye, M.call(D), Te = !1), ee.gridstate = "visible", $(ee.gBox).hasClass("ui-resizable") && $(".ui-resizable-handle", ee.gBox).show(), Te || feedback.call(D, "onHeaderClick", ee.gridstate, e))
                                    })), !1
                                }), Te && (ee.datatype = "local", $(".ui-grid-titlebar-close", ie.cDiv).trigger("click")))
                            } else $(ie.cDiv).hide(), $(ie.cDiv).nextAll("div:visible").first().addClass("ui-corner-top");
                            $(ie.hDiv).after(ie.bDiv), ie.eDiv = $("")[0], $(ie.hDiv).after(ie.eDiv), $(m).click(u).dblclick(function(e) {
                                var t = $(ee.rs),
                                    r = t.offset(),
                                    i = t.data("idx"),
                                    a = t.data("delta"),
                                    o = ee.colModel[i],
                                    l = $(this).data("pageX") || t.data("pageX");
                                if (null == l || null == o) return !1;
                                var n = String(l).split(";"),
                                    s = parseFloat(n[0]),
                                    d = parseFloat(n[1]);
                                return 2 === n.length && (5 < Math.abs(s - d) || 5 < Math.abs(e.pageX - s) || 5 < Math.abs(e.pageX - d)) || (feedback.call(D, "resizeDblClick", i, o) && r.left - 1 <= e.pageX + a && e.pageX + a <= r.left + t.outerWidth() + 1 && o.autoResizable && Qe.autoResizeColumn.call(h, i), feedback.call(D, "afterResizeDblClick", {
                                    iCol: i,
                                    cm: o,
                                    cmName: o.name
                                })), !1
                            }), ee.pager || $(ie.cDiv).nextAll("div:visible").filter(":last").addClass(Pe), $(".ui-grid-labels", ie.hDiv).on("selectstart", function() {
                                return !1
                            }), D.formatCol = w, D.sortData = L, D.updatepager = function(e, t) {
                                var r, i, a, o, l, n, s, d, c = this,
                                    u = $(c),
                                    p = c.grid,
                                    f = ee.pager || "",
                                    h = ee.pager ? "_" + ee.pager.substr(1) : "",
                                    g = p.bDiv,
                                    m = $.fmatter ? $.fmatter.NumberFormat : null,
                                    v = ee.toppager ? "_" + ee.toppager.substr(1) : "",
                                    b = _("states.hover"),
                                    w = _("states.disabled");
                                if ((a = parseInt(ee.page, 10) - 1) < 0 && (a = 0), l = (a *= parseInt(ee.rowNum, 10)) + ee.reccount, ee.scroll) {
                                    var y = $(getGridComponent(COMPONENT_NAMES.BODY_TABLE, g)[0].rows).slice(1);
                                    a = l - y.length, ee.reccount = y.length;
                                    var x = y.outerHeight() || p.prevRowHeight;
                                    if (x) {
                                        var j = a * x,
                                            C = jgrid.fixMaxHeightOfDiv.call(c, parseInt(ee.records, 10) * x);
                                        $(g).children("div").first().css({
                                            height: C + "px"
                                        }).children("div").first().css({
                                            height: j + "px",
                                            display: ""
                                        }), 0 === g.scrollTop && 1 < ee.page && (g.scrollTop = ee.rowNum * (ee.page - 1) * x)
                                    }
                                    g.scrollLeft = p.hDiv.scrollLeft
                                }
                                if (f += ee.toppager ? (f ? "," : "") + ee.toppager : "") {
                                    if (s = I("formatter.integer") || {}, r = re(ee.page), i = re(ee.lastpage), $(".selbox", f).prop("disabled", !1), !0 === ee.pginput) {
                                        var D = $(".ui-pg-input", f),
                                            S = String(ee.page).length;
                                        D.val(ee.page), D.each(function() {
                                            var e = parseInt($(this).attr("size"), 10);
                                            0 < e && e < S && $(this).attr("size", S)
                                        }), d = ee.toppager ? "#sp_1" + h + ",#sp_1" + v : "#sp_1" + h, $(d).html($.fmatter ? m(ee.lastpage, s) : ee.lastpage).closest(".ui-pg-table").each(function() {
                                            E.call(c, $(this))
                                        })
                                    }
                                    ee.viewrecords && (0 === ee.reccount ? $(".ui-paging-info", f).html(G("emptyrecords")) : (o = a + 1, n = ee.records, $.fmatter && (o = m(o, s), l = m(l, s), n = m(n, s)), $(".ui-paging-info", f).html(jgrid.format(G("recordtext"), o, l, n)))), !0 === ee.pgbuttons && (i <= 0 && (r = 0), r <= 0 && (r = i = 0), 1 === r || 0 === r ? ($("#first" + h + ", #prev" + h).addClass(w).removeClass(b), ee.toppager && $("#first_t" + v + ", #prev_t" + v).addClass(w).removeClass(b)) : ($("#first" + h + ", #prev" + h).removeClass(w), ee.toppager && $("#first_t" + v + ", #prev_t" + v).removeClass(w)), r === i || 0 === r ? ($("#next" + h + ", #last" + h).addClass(w).removeClass(b), ee.toppager && $("#next_t" + v + ", #last_t" + v).addClass(w).removeClass(b)) : ($("#next" + h + ", #last" + h).removeClass(w), ee.toppager && $("#next_t" + v + ", #last_t" + v).removeClass(w)))
                                }!0 === e && !0 === ee.rownumbers && $(">td.jqgrid-rownum", c.rows).each(function(e) {
                                    $(this).html(a + 1 + e)
                                }), t && ee.jqgdnd && u.jqGrid("gridDnD", "updateDnD"), feedback.call(c, "gridComplete"), u.triggerHandler("jqGridAfterGridComplete")
                            }, D.refreshIndex = j, D.addItemDataToColumnIndex = oe, D.removeItemDataFromColumnIndex = function(e) {
                                var t, r, i, a = ee.dataIndexById[e];
                                if (null != a) {
                                    for (t in a)
                                        if (a.hasOwnProperty(t))
                                            for (i in r = a[t]) r.hasOwnProperty(i) && (delete ee.indexByColumnData[t][i][e], $.isEmptyObject(ee.indexByColumnData[t][i]) && delete ee.indexByColumnData[t][i]);
                                    delete ee.dataIndexById[e]
                                }
                            }, D.generateValueFromColumnIndex = function(e, t, r) {
                                var i, a, o = $(this).jqGrid("getUniqueValueFromColumnIndex", e),
                                    l = "";
                                if (null != o)
                                    for (r = r || ";", t = t || ":", i = 0, a = o.length; i < a; i++) "" !== l && (l += r || ";"), l += o[i] + (t || ":") + o[i];
                                return l
                            }, D.setHeadCheckBox = B, D.fixScrollOffsetAndhBoxPadding = O, D.constructTr = function(e, t, r, i, a, o) {
                                var l, n = "-1",
                                    s = "",
                                    d = t ? "display:none;" : "",
                                    c = _("gridRow", "jqgrow ui-row-" + ee.direction) + (r ? " " + r : "") + (o ? " " + _("states.select") : ""),
                                    u = $(this).triggerHandler("jqGridRowAttr", [i, a, e]);
                                if ("object" != typeof u && (u = Z(ee.rowattr) ? ee.rowattr.call(this, i, a, e) : "string" == typeof ee.rowattr && null != jgrid.rowattr && Z(jgrid.rowattr[ee.rowattr]) ? jgrid.rowattr[ee.rowattr].call(this, i, a, e) : {}), null != u && !$.isEmptyObject(u)) {
                                    u.hasOwnProperty("id") && (e = u.id, delete u.id), u.hasOwnProperty("tabindex") && (n = u.tabindex, delete u.tabindex), u.hasOwnProperty("style") && (d += u.style, delete u.style), u.hasOwnProperty("class") && (c += " " + u.class, delete u.class);
                                    try {
                                        delete u.role
                                    } catch (e) {}
                                    for (l in u) u.hasOwnProperty(l) && (s += " " + l + "=" + u[l])
                                }
                                if (ee.treeGrid && parseInt(i[ee.treeReader.level_field], 10) !== parseInt(ee.tree_root_level, 10)) {
                                    var p = Qe.getNodeParent.call($(this), i);
                                    !p || !p.hasOwnProperty(ee.treeReader.expanded_field) || p[ee.treeReader.expanded_field] || t || (d += "display:none;")
                                }
                                return ""
                            }, D.formatter = function(e, t, r, i, a, o) {
                                var l, n, s = ee.colModel[r];
                                if (void 0 !== s.formatter) {
                                    var d = {
                                        rowId: e = "" !== String(ee.idPrefix) ? (n = e, stripPref(ee.idPrefix, n)) : e,
                                        colModel: s,
                                        gid: ee.id,
                                        pos: r,
                                        rowData: o || i
                                    };
                                    l = Z(s.cellBuilder) ? s.cellBuilder.call(D, t, d, i, a) : Z(s.formatter) ? s.formatter.call(D, t, d, i, a) : $.fmatter ? $.fn.fmatter.call(D, s.formatter, t, d, i, a) : y(t)
                                } else l = y(t);
                                if (l = s.autoResizable && "actions" !== s.formatter ? "" + l + "" : l, ee.treeGrid && "edit" !== a && (null == ee.ExpandColumn && 0 === r || ee.ExpandColumn === s.name)) {
                                    null == o && (o = ee.data[ee._index[e]]);
                                    var c = parseInt(o[ee.treeReader.level_field] || 0, 10),
                                        u = 0 === parseInt(ee.tree_root_level, 10) ? c : c - 1,
                                        p = o[ee.treeReader.leaf_field],
                                        f = o[ee.treeReader.expanded_field],
                                        h = o[ee.treeReader.icon_field],
                                        g = p ? (null != h && "" !== h ? h : ee.treeIcons.leaf) + " tree-leaf" : f ? ee.treeIcons.minus + " tree-minus" : ee.treeIcons.plus + " tree-plus";
                                    if (!p && h && "string" == typeof h) {
                                        var m = h.split(",");
                                        2 === m.length && (g = f ? m[0] : m[1])
                                    }
                                    l = "
" + l + ""
                                }
                                return l
                            }, S(ie, {
                                populate: M,
                                emptyRows: function(e, t) {
                                    var r = ie.bDiv,
                                        i = null != ie.fbDiv ? ie.fbDiv.children(".ui-grid-btable")[0] : null,
                                        a = function(e) {
                                            if (e) {
                                                var t = e.rows,
                                                    r = t[0];
                                                if (ee.deepempty) t && $(t).slice(1).remove();
                                                else if (ee.quickEmpty)
                                                    if ("quickest" === ee.quickEmpty) e.replaceChild(document.createElement("tbody"), e.tBodies[0]), e.firstChild.appendChild(r);
                                                    else
                                                        for (; 1 < t.length;) e.deleteRow(t.length - 1);
                                                else $(e.firstChild).empty().append(r)
                                            }
                                        };
                                    $(this).off(".jqGridFormatter"), a(this), a(i), e && ee.scroll && ($(r.firstChild).css({
                                        height: "auto"
                                    }), $(r.firstChild.firstChild).css({
                                        height: 0,
                                        display: "none"
                                    }), 0 !== r.scrollTop && (r.scrollTop = 0)), !0 === t && ee.treeGrid && (clearArray(ee.data), clearArray(ee.lastSelectedData), ee._index = {}, ee.dataIndexById = {}, ee.indexByColumnData = {}), ee.rowIndexes = {}, ee.iRow = -1, ee.iCol = -1
                                },
                                beginReq: A,
                                endReq: T
                            }), D.addXmlData = N, D.addJSONData = N, D.rebuildRowIndexes = te, D.grid.cols = D.rows[0].cells, feedback.call(D, "onInitGrid"), ee.treeGrid && "local" === ee.datatype && null != ee.data && 0 < ee.data.length && (ee.datatype = "jsonstring", ee.datastr = ee.data, ee.data = []), M.call(D), ee.hiddengrid = !1
                        } else F(I("errors.model"))
                    }
                else F("Element is not a table!")
            }
        })
    };
    var base = $.fn.jqGrid;
    jgrid.extend({
        getGridRes: function(e) {
            var t = this[0];
            if (!t || !t.grid || !t.p) return null;
            var r = jgrid.getRes(locales[t.p.locale], e) || jgrid.getRes(locales["en-US"], e),
                i = jgrid.getRes(jgrid, e);
            return "object" != typeof r || null === r || $.isArray(r) ? void 0 !== i ? i : r : $.extend(!0, {}, r, i || {})
        },
        getGuiStyles: function(e, t) {
            var r = this instanceof $ && 0 < this.length ? this[0] : this;
            if (!r || !r.grid || !r.p) return "";
            var i, a = r.p.guiStyle || jgrid.defaults.guiStyle || "jQueryUI",
                o = jgrid.getRes(jgrid.guiStyles[a], e);
            return void 0 === o && "string" == typeof(i = jgrid.getRes(jgrid.guiStyles[a], "baseGuiStyle")) && (o = jgrid.getRes(jgrid.guiStyles[i], e)), jgrid.mergeCssClasses(o || "", t || "")
        },
        isBootstrapGuiStyle: function() {
            return 0 <= $.inArray("ui-grid-bootstrap", $(this).jqGrid("getGuiStyles", "gBox").split(" "))
        },
        displayErrorMessage: function(e) {
            var t = this instanceof $ && 0 < this.length ? this[0] : this;
            if (t && t.grid && t.p && e) {
                var r = $(t.grid.eDiv),
                    i = r.children(".ui-grid-error");
                i.html(e), r.show(), t.p.errorDisplayTimeout && setTimeout(function() {
                    i.empty(), r.hide()
                }, t.p.errorDisplayTimeout)
            }
        },
        getIconRes: function(e) {
            var t = this instanceof $ && 0 < this.length ? this[0] : this;
            if (!t || !t.p) return "";
            var r = t.p,
                i = jgrid.icons[r.iconSet],
                a = function(e, t, r) {
                    var i, a, o, l = t.split("."),
                        n = l.length,
                        s = [];
                    if (null == (e = "string" == typeof e ? jgrid.icons[e] : e)) return "";
                    for ((i = e).common ? s.push(i.common) : r && r.common && s.push(r.common), o = 0; o < n && (a = l[o]); o++) {
                        if (o + 1 === n && i.ignoreParents && (s = []), void 0 === (i = i[a])) {
                            if ("common" === a) break;
                            return ""
                        }
                        if ("string" == typeof i) {
                            s.push(i);
                            break
                        }
                        null != i && i.common && s.push(i.common)
                    }
                    return jgrid.mergeCssClasses.apply(this, s)
                };
            if (null == i) return "";
            var o = a(r.iconSet, e);
            return "" === o && null != i.baseIconSet && (o = a(i.baseIconSet, e, jgrid.icons[r.iconSet])), o || ""
        },
        isInCommonIconClass: function(e) {
            var t = this instanceof $ && 0 < this.length ? this[0] : this;
            if (!t || !t.p) return "";
            var r = t.p,
                i = jgrid.icons[r.iconSet];
            if (null == i) return !1;
            var a = i.common;
            if (void 0 === a) {
                if (null == i.baseIconSet) return !1;
                if (null == (i = jgrid.icons[i.baseIconSet])) return !1;
                a = i.common
            }
            return "string" == typeof a && 0 <= $.inArray(e, a.split(" "))
        },
        getUniqueValueFromColumnIndex: function(e) {
            var t = this[0];
            if (!t || !t.grid) return null;
            var r, i = [],
                a = "",
                o = t.p.indexByColumnData[e];
            if (null != o) {
                for (a in o)
                    if (o.hasOwnProperty(a)) {
                        for (r in o[a])
                            if (o[a].hasOwnProperty(r)) {
                                a = String(o[a][r]);
                                break
                            }
                        i.push(a)
                    }
                t.p.ignoreCase ? void 0 === String.prototype.localeCompare ? i.sort(function(e, t) {
                    var r = e.toLowerCase(),
                        i = t.toLowerCase();
                    return r === i ? 0 : i < r ? 1 : -1
                }) : i.sort(function(e, t) {
                    return String(e).toLowerCase().localeCompare(String(t).toLowerCase())
                }) : i.sort()
            }
            return i
        },
        generateDatalistFromColumnIndex: function(e) {
            if (!this[0] || !this[0].grid) return null;
            var t, r, i = this.jqGrid("getUniqueValueFromColumnIndex", e),
                a = $("");
            if (!(null != i && 0 < i.length)) return $();
            for (t = 0, r = i.length; t < r; t++) a.append($("").attr("value", i[t]));
            return a
        },
        getGridParam: function(e) {
            var t = this[0];
            return t && t.grid ? e ? void 0 !== t.p[e] ? t.p[e] : null : t.p : null
        },
        setGridParam: function(e, t) {
            return this.each(function() {
                null == t && (t = !1), this.grid && "object" == typeof e && (!0 === t ? $.extend(this.p, e) : $.extend(!0, this.p, e))
            })
        },
        abortAjaxRequest: function() {
            return this.each(function() {
                null != this.p.jqXhr && this.p.jqXhr.abort(), this.grid.endReq.call(this)
            })
        },
        getGridRowById: function(i) {
            if (null == i) return null;
            var a, o = i.toString();
            return this.each(function() {
                var e, t, r = this.rows;
                if (null != this.p.rowIndexes && (t = r[this.p.rowIndexes[o]]) && t.id === o && (a = t), !a) try {
                    for (e = r.length; e--;)
                        if (t = r[e], o === t.id) {
                            a = t;
                            break
                        }
                } catch (e) {
                    a = 0 < (a = $(this.grid.bDiv).find("#" + jqID(i))).length ? a[0] : null
                }
            }), a
        },
        getDataIDs: function() {
            var a = [];
            return this.each(function() {
                var e, t, r = this.rows,
                    i = r.length;
                if (i && 0 < i)
                    for (e = 0; e < i; e++) t = r[e], $(t).hasClass("jqgrow") && a.push(t.id)
            }), a
        },
        setSelection: function(C, D, S) {
            return this.each(function() {
                var e, t, r, i, a, o, l, n, s, d, c, u, p, f, h = this,
                    g = $(h),
                    m = h.p,
                    v = base.getGuiStyles,
                    b = base.getGridRowById,
                    w = v.call(g, "states.select"),
                    y = v.call(g, "states.disabled"),
                    x = h.grid.fbRows,
                    j = function(e, t) {
                        var r = t ? "addClass" : "removeClass",
                            i = m.iColByName.cb,
                            a = t ? {
                                "aria-selected": "true",
                                tabindex: "0"
                            } : {
                                "aria-selected": "false",
                                tabindex: "-1"
                            },
                            o = function(e) {
                                $(e)[r](w).attr(a), void 0 !== i && $(e.cells[i]).children("input.cbox").prop("checked", t)
                            };
                        o(e), x && o(x[e.rowIndex])
                    };
                void 0 !== C && (D = !1 !== D, null != S && 0 < (l = $(S.target).closest("tr.jqgrow")).length && (t = l[0], x && (t = h.rows[t.rowIndex])), null == t && (t = b.call(g, C)), !t || !t.className || -1 < t.className.indexOf(y) || (!0 === m.scrollrows && null != (r = b.call(g, C)) && 0 <= (r = r.rowIndex) && (s = h.rows[r], d = h.grid.bDiv, c = d.clientHeight, u = d.scrollTop, p = $(s).position().top, f = s.clientHeight, c + u <= p + f ? d.scrollTop = p - (c + u) + f + u : p < c + u && p < u && (d.scrollTop = p)), m.multiselect ? (h.setHeadCheckBox(!1), m.selrow = t.id, n = jgrid.detectRowEditing.call(h, t.id), -1 === (i = $.inArray(m.selrow, m.selarrrow)) ? (e = !0, m.selarrrow.push(m.selrow)) : null === n || "inlineEditing" !== n.mode && $(S.target).hasClass("cbox") ? (e = !1, m.selarrrow.splice(i, 1), a = m.selarrrow[0], m.selrow = void 0 === a ? null : a) : e = !0, "ui-subgrid" !== t.className && j(t, e), D && feedback.call(h, "onSelectRow", t.id, e, S || {})) : "ui-subgrid" !== t.className && (m.selrow !== t.id ? (null !== m.selrow && (o = b.call(g, m.selrow)) && j(o, !1), j(t, !0), e = !0) : e = !1, m.selrow = t.id, D && feedback.call(h, "onSelectRow", t.id, e, S || {}))))
            })
        },
        resetSelection: function(h) {
            return this.each(function() {
                var e, t = this,
                    r = $(this),
                    i = t.p,
                    a = base.getGuiStyles,
                    o = base.getGridRowById,
                    l = a.call(r, "states.select"),
                    n = "edit-cell " + l,
                    s = "selected-row " + a.call(r, "states.hover"),
                    d = i.iColByName.cb,
                    c = void 0 !== d,
                    u = t.grid.fbRows,
                    p = function(e) {
                        var t, r = "removeClass",
                            i = {
                                "aria-selected": "false",
                                tabindex: "-1"
                            };
                        $(e)[r](l).attr(i), c && $(e.cells[d]).children("input.cbox").prop("checked", !1), u && (t = u[e.rowIndex], $(t)[r](l).attr(i), c && $(t.cells[d]).children("input.cbox").prop("checked", !1))
                    };
                if (void 0 !== h) {
                    if (e = o.call(r, h), p(e), c) {
                        t.setHeadCheckBox(!1);
                        var f = $.inArray(h, i.selarrrow); - 1 !== f && i.selarrrow.splice(f, 1)
                    }
                } else i.multiselect ? ($(t.rows).each(function() {
                    var e = $.inArray(this.id, i.selarrrow); - 1 !== e && (p(this), i.selarrrow.splice(e, 1))
                }), t.setHeadCheckBox(!1), i.multiPageSelection || clearArray(i.selarrrow), i.selrow = null) : i.selrow && (e = o.call(r, i.selrow), p(e), i.selrow = null);
                !0 === i.cellEdit && 0 <= parseInt(i.iCol, 10) && 0 <= parseInt(i.iRow, 10) && (null != (e = t.rows[i.iRow]) && ($(e.cells[i.iCol]).removeClass(n), $(e).removeClass(s)), u && null != (e = u[i.iRow]) && ($(e.cells[i.iCol]).removeClass(n), $(e).removeClass(s)))
            })
        },
        isCellEditing: function(e, t, r) {
            var i = this[0],
                a = jgrid.detectRowEditing.call(i, e);
            if (null != a && ("inlineEditing" === a.mode || "cellEditing" === a.mode && a.savedRow.ic === t)) {
                t = isNaN(t) ? i.p.iColByName[t] : parseInt(t, 10);
                var o = null != r && r.id === e ? r : base.getGridRowById.call($(i), e),
                    l = i.p.colModel[t],
                    n = l.editable;
                if ($.isFunction(n) && (n = n.call(i, {
                        rowid: e,
                        id: stripPref(i.p.idPrefix, e),
                        iCol: t,
                        iRow: o.rowIndex,
                        cmName: l.name,
                        cm: l,
                        mode: a.mode,
                        td: o.cells[t],
                        tr: o,
                        dataElement: jgrid.getDataFieldOfCell.call(i, o, t)[0]
                    })), !0 === n) return !0
            }
            return !1
        },
        getRowData: function(p, f) {
            var h, g = {};
            return "object" == typeof p && (f = p, p = void 0), f = f || {}, this.each(function() {
                var e, t, r, i, a, o, l, n = this,
                    s = n.p,
                    d = !1,
                    c = 1,
                    u = n.rows;
                if (void 0 === p) d = !0, h = [], c = u.length;
                else if (!(e = base.getGridRowById.call($(n), p))) return g;
                for (t = 0; t < c; t++)
                    if (d && (e = u[t]), $(e).hasClass("jqgrow")) {
                        for (jgrid.detectRowEditing.call(n, p), i = $(e).find("td[role=gridcell]"), r = 0; r < i.length; r++)
                            if (o = (a = s.colModel[r]).name, $.inArray(o, s.reservedColumnNames) < 0 && "actions" !== a.formatter && (!f.skipHidden || !a.hidden))
                                if (l = i[r], base.isCellEditing.call($(n), p, r, e)) g[o] = jgrid.getEditedValue.call(n, jgrid.getDataFieldOfCell.call(n, e, r), a, {}, a.editable);
                                else if (!0 === s.treeGrid && o === s.ExpandColumn) g[o] = htmlDecode($("span", l).first().html());
                        else try {
                            g[o] = $.unformat.call(n, l, {
                                rowId: p,
                                colModel: a
                            }, r)
                        } catch (e) {
                            g[o] = htmlDecode($(l).html())
                        }!f.includeId || !1 !== s.keyName && null != g[s.keyName] || (g[s.prmNames.id] = stripPref(s.idPrefix, e.id)), d && (h.push(g), g = {})
                    }
            }), h || g
        },
        delRowData: function(c) {
            var u = !1;
            return this.each(function() {
                var e, t, r, i = this,
                    a = i.p,
                    o = $.jgrid.detectRowEditing.call(i, c);
                if (!(e = base.getGridRowById.call($(i), c))) return !1;
                if (a.subGrid && (r = $(e).next()).hasClass("ui-subgrid") && r.remove(), null != o) try {
                    "inlineEditing" === o.mode && null != base.restoreRow ? base.restoreRow.call($(i), c) : "cellEditing" === o.mode && null != base.restoreCell && base.restoreCell.call($(i), o.savedRow.id, o.savedRow.ic)
                } catch (e) {}
                if (e.rowIndex === a.iRow && (a.iRow = -1, a.iCol = -1), $(e).remove(), a.records--, a.reccount--, i.updatepager(!0, !1), u = !0, a.multiselect && -1 !== (t = $.inArray(c, a.selarrrow)) && a.selarrrow.splice(t, 1), a.multiselect && 0 < a.selarrrow.length ? a.selrow = a.selarrrow[a.selarrrow.length - 1] : a.selrow === c && (a.selrow = null), "local" === a.datatype) {
                    var l = stripPref(a.idPrefix, c),
                        n = a._index[l];
                    void 0 !== n && (i.removeItemDataFromColumnIndex(l), a.data.splice(n, 1), i.refreshIndex())
                }
                if (i.rebuildRowIndexes(), !0 === a.altRows && u && !$(i).jqGrid("isBootstrapGuiStyle")) {
                    var s = a.altclass,
                        d = i.grid.fbRows;
                    $(i.rows).each(function(e) {
                        var t = $(this);
                        d && (t = t.add(d[this.rowIndex])), t[e % 2 == 0 ? "addClass" : "removeClass"](s)
                    })
                }
                feedback.call(i, "afterDelRow", c)
            }), u
        },
        setRowData: function(p, f, i) {
            var o = !0;
            return this.each(function() {
                var l, n = this,
                    s = n.p,
                    e = typeof i,
                    d = {};
                if (!n.grid) return !1;
                if (!(l = base.getGridRowById.call($(n), p))) return !1;
                if (f) try {
                    var t, a = stripPref(s.idPrefix, p),
                        r = s._index[a],
                        c = {},
                        u = null != r ? s.data[r] : void 0;
                    if ($(s.colModel).each(function(e) {
                            var t = this,
                                r = t.name,
                                i = getAccessor(f, r);
                            void 0 !== i && ("local" === s.datatype && null != u && (i = convertOnSaveLocally.call(n, i, t, u[r], a, u, e), $.isFunction(t.saveLocally) ? t.saveLocally.call(n, {
                                newValue: i,
                                newItem: d,
                                oldItem: u,
                                id: a,
                                cm: t,
                                cmName: r,
                                iCol: e
                            }) : d[r] = i), c[r] = i)
                        }), $(s.colModel).each(function(e) {
                            var t, r = this.name,
                                i = getAccessor(f, r),
                                a = $(l.cells[e]);
                            if (void 0 !== i) {
                                "local" === s.datatype && null != u && (i = d[r]), t = this.title ? {
                                    title: i
                                } : {}, i = n.formatter(p, i, e, f, "edit", c), "select" === this.formatter && (t = this.title ? {
                                    title: stripHtml(i)
                                } : {});
                                var o = a;
                                !0 === s.treeGrid && r === s.ExpandColumn && (o = o.children("span.cell-wrapperleaf,span.cell-wrapper").first()), o.html(i), a.attr(t), s.frozenColumns && (o = $(n.grid.fbRows[l.rowIndex].cells[e]), !0 === s.treeGrid && r === s.ExpandColumn && (o = o.children("span.cell-wrapperleaf,span.cell-wrapper").first()), o.html(i).attr(t))
                            }
                        }), "local" === s.datatype) {
                        if (s.treeGrid)
                            for (t in s.treeReader) s.treeReader.hasOwnProperty(t) && delete d[s.treeReader[t]];
                        void 0 !== u && (s.data[r] = $.extend(!0, u, d), n.removeItemDataFromColumnIndex(a), n.addItemDataToColumnIndex(s.data[r], a))
                    }
                    feedback.call(n, "afterSetRow", {
                        rowid: p,
                        inputData: f,
                        iData: r,
                        iRow: l.rowIndex,
                        tr: l,
                        localData: d,
                        cssProp: i
                    })
                } catch (e) {
                    o = !1
                }
                o && ("string" === e ? $(l).addClass(i) : null !== i && "object" === e && $(l).css(i))
            }), o
        },
        changeRowid: function(h, g) {
            return this.each(function() {
                var e, t, r, i, a, o, l, n = this,
                    s = $(n),
                    d = n.p;
                if (n.grid && d && h !== g && (i = s.jqGrid("getGridRowById", h)) && null == s.jqGrid("getGridRowById", g)) {
                    var c = jgrid.stripPref(d.idPrefix, h),
                        u = jgrid.stripPref(d.idPrefix, g),
                        p = !1 === d.keyName ? d.prmNames.id : d.keyName,
                        f = function() {
                            var e = this.id,
                                t = e.length - c.length;
                            0 < t && e.substr(t) === c && $(this).attr("id", e.substr(0, t) + u)
                        };
                    for (0 <= d.iColByName[p] && s.jqGrid("setCell", h, p, u), "local" === d.datatype && void 0 !== d._index[c] && (d._index[u] = d._index[c], e = d.data[d._index[c]], delete d._index[c], e.hasOwnProperty(p) && (e[p] = u)), d.rowIndexes[g] = i.rowIndex, delete d.rowIndexes[h], (a = null == n.grid.fbRows ? $(i) : $(i).add(n.grid.fbRows[i.rowIndex])).attr("id", g), d.selrow === h && (d.selrow = g), $.isArray(d.selarrrow) && 0 <= (t = $.inArray(h, d.selarrrow)) && (d.selarrrow[t] = g), d.multiselect && (r = "jqg_" + d.id + "_" + g, a.find("input.cbox").attr("id", r).attr("name", r)), t = 0; t < d.colModel.length; t++) "actions" === (o = d.colModel[t]).formatter ? a.find(".ui-grid-actions .ui-pg-div").each(f) : ("showlink" === o.formatter || null != o.unformat && null != o.formatter) && (l = s.jqGrid("getCell", g, t), s.jqGrid("setCell", g, t, l, !1, !1, !0));
                    feedback.call(n, "afterChangeRowid", {
                        rowid: g,
                        oldRowid: h,
                        iRow: i.rowIndex,
                        tr: i
                    })
                }
            })
        },
        addRowData: function(u, p, f, h) {
            $.inArray(f, ["first", "last", "before", "after", "afterSelected", "beforeSelected"]) < 0 && (f = "last");
            var g, m, v, b, w, y, x, j, C, D, S, q = !1;
            return p && ($.isArray(p) ? (y = !0, x = u) : y = !(p = [p]), this.each(function() {
                var e, t, r = this,
                    i = r.p,
                    a = p.length,
                    o = $(r),
                    l = r.rows,
                    n = 0,
                    s = base.getGridRowById,
                    d = i.colModel,
                    c = i.additionalProperties;
                for (y || (void 0 !== u ? u = String(u) : (u = randId(), !1 !== i.keyName && (x = i.keyName, void 0 !== p[0][x] && (u = p[0][x])))), j = i.altclass; n < a;) {
                    if (C = p[n], m = [], y) try {
                        void 0 === (u = C[x]) && (u = randId())
                    } catch (e) {
                        u = randId()
                    }
                    for (S = jgrid.stripPref(i.idPrefix, u), e = {}, b = 0; b < d.length; b++) D = d[b], "rn" !== (g = D.name) && "cb" !== g && "subgrid" !== g && (w = convertOnSaveLocally.call(r, C[g], D, void 0, S, {}, b), $.isFunction(D.saveLocally) ? D.saveLocally.call(r, {
                        newValue: w,
                        newItem: e,
                        oldItem: {},
                        id: S,
                        rowid: u,
                        cm: D,
                        cmName: g,
                        iCol: b
                    }) : void 0 !== w && (e[g] = w));
                    for (b = 0; b < c.length; b++) "object" == typeof(g = c[b]) && g.hasOwnProperty("name") && (g = g.name), void 0 !== (w = getAccessor(C, g)) && (e[g] = w);
                    if ("local" === i.datatype && (e[i.localReader.id] = S, i._index[S] = i.data.length, i.data.push(e), r.addItemDataToColumnIndex(e, S)), t = i.grouping, i.grouping = !1, m = jgrid.parseDataToHtml.call(r, 1, [u], [C]), i.grouping = t, m = m.join(""), 0 === l.length) $(r.tBodies[0]).append(m);
                    else switch ("afterSelected" !== f && "beforeSelected" !== f || (void 0 === h && null !== i.selrow ? (h = i.selrow, f = "afterSelected" === f ? "after" : "before") : f = "afterSelected" === f ? "last" : "first"), f) {
                        case "last":
                            $(l[l.length - 1]).after(m), v = l.length - 1;
                            break;
                        case "first":
                            $(l[0]).after(m), v = 1;
                            break;
                        case "after":
                            (v = s.call(o, h)) && ($(l[v.rowIndex + 1]).hasClass("ui-subgrid") ? ($(l[v.rowIndex + 1]).after(m), v = v.rowIndex + 2) : ($(v).after(m), v = v.rowIndex + 1));
                            break;
                        case "before":
                            (v = s.call(o, h)) && ($(v).before(m), v = v.rowIndex - 1)
                    }!0 === i.subGrid && base.addSubGrid.call(o, i.iColByName.subgrid, v), i.records++, i.reccount++, 0 === i.lastpage && (i.lastpage = 1), feedback.call(r, "afterAddRow", {
                        rowid: u,
                        inputData: p,
                        position: f,
                        srcRowid: h,
                        iRow: v,
                        tr: l[v],
                        localData: e,
                        iData: i.data.length - 1
                    }), n++
                }!0 !== i.altRows || y || o.jqGrid("isBootstrapGuiStyle") || ("last" === f ? (l.length - 1) % 2 == 0 && $(l[l.length - 1]).addClass(j) : $(l).each(function(e) {
                    e % 2 == 1 ? $(this).addClass(j) : $(this).removeClass(j)
                })), r.rebuildRowIndexes(), r.updatepager(!0, !0), q = !0
            })), q
        },
        footerData: function(c, u, p) {
            var f = !1,
                h = {};
            return null == c && (c = "get"), "boolean" != typeof p && (p = !0), c = c.toLowerCase(), this.each(function() {
                var e, t, r, i, a = this,
                    o = a.p;
                if (!a.grid || !o.footerrow) return !1;
                if ("set" === c && function(e) {
                        var t;
                        for (t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }(u)) return !1;
                f = !0;
                var l = $(a.grid.sDiv).children(".ui-grid-hbox" + ("rtl" === o.direction ? "-rtl" : "")).children(".ui-grid-ftable")[0];
                if (null == l || null == l.rows) return !1;
                var n = l.rows[0].cells,
                    s = o.colModel,
                    d = null == a.grid.fsDiv ? {} : a.grid.fsDiv.children(".ui-grid-ftable")[0].rows[0].cells;
                if ("get" === c)
                    for (i = 0; i < s.length; i++) r = s[i].name, $.inArray(r, o.reservedColumnNames) < 0 && (!1 !== u ? (e = $(n[i]).text(), $.trim(e) && (h[r] = e)) : h[r] = $(n[i]).html());
                else if ("set" === c)
                    for (r in u) i = o.iColByName[r], u.hasOwnProperty(r) && void 0 !== i && (e = p ? a.formatter("", u[r], i, u, "edit") : u[r], (t = $(n[i]).add(d[i])).html(e), s[i].title && t.attr({
                        title: stripHtml(e)
                    }))
            }), "get" === c ? h : f
        },
        resetColumnResizerHeight: function() {
            return this.each(function() {
                if ($.jgrid.msie) {
                    var e, t, r, i, a = this.grid.headers;
                    for (r = 0; r < a.length; r++)(i = (e = $(a[r].el)).height()) && 0 < (t = e.children(".ui-grid-resize")).length && .5 < Math.abs(i - t.height()) && e.children(".ui-grid-resize").height(i)
                }
            })
        },
        rotateColumnHeaders: function(w, y) {
            return this.each(function() {
                var e, t, r, i, a, o, l, n, s, d, c, u, p, f, h, g, m = $(this),
                    v = this.p,
                    b = v.frozenColumns && $.isFunction(base.getNumberOfFrozenColumns) ? m.jqGrid("getNumberOfFrozenColumns") : 0;
                for ($.isArray(w) || (w = [w]), e = 0; e < w.length; e++) o = w[e], 0 <= (t = isNaN(o) ? v.iColByName[o] : parseInt(o, 10)) && (r = this.grid.headers[t].el, i = t < b ? $(r).add($(this.grid.fhDiv.find("#" + jqID(r.id)))) : $(r), l = i.children("div"), n = l.children("span.s-ico"), d = l.children("span.ui-grid-sort-order"), (s = l.children("span." + v.autoResizing.wrapperClassName)).length < 1 && (n.detach(), d.detach(), l.wrapInner(""), s = l.children("span." + v.autoResizing.wrapperClassName), l.each(function(e) {
                    e < n.length && $(this).append(n[e]), e < d.length && $(this).append(d[e])
                })), c = n.outerWidth(!0), u = s.outerWidth(), h = parseFloat(i.css("padding-top") || 0), g = parseFloat(i.css("padding-bottom") || 0), p = parseFloat(i.css("padding-left") || 0), f = parseFloat(i.css("padding-right") || 0), v.showSortOrder && (c += .5 * c), a = void 0 === y || 0 === y ? u + c + p + f : y, i.height(a), i.css({
                    paddingTop: f + "px",
                    paddingBottom: p + "px",
                    paddingLeft: h + "px",
                    paddingRight: g + "px"
                }), l.css("min-width", a - p - f + "px").addClass("ui-grid-rotate").css({
                    bottom: 0
                }), v.colModel[t].rotated = !0);
                m.jqGrid("resetColumnResizerHeight"), v.frozenColumns && setTimeout(function() {
                    m.triggerHandler("jqGridResetFrozenHeights", {
                        header: {
                            resizeDiv: !0,
                            resizedRows: {
                                iRowStart: 0,
                                iRowEnd: -1
                            }
                        },
                        resizeFooter: !0,
                        body: {
                            resizeDiv: !0,
                            resizedRows: {
                                iRowStart: -1,
                                iRowEnd: -1
                            }
                        }
                    })
                }, 0)
            })
        },
        showHideCol: function(u, w, p) {
            return this.each(function() {
                var t, r = this,
                    e = $(r),
                    i = r.grid,
                    a = !1,
                    v = r.p,
                    o = jgrid.cell_width ? 0 : v.cellLayout;
                if (i) {
                    "string" == typeof u && (u = [u]), p = p || {};
                    var b = "" === (w = "none" !== w && !1 !== w ? "" : "none"),
                        l = v.groupHeader,
                        n = l && ("object" == typeof l || $.isFunction(l));
                    if (n && !p.skipSetGroupHeaders && base.destroyGroupHeader.call(e, !1), $(v.colModel).each(function(m) {
                            var e = function(e) {
                                var t, r, i, a, o, l, n, s, d, c, u, p, f, h, g;
                                for (t = 0, r = e.length; t < r; t++) a = (i = e[t]).cells[m], (!$(i).hasClass("jqgroup") || null != a && 1 === a.colSpan) && (o = $(a), 0 === t && $(i).hasClass("jqgfirstrow") ? (o.css("height", "1px"), o.css("display", w), o.css("height", "0")) : o.css("display", w), b && null != a && "TH" === a.tagName.toUpperCase() && o.hasClass("ui-th-column") && (l = o.children("div")).hasClass("ui-grid-rotate") && (n = l.children("span.s-ico"), (s = l.children("span." + v.autoResizing.wrapperClassName)).outerHeight(), d = s.outerWidth(), n.outerHeight(), c = n.outerWidth(!0), 0 < s.length && (p = parseFloat(o.css("padding-top") || 0), f = parseFloat(o.css("padding-bottom") || 0), h = parseFloat(o.css("padding-left") || 0), g = parseFloat(o.css("padding-right") || 0), v.showSortOrder && (c += .5 * c), u = d + c + h + g, o.height(u), o.css({
                                    paddingTop: g + "px",
                                    paddingBottom: h + "px",
                                    paddingLeft: p + "px",
                                    paddingRight: f + "px"
                                }), l.css("min-width", u - h - g + "px").css({
                                    bottom: 0
                                }))))
                            };
                            if (-1 !== $.inArray(this.name, u) && this.hidden === b) {
                                if (!0 === v.frozenColumns && !0 === this.frozen && !p.notSkipFrozen) return !0;
                                e($(i.hDiv).find(".ui-grid-htable>thead>tr")), !0 === v.frozenColumns && null != i.fhDiv && e($(i.fhDiv).find(".ui-grid-htable>thead>tr")), e(r.rows), !0 === v.frozenColumns && null != i.fbRows && e(r.rows), v.footerrow && (e($(i.sDiv).find("tr.footrow")), !0 === v.frozenColumns && null != i.fsDiv && e($(i.fsDiv).find("tr.footrow"))), t = parseInt(this.width, 10), "none" === w ? v.tblwidth -= t + o : v.tblwidth += t + o, this.hidden = !b, a = !0, p.skipFeedback ? (p.toReport = p.toReport || {}, p.toReport[this.name] = b) : feedback.call(r, "onShowHideCol", b, this.name, m, p)
                            }
                        }), !0 === a) {
                        var s = v.autowidth || void 0 !== v.widthOrg && "auto" !== v.widthOrg && "100%" !== v.widthOrg ? v.width : v.tblwidth + parseInt(v.scrollOffset, 10);
                        p.skipSetGridWidth ? p.newGridWidth = s : base.setGridWidth.call(e, s)
                    }
                    if (n && !p.skipSetGroupHeaders)
                        if (null != v.pivotOptions && null != v.pivotOptions.colHeaders && 1 < v.pivotOptions.colHeaders.length) {
                            var d, c = v.pivotOptions.colHeaders;
                            for (d = 0; d < c.length; d++) c[d] && c[d].groupHeaders.length && base.setGroupHeaders.call(e, c[d])
                        } else base.setGroupHeaders.call(e, v.groupHeader)
                }
            })
        },
        hideCol: function(e, t) {
            return this.each(function() {
                base.showHideCol.call($(this), e, "none", t)
            })
        },
        showCol: function(e, t) {
            return this.each(function() {
                base.showHideCol.call($(this), e, "", t)
            })
        },
        remapColumns: function(a, e, t) {
            var r, i, o, l, n = this[0],
                s = n.p,
                d = n.grid,
                c = $.makeArray,
                u = !0 === s.frozenColumns,
                p = this.jqGrid("getNumberOfFrozenColumns");

            function f(t) {
                var r = t.length ? c(t) : $.extend({}, t);
                $.each(l, function(e) {
                    t[e] = r[this]
                })
            }

            function h(e, t) {
                (t ? e.children(t) : e.children()).each(function() {
                    var i = this,
                        a = c(i.cells);
                    $.each(l, function(e) {
                        var t = a[this],
                            r = i.cells[e];
                        null != t && null != r && t.cellIndex !== e && t.parentNode.insertBefore(t, r)
                    })
                })
            }
            if (null != d && null != s) {
                for (l = function() {
                        var e, t = [],
                            r = [],
                            i = a.length;
                        for (e = 0; e < i; e++) u && a[e] < p ? t.push(a[e]) : r.push(a[e]);
                        return t.concat(r)
                    }(), f(s.colModel), f(s.colNames), f(d.headers), o = $(d.hDiv).children("div").children("table.ui-grid-htable").children("thead"), u && null != d.fhDiv && (o = o.add(d.fhDiv.children("table.ui-grid-htable").children("thead"))), h(o, t && ":not(.ui-grid-labels)"), e && (o = $(n.tBodies[0]), u && null != d.fbDiv && (o = o.add(d.fbDiv.children("table.ui-grid-btable").children("tbody").first())), h(o, "tr.jqgfirstrow,tr.jqgrow,tr.jqfoot")), s.footerrow && (o = $(d.sDiv).children("div").children("table.ui-grid-ftable").children("tbody").first(), u && null != d.fsDiv && (o = o.add(d.fsDiv.children("table.ui-grid-ftable").children("tbody").first())), h(o)), s.remapColumns && (s.remapColumns.length ? f(s.remapColumns) : s.remapColumns = c(l)), s.lastsort = $.inArray(s.lastsort, l), s.iColByName = {}, r = 0, i = s.colModel.length; r < i; r++) s.iColByName[s.colModel[r].name] = r;
                feedback.call(n, "onRemapColumns", l, e, t)
            }
        },
        remapColumnsByName: function(e, t, r) {
            var i, a, o = this[0].p,
                l = [],
                n = e.slice(),
                s = $.inArray;
            for (o.subGrid && s("subgrid", n) < 0 && n.unshift("subgrid"), o.multiselect && s("cb", n) < 0 && n.unshift("cb"), o.rownumbers && s("rn", n) < 0 && n.unshift("rn"), i = 0, a = n.length; i < a; i++) l.push(o.iColByName[n[i]]);
            return base.remapColumns.call(this, l, t, r), this
        },
        setGridWidth: function(_, I) {
            return this.each(function() {
                var t, r, e, i, a = this,
                    o = a.p,
                    l = a.grid,
                    n = 0,
                    s = 0,
                    d = !1,
                    c = 0,
                    u = jgrid.isCellClassHidden,
                    p = _;
                if (l && null != o) {
                    a.fixScrollOffsetAndhBoxPadding();
                    var f, h, g, m, v = o.colModel,
                        b = o.scrollOffset,
                        w = jgrid.cell_width ? 0 : o.cellLayout,
                        y = l.headers,
                        x = l.footers,
                        j = l.bDiv,
                        C = l.hDiv,
                        D = l.sDiv,
                        S = l.cols,
                        q = $(C).find(">div>.ui-grid-htable>thead>tr").first()[0].cells,
                        F = function(e) {
                            l.width = o.width = e, $(o.gBox).css("width", e + "px"), $(o.gView).css("width", e + "px"), $(j).css("width", e + "px"), $(C).css("width", e + "px"), o.pager && $(o.pager).css("width", e + "px"), o.toppager && $(o.toppager).css("width", e + "px"), !0 === o.toolbar[0] && ($(l.uDiv).css("width", e + "px"), "both" === o.toolbar[1] && $(l.ubDiv).css("width", e + "px")), o.footerrow && $(D).css("width", e + "px")
                        };
                    if ("boolean" != typeof I && (I = o.shrinkToFit), !isNaN(p)) {
                        if (F(p = parseInt(p, 10)), !1 === I && !0 === o.forceFit && (o.forceFit = !1), !0 === I) {
                            if ($.each(v, function() {
                                    !1 !== this.hidden || u(this.classes) || (t = this.widthOrg, n += t + w, this.fixed ? c += this.width + w : s++)
                                }), 0 === s) return;
                            if (o.tblwidth = parseInt(n, 10), e = p - w * s - c, isNaN(o.height) || (j.clientHeight < j.scrollHeight || 1 === a.rows.length) && (d = !0, e -= b), (m = e / (o.tblwidth - w * s - c)) < 0) return;
                            if (g = (n = 0) < S.length, $.each(v, function(e) {
                                    !1 !== this.hidden || u(this.classes) || this.fixed || (t = Math.round(this.widthOrg * m), this.width = t, n += t, y[e].width = t, q[e].style.width = t + "px", o.footerrow && (x[e].style.width = t + "px"), g && (S[e].style.width = t + "px"), r = e)
                                }), !r) return;
                            i = 0, d ? p - c - (n + w * s) !== b && (i = p - c - (n + w * s) - b) : 1 !== Math.abs(p - c - (n + w * s)) && (i = p - c - (n + w * s)), (f = v[r]).width += i, o.tblwidth = parseInt(n + i + w * s + c, 10), o.tblwidth > p && (h = o.tblwidth - parseInt(p, 10), o.tblwidth = p, f.width = f.width - h), t = f.width, y[r].width = t, q[r].style.width = t + "px", g && (S[r].style.width = t + "px"), o.footerrow && (x[r].style.width = t + "px"), o.tblwidth + (d ? b : 0) < o.width && F(o.tblwidth + (d ? b : 0)), j.offsetWidth > j.clientWidth && (o.autowidth || void 0 !== o.widthOrg && "auto" !== o.widthOrg && "100%" !== o.widthOrg || F(j.offsetWidth))
                        }
                        o.tblwidth && (o.tblwidth = parseInt(o.tblwidth, 10), p = o.tblwidth, C.scrollLeft = j.scrollLeft, h = Math.abs(p - o.width), o.shrinkToFit && !I && h < 3 && 0 < h && (p < o.width && F(p), j.offsetWidth > j.clientWidth && (o.autowidth || void 0 !== o.widthOrg && "auto" !== o.widthOrg && "100%" !== o.widthOrg || F(j.offsetWidth)))), a.fixScrollOffsetAndhBoxPadding();
                        var R = {
                            resizeDiv: !0,
                            resizedRows: {
                                iRowStart: I ? 0 : -1,
                                iRowEnd: -1
                            }
                        };
                        $(a).triggerHandler("jqGridResetFrozenHeights", [{
                            header: R,
                            resizeFooter: !0,
                            body: R
                        }])
                    }
                }
            })
        },
        setGridHeight: function(a) {
            return this.each(function() {
                var e = this,
                    t = e.grid,
                    r = e.p;
                if (t) {
                    var i = $(t.bDiv);
                    i.css({
                        height: a + (isNaN(a) ? "" : "px")
                    }), !0 === r.frozenColumns && $(r.idSel + "_frozen").parent().height(i.height() - 16), r.height = a, r.scroll && t.populateVisible.call(e), e.fixScrollOffsetAndhBoxPadding(), $(e).triggerHandler("jqGridResetFrozenHeights")
                }
            })
        },
        setCaption: function(t) {
            return this.each(function() {
                var e = this.grid.cDiv;
                this.p.caption = t, $("span.ui-grid-title, span.ui-grid-title-rtl", e).html(t), $(e).show(), $(e).nextAll("div").removeClass(base.getGuiStyles.call(this, "top")), $(this).triggerHandler("jqGridResetFrozenHeights")
            })
        },
        setLabel: function(r, a, o, l) {
            return this.each(function() {
                var e, t, i = this.p;
                if (this.grid) {
                    if (isNaN(r)) {
                        if (void 0 === (e = i.iColByName[r])) return
                    } else e = parseInt(r, 10);
                    0 <= e && (t = $(this.grid.headers[e].el), i.frozenColumns && (t = t.add(this.grid.fhDiv.find("#" + jqID(t)))), a && (t.each(function() {
                        var e = $("[id^=jqgh_]", this),
                            t = e.children("span.ui-grid-cell-wrapper");
                        if (0 < t.length) t.html(a);
                        else {
                            var r = $(".s-ico", this);
                            e.empty().html(a)[i.sortIconsBeforeText ? "prepend" : "append"](r)
                        }
                    }), i.colNames[e] = a), o && ("string" == typeof o ? t.addClass(o) : t.css(o)), "object" == typeof l && t.attr(l))
                }
            })
        },
        setCell: function(m, v, b, w, y, x) {
            return this.each(function() {
                var e, t, r, i, a, o, l, n, s, d, c, u = this,
                    p = u.p,
                    f = p.colModel,
                    h = {};
                if (u.grid && 0 <= (e = isNaN(v) ? p.iColByName[v] : parseInt(v, 10)) && (o = base.getGridRowById.call($(u), m))) {
                    if (l = jgrid.getCell.call(u, o, e), "" !== b || !0 === x) {
                        if (i = f[e], "local" === p.datatype && (d = stripPref(p.idPrefix, m), void 0 !== (c = p._index[d]) && (a = p.data[c])), null == a) {
                            for (r = 0; r < o.cells.length; r++)
                                if (r !== e && 0 < (n = jgrid.getDataFieldOfCell.call(u, o, r)).length) {
                                    try {
                                        s = $.unformat.call(u, n, {
                                            rowId: m,
                                            colModel: f[r]
                                        }, r)
                                    } catch (e) {
                                        s = htmlDecode(n[0].innerHTML)
                                    }
                                    h[f[r].name] = s
                                }
                        } else h = a;
                        h[i.name] = b, t = u.formatter(m, b, e, h, "edit");
                        var g = l;
                        !0 === p.treeGrid && i.name === p.ExpandColumn && (g = g.children("span.cell-wrapperleaf,span.cell-wrapper").first()), g.html(t), i.title && l.attr({
                            title: b
                        }), null != a && (t = convertOnSaveLocally.call(u, b, i, a[i.name], d, a, e), $.isFunction(i.saveLocally) ? i.saveLocally.call(u, {
                            newValue: t,
                            newItem: a,
                            oldItem: a,
                            id: d,
                            cm: i,
                            cmName: i.name,
                            iCol: e
                        }) : a[i.name] = t)
                    }(w || y) && (l = jgrid.getCell.call(u, o, e), w && l["string" == typeof w ? "addClass" : "css"](w), "object" == typeof y && l.attr(y))
                }
            })
        },
        getCell: function(l, n) {
            var s = !1;
            return this.each(function() {
                var e, t, r, i, a = this,
                    o = a.p;
                if (a.grid && 0 <= (e = isNaN(n) ? o.iColByName[n] : parseInt(n, 10)) && (t = base.getGridRowById.call($(a), l))) {
                    r = jgrid.getDataFieldOfCell.call(a, t, e).first(), i = o.colModel[e];
                    try {
                        s = base.isCellEditing.call($(a), l, e, t) ? jgrid.getEditedValue.call(a, r, i, {}, i.editable) : $.unformat.call(a, r, {
                            rowId: t.id,
                            colModel: i
                        }, e)
                    } catch (e) {
                        s = htmlDecode(r.html())
                    }
                }
            }), s
        },
        getCol: function(u, p, f) {
            var h, g, m, v, b = [],
                w = 0;
            return p = "boolean" == typeof p && p, void 0 === f && (f = !1), this.each(function() {
                var e, t, r = this,
                    i = r.p;
                if (r.grid && 0 <= (e = isNaN(u) ? i.iColByName[u] : parseInt(u, 10))) {
                    var a, o, l = r.rows,
                        n = l.length,
                        s = 0,
                        d = 0,
                        c = i.colModel[e];
                    if (n && 0 < n) {
                        for (; s < n;) {
                            if (a = l[s], $(a).hasClass("jqgrow")) {
                                t = jgrid.getDataFieldOfCell.call(r, a, e).first(), o = a.id;
                                try {
                                    h = base.isCellEditing.call($(r), o, e, a) ? jgrid.getEditedValue.call(r, t, c, {}, c.editable) : $.unformat.call(r, t, {
                                        rowId: o,
                                        colModel: c
                                    }, e)
                                } catch (e) {
                                    h = htmlDecode(t.html())
                                }
                                f ? (v = parseFloat(h), isNaN(v) || (w += v, void 0 === m && (m = g = v), g = Math.min(g, v), m = Math.max(m, v), d++)) : p ? b.push({
                                    id: o,
                                    value: h
                                }) : b.push(h)
                            }
                            s++
                        }
                        if (f) switch (f.toLowerCase()) {
                            case "sum":
                                b = w;
                                break;
                            case "avg":
                                b = w / d;
                                break;
                            case "count":
                                b = n - 1;
                                break;
                            case "min":
                                b = g;
                                break;
                            case "max":
                                b = m
                        }
                    }
                }
            }), b
        },
        clearGridData: function(a) {
            return this.each(function() {
                var e = this,
                    t = e.p,
                    r = e.rows,
                    i = e.grid;
                i && t && r && ("boolean" != typeof a && (a = !1), $(e).off(".jqGridFormatter"), i.emptyRows.call(e, !1, !0), t.footerrow && a && $(".ui-grid-ftable td", i.sDiv).html(" "), t.selrow = null, clearArray(t.selarrrow), clearArray(t.savedRow), t.editingInfo = {}, clearArray(t.data), clearArray(t.lastSelectedData), t._index = {}, t.rowIndexes = {}, t.dataIndexById = {}, t.indexByColumnData = {}, t.records = 0, t.page = 1, t.lastpage = 0, t.reccount = 0, e.updatepager(!0, !1))
            })
        },
        getInd: function(e, t) {
            var r = base.getGridRowById.call($(this), e);
            return !!r && (!0 === t ? r : r.rowIndex)
        },
        bindKeys: function(e) {
            var d = $.extend({
                onEnter: null,
                onSpace: null,
                onLeftKey: null,
                onRightKey: null,
                scrollingRows: !0
            }, e || {});
            return this.each(function() {
                var l = this,
                    n = l.p,
                    s = $(l);
                n.scrollrows = d.scrollingRows, s.on("keydown.jqGrid", function(t) {
                    var r = $(this).find("tr[tabindex=0]")[0],
                        e = jgrid.detectRowEditing.call(l, $(t.target).closest("tr.jqgrow").attr("id")),
                        i = function(e) {
                            do {
                                if (null === (r = r[e])) return
                            } while ($(r).is(":hidden") || !$(r).hasClass("jqgrow"));
                            base.setSelection.call(s, r.id, !0), t.preventDefault()
                        },
                        a = function(e, t) {
                            var r = d["on" + e + (t || "")];
                            s.triggerHandler("jqGridKey" + e, [n.selrow]), $.isFunction(r) && r.call(l, n.selrow)
                        },
                        o = function(e) {
                            if (n.treeGrid) {
                                var t = n.data[n._index[stripPref(n.idPrefix, r.id)]][n.treeReader.expanded_field];
                                "Right" === e && (t = !t), t && $(r).find("div.treeclick").trigger("click")
                            }
                            a(e, "Key")
                        };
                    if (r && null === e) switch (t.keyCode) {
                        case 38:
                            i("previousSibling");
                            break;
                        case 40:
                            i("nextSibling");
                            break;
                        case 37:
                            o("Left");
                            break;
                        case 39:
                            o("Right");
                            break;
                        case 13:
                            a("Enter");
                            break;
                        case 32:
                            a("Space")
                    }
                })
            })
        },
        unbindKeys: function() {
            return this.each(function() {
                $(this).off("keydown.jqGrid")
            })
        },
        getLocalRow: function(t) {
            var r, i = !1;
            return this.each(function() {
                var e = this.p;
                void 0 !== t && null != e && null != e._index && null != e.data && 0 <= (r = e._index[stripPref(e.idPrefix, t)]) && (i = e.data[r])
            }), i
        },
        progressBar: function(i) {
            return i = $.extend({
                htmlcontent: "",
                method: "hide",
                loadtype: "disable"
            }, i || {}), this.each(function() {
                var e = "show" === i.method,
                    t = jqID(this.p.id),
                    r = $("#load_" + t);
                switch ("" !== i.htmlcontent && r.html(i.htmlcontent), i.loadtype) {
                    case "disable":
                        break;
                    case "enable":
                        r.toggle(e);
                        break;
                    case "block":
                        $("#lui_" + t).toggle(e), r.toggle(e)
                }
            })
        },
        setColWidth: function(a, o, l, n) {
            return this.each(function() {
                var e, t = $(this),
                    r = this.grid,
                    i = this.p;
                if ("string" == typeof a) {
                    if (void 0 === (a = i.iColByName[a])) return
                } else if ("number" != typeof a) return;
                null != (e = r.headers[a]) && (e.newWidth = o, r.newWidth = i.tblwidth + o - e.width, r.resizeColumn(a, !i.frozenColumns, n), !1 === l || n || (this.fixScrollOffsetAndhBoxPadding(), base.setGridWidth.call(t, r.newWidth + i.scrollOffset, !1)))
            })
        },
        getAutoResizableWidth: function(e) {
            var t = this;
            if (0 === t.length) return -1;
            var r, i, a, o, l, n = (t = t[0]).rows,
                s = t.p,
                d = s.colModel[e],
                c = $(t.grid.headers[e].el),
                u = c.children("div"),
                p = parseFloat(c.css(d.rotated ? "padding-top" : "padding-left") || 0),
                f = parseFloat(c.css(d.rotated ? "padding-bottom" : "padding-right") || 0),
                h = u.children("span.s-ico"),
                g = u.children(".ui-grid-sort-order"),
                m = u.children("." + s.autoResizing.wrapperClassName),
                v = d.rotated ? m.outerHeight() : m.outerWidth(),
                b = parseFloat(m.css(d.rotated ? "height" : "width") || 0),
                w = 0,
                y = 0,
                x = null != d.autoResizing && void 0 !== d.autoResizable.compact ? d.autoResizable.compact : s.autoResizing.compact,
                j = s.autoResizing.wrapperClassName;
            if (null == d || !d.autoResizable || 0 === m.length || d.hidden || jgrid.isCellClassHidden(d.classes) || d.fixed) return -1;
            for (x && !h.is(":visible") && "none" === h.css("display") || (y = d.rotated ? h.outerHeight(!0) : h.outerWidth(!0) + (0 < g.length ? g.outerWidth(!0) : 0), s.sortIconsBeforeText || (y -= "rtl" === s.direction ? parseFloat(h.css("padding-left") || 0) + parseFloat(h.css("margin-left") || 0) : parseFloat(h.css("padding-right") || 0) + parseFloat(h.css("margin-right") || 0))), d.rotated ? y = Math.max(y, v + p + f) : y += v + p + (b === v ? p + f : 0) + parseFloat(u.css("margin-left") || 0) + parseFloat(u.css("margin-right") || 0), a = 0, n = t.rows; a < n.length; a++) i = (r = n[a]).cells[e], o = $(r.cells[e]), null != i && ($(r).hasClass("jqgrow") && "none" !== r.style.display && "none" !== i.style.display || $(r).hasClass("jqgroup") && 1 === i.colSpan) ? (l = $(i.firstChild)).hasClass(j) ? y = Math.max(y, l.outerWidth() + w) : s.treeGrid && s.ExpandColumn === d.name && (l = o.children(".cell-wrapper,.cell-wrapperleaf"), y = Math.max(y, l.outerWidth() + w + o.children(".tree-wrap").outerWidth())) : $(r).hasClass("jqgfirstrow") && (w = (jgrid.cell_width ? parseFloat(o.css("padding-left") || 0) + parseFloat(o.css("padding-right") || 0) : 0) + parseFloat(o.css("border-right") || 0) + parseFloat(o.css("border-left") || 0));
            return y = Math.max(y, null != d.autoResizing && void 0 !== d.autoResizing.minColWidth ? d.autoResizing.minColWidth : s.autoResizing.minColWidth), Math.min(y, null != d.autoResizing && void 0 !== d.autoResizing.maxColWidth ? d.autoResizing.maxColWidth : s.autoResizing.maxColWidth)
        },
        autoResizeColumn: function(n, s) {
            return this.each(function() {
                var e, t = $(this),
                    r = this.p,
                    i = r.colModel[n],
                    a = $(this.grid.headers[n].el),
                    o = base.getAutoResizableWidth.call(t, n),
                    l = (i.autoResizing || {}).resetWidthOrg;
                null == i || o < 0 || o === i.width || (base.setColWidth.call(t, n, o, r.autoResizing.adjustGridWidth && !r.autoResizing.fixWidthOnShrink && !s, s), r.autoResizing.fixWidthOnShrink && r.shrinkToFit && !s && (i.fixed = !0, e = i.widthOrg, i.widthOrg = i.width, base.setGridWidth.call(t, r.width, !0), i.widthOrg = e, i.fixed = !1), (l || void 0 === l && r.autoResizing.resetWidthOrg) && (i.widthOrg = i.width), a.data("autoResized", "true"))
            })
        },
        autoResizeAllColumns: function() {
            return this.each(function() {
                var e, t, r = $(this),
                    i = this.p,
                    a = i.colModel,
                    o = a.length,
                    l = i.shrinkToFit,
                    n = i.autoResizing.adjustGridWidth,
                    s = i.autoResizing.fixWidthOnShrink,
                    d = parseInt(i.widthOrg, 10),
                    c = this.grid,
                    u = base.autoResizeColumn;
                for (i.shrinkToFit = !1, i.autoResizing.adjustGridWidth = !0, i.autoResizing.fixWidthOnShrink = !1, e = 0; e < o; e++)(t = a[e]).autoResizable && "actions" !== t.formatter && u.call(r, e, !0);
                c.hDiv.scrollLeft = c.bDiv.scrollLeft, i.footerrow && (c.sDiv.scrollLeft = c.bDiv.scrollLeft), this.fixScrollOffsetAndhBoxPadding(), isNaN(d) ? n && base.setGridWidth.call(r, c.newWidth + i.scrollOffset, !1) : base.setGridWidth.call(r, d, !1), i.autoResizing.fixWidthOnShrink = s, i.autoResizing.adjustGridWidth = n, i.shrinkToFit = l
            })
        }
    });
    var getTdByColumnIndex = function(e, t) {
            var r = this.grid.fbRows;
            return null != (e = null != r && r[0].cells.length > t ? r[e.rowIndex] : e) && null != e.cells ? $(e.cells[t]) : $()
        },
        safeHeightSet = function(e, t) {
            var r = e.height();
            1 <= Math.abs(r - t) && 0 < t && (e.height(t), r = e.height(), 1 <= Math.abs(t - r) && e.height(t + Math.round(t - r)))
        };
    jgrid.extend({
        editCell: function(D, S, q) {
            return this.each(function() {
                var e, t, r, i, a = this,
                    o = $(a),
                    l = a.p,
                    n = a.rows;
                if (a.grid && !0 === l.cellEdit && null != n && null != n[D] && (D = parseInt(D, 10), S = parseInt(S, 10), !isNaN(D) && !isNaN(S))) {
                    var s, d = n[D],
                        c = null != d ? d.id : null,
                        u = $(d),
                        p = parseInt(l.iCol, 10),
                        f = parseInt(l.iRow, 10),
                        h = $(n[f]),
                        g = l.savedRow;
                    if (null != c) {
                        if (l.selrow = c, l.knv || o.jqGrid("GridNav"), 0 < g.length && 0 < h.length) {
                            if (!0 === q && D === f && S === p) return;
                            o.jqGrid("saveCell", g[0].id, g[0].ic)
                        } else setTimeout(function() {
                            $("#" + jgrid.jqID(l.knv)).attr("tabindex", "-1").focus()
                        }, 1);
                        if ("subgrid" !== (e = (i = l.colModel[S]).name) && "cb" !== e && "rn" !== e) {
                            r = getTdByColumnIndex.call(a, d, S);
                            var m = i.editable;
                            $.isFunction(m) && (m = m.call(a, {
                                rowid: c,
                                iCol: S,
                                iRow: D,
                                cmName: e,
                                cm: i,
                                mode: "cell"
                            }));
                            var v = o.jqGrid("getGuiStyles", "states.select", "edit-cell"),
                                b = o.jqGrid("getGuiStyles", "states.hover", "selected-row");
                            if (!0 !== m || !0 !== q || r.hasClass("not-editable-cell")) l.noCellSelection || (0 <= p && 0 <= f && (getTdByColumnIndex.call(a, h[0], p).removeClass(v), h.removeClass(b)), r.addClass(v), u.addClass(b)), t = r.html().replace(/ /gi, ""), feedback.call(a, "onSelectCell", c, e, t, D, S);
                            else {
                                l.noCellSelection || (0 <= p && 0 <= f && (getTdByColumnIndex.call(a, h[0], p).removeClass(v), h.removeClass(b)), r.addClass(v), u.addClass(b)), i.edittype || (i.edittype = "text"), s = i.edittype;
                                try {
                                    t = $.unformat.call(a, r, {
                                        rowId: c,
                                        colModel: i
                                    }, S)
                                } catch (e) {
                                    t = "textarea" === s ? r.text() : r.html()
                                }
                                if (l.autoEncodeOnEdit && (t = jgrid.oldDecodePostedData(t)), (" " === t || " " === t || 1 === t.length && 160 === t.charCodeAt(0)) && (t = ""), $.isFunction(l.formatCell)) {
                                    var w = l.formatCell.call(a, c, e, t, D, S);
                                    void 0 !== w && (t = w)
                                }
                                feedback.call(a, "beforeEditCell", c, e, t, D, S), g.push({
                                    id: D,
                                    ic: S,
                                    name: e,
                                    v: t
                                }), l.editingInfo[c] = {
                                    mode: "cellEditing",
                                    savedRow: g[g.length - 1],
                                    editable: {}
                                }, l.editingInfo[c].editable[e] = m;
                                var y = $.extend({}, i.editoptions || {}, {
                                        id: D + "_" + e,
                                        name: e,
                                        rowId: c,
                                        mode: "cell",
                                        cm: i,
                                        iCol: S
                                    }),
                                    x = jgrid.createEl.call(a, s, y, t, !0, $.extend({}, jgrid.ajaxOptions, l.ajaxSelectOptions || {})),
                                    j = r,
                                    C = !0 === l.treeGrid && e === l.ExpandColumn;
                                C && (j = r.children("span.cell-wrapperleaf,span.cell-wrapper")), j.html("").append(x).attr("tabindex", "0"), C && $(x).width(r.width() - r.children("div.tree-wrap").outerWidth()), jgrid.bindEv.call(a, x, y), l.frozenColumns && S < o.jqGrid("getNumberOfFrozenColumns") && safeHeightSet($(a.rows[d.rowIndex].cells[S]), r.height()), setTimeout(function() {
                                    $(x).focus()
                                }, 0), $("input, select, textarea", r).on("keydown", function(e) {
                                    if (27 === e.keyCode && (0 < $("input.hasDatepicker", r).length ? $(".ui-datepicker").is(":hidden") ? o.jqGrid("restoreCell", D, S) : $("input.hasDatepicker", r).datepicker("hide") : o.jqGrid("restoreCell", D, S)), 13 === e.keyCode && !e.shiftKey) return o.jqGrid("saveCell", D, S), !1;
                                    if (9 === e.keyCode) {
                                        if (a.grid.hDiv.loading) return !1;
                                        e.shiftKey ? o.jqGrid("prevCell", D, S) : o.jqGrid("nextCell", D, S)
                                    }
                                    e.stopPropagation()
                                }), feedback.call(a, "afterEditCell", c, e, t, D, S)
                            }
                            l.iCol = S, l.iRow = D
                        }
                    }
                }
            })
        },
        saveCell: function(F, R) {
            return this.each(function() {
                var i = this,
                    a = $(i),
                    o = i.p,
                    r = i.grid,
                    l = jgrid.info_dialog,
                    e = jgrid.jqID;
                if (r && !0 === o.cellEdit) {
                    var t = a.jqGrid("getGridRes", "errors"),
                        n = t.errcap,
                        s = a.jqGrid("getGridRes", "edit").bClose,
                        d = o.savedRow,
                        c = 1 <= d.length ? 0 : null;
                    if (null !== c) {
                        var u, p = i.rows[F],
                            f = null != p ? p.id : null,
                            h = null != p ? $(p) : $(),
                            g = o.colModel[R],
                            m = g.name,
                            v = getTdByColumnIndex.call(i, p, R),
                            b = {},
                            w = jgrid.getEditedValue.call(i, v, g, b);
                        if (w !== d[c].v) {
                            void 0 !== (u = a.triggerHandler("jqGridBeforeSaveCell", [f, m, w, F, R])) && (w = u), $.isFunction(o.beforeSaveCell) && void 0 !== (u = o.beforeSaveCell.call(i, f, m, w, F, R)) && (w = u);
                            var y = jgrid.checkValues.call(i, w, R, void 0, void 0, {
                                    oldValue: d[c].v,
                                    newValue: w,
                                    cmName: m,
                                    rowid: f,
                                    iCol: R,
                                    iRow: F,
                                    cm: g,
                                    tr: p,
                                    td: v,
                                    mode: "cell"
                                }),
                                x = g.formatoptions || {};
                            if (null == y || !0 === y || !0 === y[0]) {
                                var j = a.triggerHandler("jqGridBeforeSubmitCell", [f, m, w, F, R]) || {};
                                if ($.isFunction(o.beforeSubmitCell) && ((j = o.beforeSubmitCell.call(i, f, m, w, F, R)) || (j = {})), 0 < $("input.hasDatepicker", v).length && $("input.hasDatepicker", v).datepicker("hide"), "date" === g.formatter && !0 !== x.sendFormatted && (w = $.unformat.date.call(i, w, g)), "remote" === o.cellsubmit)
                                    if (o.cellurl) {
                                        var C = {};
                                        C[m] = w;
                                        var D = o.prmNames,
                                            S = D.id,
                                            q = D.oper;
                                        C[S] = jgrid.stripPref(o.idPrefix, f), C[q] = D.editoper, C = $.extend(j, C), o.autoEncodeOnEdit && $.each(C, function(e, t) {
                                            $.isFunction(t) || (C[e] = jgrid.oldEncodePostedData(t))
                                        }), a.jqGrid("progressBar", {
                                            method: "show",
                                            loadtype: o.loadui,
                                            htmlcontent: a.jqGrid("getGridRes", "defaults.savetext") || "Saving..."
                                        }), r.hDiv.loading = !0, $.ajax($.extend({
                                            url: $.isFunction(o.cellurl) ? o.cellurl.call(i, o.cellurl, F, R, f, w, m) : o.cellurl,
                                            data: jgrid.serializeFeedback.call(i, o.serializeCellData, "jqGridSerializeCellData", C),
                                            type: "POST",
                                            complete: function(e) {
                                                if (r.endReq.call(i), (e.status < 300 || 304 === e.status) && (0 !== e.status || 4 !== e.readyState)) {
                                                    var t = a.triggerHandler("jqGridAfterSubmitCell", [i, e, C.id, m, w, F, R]) || [!0, ""];
                                                    (!0 === t || !0 === t[0] && $.isFunction(o.afterSubmitCell)) && (t = o.afterSubmitCell.call(i, e, C.id, m, w, F, R)), null == t || !0 === t || !0 === t[0] ? (a.jqGrid("setCell", f, R, w, !1, !1, !0), v.addClass("dirty-cell"), h.addClass("edited"), feedback.call(i, "afterSaveCell", f, m, w, F, R), d.splice(0, 1), delete o.editingInfo[f]) : (l.call(i, n, t[1], s), a.jqGrid("restoreCell", F, R))
                                                }
                                            },
                                            error: function(e, t, r) {
                                                a.triggerHandler("jqGridErrorCell", [e, t, r]), $.isFunction(o.errorCell) ? o.errorCell.call(i, e, t, r) : l.call(i, n, e.status + " : " + e.statusText + "
" + t, s), a.jqGrid("restoreCell", F, R)
                                            }
                                        }, jgrid.ajaxOptions, o.ajaxCellOptions || {}))
                                    } else try {
                                        l.call(i, n, t.nourl, s), a.jqGrid("restoreCell", F, R)
                                    } catch (e) {}
                                if ("clientArray" === o.cellsubmit) {
                                    if (a.jqGrid("setCell", f, R, "select" === g.edittype && "select" !== g.formatter ? b.text : w, !1, !1, !0), v.addClass("dirty-cell"), h.addClass("edited"), feedback.call(i, "afterSaveCell", f, m, w, F, R), o.frozenColumns && R < a.jqGrid("getNumberOfFrozenColumns")) try {
                                        i.rows[p.rowIndex].cells[R].style.height = ""
                                    } catch (e) {}
                                    d.splice(0, 1), delete o.editingInfo[f]
                                }
                            } else try {
                                setTimeout(function() {
                                    var e = jgrid.getRelativeRect.call(i, v);
                                    l.call(i, n, w + " " + y[1], s, {
                                        top: e.top,
                                        left: e.left + $(i).closest(".ui-grid").offset().left
                                    })
                                }, 50), a.jqGrid("restoreCell", F, R)
                            } catch (e) {}
                        } else a.jqGrid("restoreCell", F, R)
                    }
                    setTimeout(function() {
                        $("#" + e(o.knv)).attr("tabindex", "-1").focus()
                    }, 0)
                }
            })
        },
        restoreCell: function(d, c) {
            return this.each(function() {
                var e, t, r, i = this,
                    a = i.p,
                    o = i.rows[d],
                    l = o.id;
                if (i.grid && !0 === a.cellEdit) {
                    var n = a.savedRow,
                        s = getTdByColumnIndex.call(i, o, c);
                    if (1 <= n.length) {
                        if ($.isFunction($.fn.datepicker)) try {
                            $("input.hasDatepicker", s).datepicker("hide")
                        } catch (e) {}
                        if (t = a.colModel[c], !0 === a.treeGrid && null != t && t.name === a.ExpandColumn ? s.children("span.cell-wrapperleaf,span.cell-wrapper").empty() : s.empty(), s.attr("tabindex", "-1"), e = n[0].v, null != t && (r = t.formatoptions || {}, "date" === t.formatter && !0 !== r.sendFormatted && (e = $.unformat.date.call(i, e, t)), $(i).jqGrid("setCell", l, c, e, !1, !1, !0), a.frozenColumns && c < $(i).jqGrid("getNumberOfFrozenColumns"))) try {
                            i.rows[o.rowIndex].cells[c].style.height = ""
                        } catch (e) {}
                        feedback.call(i, "afterRestoreCell", l, e, d, c), n.splice(0, 1), delete a.editingInfo[l]
                    }
                    setTimeout(function() {
                        $("#" + a.knv).attr("tabindex", "-1").focus()
                    }, 0)
                }
            })
        },
        nextCell: function(s, d) {
            return this.each(function() {
                var e, t, r, i = this,
                    a = $(i),
                    o = i.p,
                    l = !1,
                    n = i.rows;
                if (i.grid && !0 === o.cellEdit && null != n && null != n[s]) {
                    for (e = d + 1; e < o.colModel.length; e++)
                        if (t = (r = o.colModel[e]).editable, $.isFunction(t) && (t = t.call(i, {
                                rowid: n[s].id,
                                iCol: e,
                                iRow: s,
                                cmName: r.name,
                                cm: r,
                                mode: "cell"
                            })), !0 === t) {
                            l = e;
                            break
                        }!1 !== l ? a.jqGrid("editCell", s, l, !0) : 0 < o.savedRow.length && a.jqGrid("saveCell", s, d)
                }
            })
        },
        prevCell: function(s, d) {
            return this.each(function() {
                var e, t, r, i = this,
                    a = $(i),
                    o = i.p,
                    l = !1,
                    n = i.rows;
                if (i.grid && !0 === o.cellEdit && null != n && null != n[s]) {
                    for (e = d - 1; 0 <= e; e--)
                        if (t = (r = o.colModel[e]).editable, $.isFunction(t) && (t = t.call(i, {
                                rowid: n[s].id,
                                iCol: e,
                                iRow: s,
                                cmName: r.name,
                                cm: r,
                                mode: "cell"
                            })), !0 === t) {
                            l = e;
                            break
                        }!1 !== l ? a.jqGrid("editCell", s, l, !0) : 0 < o.savedRow.length && a.jqGrid("saveCell", s, d)
                }
            })
        },
        GridNav: function() {
            return this.each(function() {
                var i, a, f = this,
                    o = $(f),
                    l = f.p,
                    e = f.grid;
                if (e && !0 === l.cellEdit) {
                    var h = e.bDiv;
                    l.knv = l.id + "_kn";
                    var t = $("
");
                    $(t).insertBefore(e.cDiv), $("#" + l.knv).focus().keydown(function(e) {
                        var t = parseInt(l.iRow, 10),
                            r = parseInt(l.iCol, 10);
                        switch (a = e.keyCode, "rtl" === l.direction && (37 === a ? a = 39 : 39 === a && (a = 37)), a) {
                            case 38:
                                0 < t - 1 && (n(t - 1, r, "vu"), o.jqGrid("editCell", t - 1, r, !1));
                                break;
                            case 40:
                                t + 1 <= f.rows.length - 1 && (n(t + 1, r, "vd"), o.jqGrid("editCell", t + 1, r, !1));
                                break;
                            case 37:
                                0 <= r - 1 && (n(t, i = s(r - 1, "lft"), "h"), o.jqGrid("editCell", t, i, !1));
                                break;
                            case 39:
                                r + 1 <= l.colModel.length - 1 && (n(t, i = s(r + 1, "rgt"), "h"), o.jqGrid("editCell", t, i, !1));
                                break;
                            case 13:
                                0 <= r && 0 <= t && o.jqGrid("editCell", t, r, !0);
                                break;
                            default:
                                return !0
                        }
                        return !1
                    })
                }

                function n(e, t, r) {
                    var i = f.rows[e];
                    if ("v" === r.substr(0, 1)) {
                        var a = h.clientHeight,
                            o = h.scrollTop,
                            l = i.offsetTop + i.clientHeight,
                            n = i.offsetTop;
                        "vd" === r && o + a <= l && (h.scrollTop = h.scrollTop + i.clientHeight), "vu" === r && n < o && (h.scrollTop = h.scrollTop - i.clientHeight)
                    }
                    if ("h" === r) {
                        var s = h.clientWidth,
                            d = h.scrollLeft,
                            c = i.cells[t],
                            u = c.offsetLeft + c.clientWidth,
                            p = c.offsetLeft;
                        u >= s + parseInt(d, 10) ? h.scrollLeft = h.scrollLeft + c.clientWidth : p < d && (h.scrollLeft = h.scrollLeft - c.clientWidth)
                    }
                }

                function s(e, t) {
                    var r, i = 0,
                        a = l.colModel;
                    if ("lft" === t)
                        for (i = e + 1, r = e; 0 <= r; r--)
                            if (!0 !== a[r].hidden) {
                                i = r;
                                break
                            }
                    if ("rgt" === t)
                        for (i = e - 1, r = e; r < a.length; r++)
                            if (!0 !== a[r].hidden) {
                                i = r;
                                break
                            }
                    return i
                }
            })
        },
        getChangedCells: function(u) {
            var e = [];
            return u || (u = "all"), this.each(function() {
                var n = this,
                    s = n.p,
                    d = jgrid.htmlDecode,
                    c = n.rows;
                n.grid && !0 === s.cellEdit && $(c).each(function(a) {
                    var o = {};
                    if ($(this).hasClass("edited")) {
                        var l = this;
                        $(this.cells).each(function(e) {
                            var t = s.colModel[e],
                                r = t.name,
                                i = getTdByColumnIndex.call(n, l, e);
                            if ("cb" !== r && "subgrid" !== r && "rn" !== r && ("dirty" !== u || i.hasClass("dirty-cell"))) try {
                                o[r] = $.unformat.call(n, i[0], {
                                    rowId: c[a].id,
                                    colModel: t
                                }, e)
                            } catch (e) {
                                o[r] = d(i.html())
                            }
                        }), o.id = this.id, e.push(o)
                    }
                })
            }), e
        }
    });
    var getGuiStyles = base.getGuiStyles,
        getGridRes = base.getGridRes;
    jgrid.jqModal = jgrid.jqModal || {}, $.extend(!0, jgrid.jqModal, {
        toTop: !0
    }), $.extend(jgrid, {
        showModal: function(e) {
            e.w.show()
        },
        closeModal: function(e) {
            e.w.hide().attr("aria-hidden", "true"), e.o && e.o.remove()
        },
        hideModal: function(e, t) {
            var r = !(!(t = $.extend({
                    jqm: !0,
                    gb: "",
                    removemodal: !1
                }, t || {})).gb || "string" != typeof t.gb || "#gbox_" !== t.gb.substr(0, 6)) && $("#" + t.gb.substr(6))[0],
                i = $(e);
            if (t.onClose) {
                var a = r ? t.onClose.call(r, e) : t.onClose(e);
                if ("boolean" == typeof a && !a) return
            }
            if ($.fn.jqm && !0 === t.jqm) i.attr("aria-hidden", "true").jqmHide();
            else {
                if ("" !== t.gb) try {
                    $(">.jqgrid-overlay", t.gb).first().hide()
                } catch (e) {}
                i.hide().attr("aria-hidden", "true")
            }
            t.removemodal && i.remove()
        },
        createModal: function(e, t, r, i, a, o, l) {
            var n = jgrid.jqID,
                s = this.p;
            r = $.extend(!0, {
                resizingRightBottomIcon: base.getIconRes.call(this, "form.resizableLtr")
            }, jgrid.jqModal || {}, null != s && s.jqModal || {}, r);
            var d = document.createElement("div"),
                c = "#" + n(e.themodal),
                u = "rtl" === $(r.gbox).attr("dir"),
                p = !!e.resizeAlso && "#" + n(e.resizeAlso);
            l = $.extend({}, l || {}), d.className = getGuiStyles.call(this, "dialog.window", "ui-jqdialog"), d.id = e.themodal, d.dir = u ? "rtl" : "ltr";
            var f = document.createElement("div");
            f.className = getGuiStyles.call(this, "dialog.document"), $(f).attr("role", "document");
            var h = document.createElement("div");
            h.className = getGuiStyles.call(this, "dialog.subdocument"), f.appendChild(h), d.appendChild(f);
            var g = document.createElement("div");
            g.className = getGuiStyles.call(this, "dialog.header", "ui-jqdialog-titlebar " + (u ? "ui-jqdialog-titlebar-rtl" : "ui-jqdialog-titlebar-ltr")), g.id = e.modalhead, $(g).append("" + r.caption + "");
            var m = getGuiStyles.call(this, "states.hover"),
                v = $("").hover(function() {
                    v.addClass(m)
                }, function() {
                    v.removeClass(m)
                }).append("");
            $(g).append(v);
            var b = document.createElement("div");
            $(b).addClass(getGuiStyles.call(this, "dialog.content", "ui-jqdialog-content")).attr("id", e.modalcontent), $(b).append(t), h.appendChild(b), $(h).prepend(g), !0 === o ? $("body").append(d) : "string" == typeof o ? $(o).append(d) : $(d).insertBefore(i), $(d).css(l), void 0 === r.jqModal && (r.jqModal = !0);
            var w = {};
            if ($.fn.jqm && !0 === r.jqModal ? (0 === r.left && 0 === r.top && r.overlay && ((r = $(a).offset()).left += 4, r.top += 4), w.top = r.top + "px", w.left = r.left) : 0 === r.left && 0 === r.top || (w.left = r.left, w.top = r.top + "px"), $("a.ui-jqdialog-titlebar-close", g).click(function() {
                    var e = $(c).data("onClose") || r.onClose,
                        t = $(c).data("gbox") || r.gbox;
                    return jgrid.hideModal(c, {
                        gb: t,
                        jqm: r.jqModal,
                        onClose: e,
                        removemodal: r.removemodal || !1
                    }), !1
                }), 0 !== r.width && r.width || (r.width = 300), 0 !== r.height && r.height || (r.height = 200), !r.zIndex) {
                var y = $(i).parents("*[role=dialog]").first().css("z-index");
                y ? (r.zIndex = parseInt(y, 10) + 2, r.toTop = !0) : r.zIndex = 950
            }
            if (w.left && (w.left += "px"), $(d).css($.extend({
                    width: isNaN(r.width) ? "auto" : r.width + "px",
                    height: isNaN(r.height) ? "auto" : r.height + "px",
                    zIndex: r.zIndex
                }, w)).attr({
                    tabIndex: "-1",
                    role: "dialog",
                    "aria-labelledby": e.modalhead,
                    "aria-hidden": "true"
                }), void 0 === r.drag && (r.drag = !0), void 0 === r.resize && (r.resize = !0), r.drag)
                if ($.fn.jqDrag) $(g).css("cursor", "move"), $(d).jqDrag(g);
                else try {
                    $(d).draggable({
                        handle: $("#" + n(g.id))
                    })
                } catch (e) {}
            if (r.resize)
                if ($.fn.jqResize) $(b).append("
"), $(c).jqResize(".jqResize", p);
                else try {
                    $(d).resizable({
                        handles: "se, sw",
                        alsoResize: p
                    })
                } catch (e) {}!0 === r.closeOnEscape && $(d).keydown(function(e) {
                    if (27 === e.which) {
                        var t = $(c).data("onClose") || r.onClose;
                        jgrid.hideModal(c, {
                            gb: r.gbox,
                            jqm: r.jqModal,
                            onClose: t,
                            removemodal: r.removemodal || !1,
                            formprop: !r.recreateForm || !1,
                            form: r.form || ""
                        })
                    }
                })
        },
        viewModal: function(e, t) {
            if (t = $.extend(!0, {
                    overlay: 30,
                    modal: !1,
                    overlayClass: getGuiStyles.call(this, "overlay"),
                    onShow: jgrid.showModal,
                    onHide: jgrid.closeModal,
                    gbox: "",
                    jqm: !0,
                    jqM: !0
                }, jgrid.jqModal || {}, t || {}), $.fn.jqm && !0 === t.jqm) t.jqM ? $(e).attr("aria-hidden", "false").jqm(t).jqmShow() : $(e).attr("aria-hidden", "false").jqmShow();
            else {
                "" !== t.gbox && ($(">.jqgrid-overlay", t.gbox).first().show(), $(e).data("gbox", t.gbox)), $(e).show().attr("aria-hidden", "false");
                try {
                    $(":input:visible", e)[0].focus()
                } catch (e) {}
            }
        },
        info_dialog: function(e, t, r, i) {
            var a = this,
                o = a.p,
                l = $.extend(!0, {
                    width: 290,
                    height: "auto",
                    dataheight: "auto",
                    drag: !0,
                    resize: !1,
                    left: 250,
                    top: 170,
                    zIndex: 1e3,
                    jqModal: !0,
                    modal: !1,
                    closeOnEscape: !0,
                    align: "center",
                    buttonalign: "center",
                    buttons: []
                }, jgrid.jqModal || {}, null != o && o.jqModal || {}, {
                    caption: "" + e + ""
                }, i || {}),
                n = l.jqModal;
            $.fn.jqm && !n && (n = !1);
            var s, d = "",
                c = getGuiStyles.call(a, "states.hover");
            if (0 < l.buttons.length)
                for (s = 0; s < l.buttons.length; s++) void 0 === l.buttons[s].id && (l.buttons[s].id = "info_button_" + s), d += jgrid.builderFmButon.call(a, l.buttons[s].id, l.buttons[s].text);
            var u = isNaN(l.dataheight) ? l.dataheight : l.dataheight + "px",
                p = "text-align:" + l.align + ";",
                f = $("#info_dialog"),
                h = "
";
            h += "
" + t + "
", (r || "" !== d) && (h += "
" + (r ? jgrid.builderFmButon.call(a, "closedialog", r) : "") + d + "
"), h += "
";
            try {
                "false" === f.attr("aria-hidden") && jgrid.hideModal("#info_dialog", {
                    jqm: n
                }), f.remove()
            } catch (e) {}
            jgrid.createModal.call(a, {
                themodal: "info_dialog",
                modalhead: "info_head",
                modalcontent: "info_content",
                resizeAlso: "infocnt"
            }, h, l, "", "", !0), f = $("#info_dialog"), d && $.each(l.buttons, function() {
                $("#" + jgrid.jqID(this.id), "#info_id").on("click", {
                    click: this.onClick
                }, function(e) {
                    return $.isFunction(e.data.click) && e.data.click.call(a, e, f), !1
                })
            }), $("#closedialog", "#info_id").click(function() {
                return jgrid.hideModal("#info_dialog", {
                    jqm: n,
                    onClose: f.data("onClose") || l.onClose,
                    gb: f.data("gbox") || l.gbox
                }), !1
            }), $(".fm-button", "#info_dialog").hover(function() {
                $(this).addClass(c)
            }, function() {
                $(this).removeClass(c)
            }), $.isFunction(l.beforeOpen) && l.beforeOpen(), jgrid.viewModal.call(a, "#info_dialog", {
                onHide: function(e) {
                    e.w.hide().remove(), e.o && e.o.remove()
                },
                modal: l.modal,
                jqm: n
            }), $.isFunction(l.afterOpen) && l.afterOpen();
            try {
                f.focus()
            } catch (e) {}
        },
        bindEv: function(e, t) {
            $.isFunction(t.dataInit) && t.dataInit.call(this, e, t), t.dataEvents && $.each(t.dataEvents, function() {
                void 0 !== this.data ? $(e).on(this.type, "object" == typeof this.data && null !== this.data ? $.extend(!0, {}, t, this.data) : this.data, this.fn) : $(e).on(this.type, t, this.fn)
            })
        },
        createEl: function(e, t, r, i, a) {
            var o = "",
                u = this,
                l = u.p,
                n = jgrid.info_dialog,
                s = function(e) {
                    return getGridRes.call($(u), e)
                },
                d = s("errors.errcap"),
                c = s("edit"),
                p = c.msg,
                f = c.bClose;

            function h(r, e, t) {
                var i = ["dataInit", "dataEvents", "dataUrl", "buildSelect", "sopt", "searchhidden", "defaultValue", "attr", "custom_element", "custom_value", "generateValue", "postData", "selectFilled", "rowId", "column", "mode", "cm", "iCol"];
                void 0 !== t && $.isArray(t) && $.merge(i, t), $.each(e, function(e, t) {
                    -1 === $.inArray(e, i) && $(r).attr(e, t)
                }), e.hasOwnProperty("id") || $(r).attr("id", jgrid.randId())
            }
            if (null == t) return "";
            switch (e) {
                case "textarea":
                    o = document.createElement("textarea"), i ? t.cols || $(o).css({
                        width: "100%",
                        "box-sizing": "border-box"
                    }) : t.cols || (t.cols = 19), t.rows || (t.rows = 2), (" " === r || " " === r || 1 === r.length && 160 === r.charCodeAt(0)) && (r = ""), o.value = r, h(o, t), $(o).attr({
                        role: "textbox"
                    });
                    break;
                case "checkbox":
                    if ((o = document.createElement("input")).type = "checkbox", "" !== r && null != r || (r = t.hasOwnProperty("defaultValue") ? $.isFunction(t.defaultValue) ? t.defaultValue.call(u, {
                            cellValue: r,
                            options: t
                        }) : t.defaultValue : "false"), t.value) {
                        var g = t.value.split(":");
                        r === g[0] && (o.checked = !0, o.defaultChecked = !0), o.value = r, $(o).data("offval", g[1])
                    } else {
                        var m = String(r).toLowerCase();
                        m.search(/(false|f|0|no|n|off|undefined)/i) < 0 && "" !== m ? (o.checked = !0, o.defaultChecked = !0, o.value = r) : o.value = "on", $(o).data("offval", "off")
                    }
                    h(o, t, ["value"]), $(o).attr({
                        role: "checkbox",
                        "aria-checked": o.checked ? "true" : "false"
                    });
                    break;
                case "select":
                    o = document.createElement("select");
                    var v, b = [],
                        w = null;
                    !0 === t.multiple || "multiple" === t.multiple ? (v = !0, o.multiple = "multiple", $(o).attr("aria-multiselectable", "true"), b = r.split(","), b = $.map(b, function(e) {
                        return $.trim(e)
                    })) : (v = !1, b[0] = $.trim(r)), void 0 === t.size && (t.size = v ? 3 : 1);
                    try {
                        w = t.rowId
                    } catch (e) {}
                    if (l && l.idPrefix && (w = jgrid.stripPref(l.idPrefix, w)), void 0 === t.dataUrl && t.generateValue && null != l.indexByColumnData[t.cm.name] && (t.value = u.generateValueFromColumnIndex(t.cm.name, t.separator, t.delimiter)), void 0 !== t.dataUrl) {
                        var y = t.postData || a.postData,
                            x = {
                                elem: o,
                                options: t,
                                cm: t.cm,
                                mode: t.mode,
                                rowid: w,
                                iCol: t.iCol,
                                ovm: b
                            };
                        h(o, t, y ? ["postData"] : void 0), $.ajax($.extend({
                            url: $.isFunction(t.dataUrl) ? t.dataUrl.call(u, w, r, String(t.name), x) : t.dataUrl,
                            type: "GET",
                            dataType: "html",
                            data: $.isFunction(y) ? y.call(u, w, r, String(t.name)) : y,
                            context: x,
                            success: function(e, t, r) {
                                var i = this.ovm,
                                    a = this.elem,
                                    o = this.cm,
                                    l = this.iCol,
                                    n = $.extend({}, this.options),
                                    s = this.rowid,
                                    d = this.mode,
                                    c = $.isFunction(n.buildSelect) ? n.buildSelect.call(u, e, r, o, l) : e;
                                "string" == typeof c && (c = $($.trim(c)).html()), c && ($(a).append(c), setTimeout(function() {
                                    var t;
                                    $("option", a).each(function(e) {
                                        0 === e && a.multiple && (this.selected = !1), -1 < $.inArray($.trim($(this).val()), i) && (this.selected = !0, t = !0)
                                    }), t || $("option", a).each(function() {
                                        -1 < $.inArray($.trim($(this).text()), i) && (this.selected = !0)
                                    }), jgrid.fullBoolFeedback.call(u, n.selectFilled, "jqGridSelectFilled", {
                                        elem: a,
                                        options: n,
                                        cm: o,
                                        rowid: s,
                                        mode: d,
                                        cmName: null != o ? o.name : n.name,
                                        iCol: l
                                    })
                                }, 0))
                            }
                        }, a || {}))
                    } else t.value && (jgrid.fillSelectOptions(o, t.value, void 0 === t.separator ? ":" : t.separator, void 0 === t.delimiter ? ";" : t.delimiter, v, r), h(o, t, ["value"]), jgrid.fullBoolFeedback.call(u, t.selectFilled, "jqGridSelectFilled", {
                        elem: o,
                        options: t,
                        cm: t.cm,
                        rowid: w,
                        mode: t.mode,
                        cmName: null != t.cm ? t.cm.name : t.name,
                        iCol: t.iCol
                    }));
                    break;
                case "text":
                case "password":
                case "button":
                    var j;
                    j = "button" === e ? "button" : "textbox", (o = document.createElement("input")).type = e, h(o, t), o.value = r, "button" !== e && (i ? t.size || $(o).css({
                        width: "100%",
                        "box-sizing": "border-box"
                    }) : t.size || (t.size = 20)), $(o).attr("role", j);
                    break;
                case "image":
                case "file":
                    (o = document.createElement("input")).type = e, h(o, t);
                    break;
                case "custom":
                    o = document.createElement("span");
                    try {
                        if (!$.isFunction(t.custom_element)) throw "editoptions.custom_element is not a function";
                        var C = t.custom_element.call(u, r, t);
                        if (!(C instanceof jQuery || jgrid.isHTMLElement(C) || "string" == typeof C)) throw "editoptions.custom_element returns value of a wrong type";
                        C = $(C).addClass("customelement").attr({
                            id: t.id,
                            name: t.name
                        }), $(o).empty().append(C)
                    } catch (e) {
                        "e1" === e && n.call(u, d, "function 'custom_element' " + p.nodefined, f), "e2" === e ? n.call(u, d, "function 'custom_element' " + p.novalue, f) : n.call(u, d, "string" == typeof e ? e : e.message, f)
                    }
            }
            return o
        },
        checkDate: function(e, t) {
            var r, i = {};
            if (r = -1 !== (e = e.toLowerCase()).indexOf("/") ? "/" : -1 !== e.indexOf("-") ? "-" : -1 !== e.indexOf(".") ? "." : "/", e = e.split(r), 3 !== (t = t.split(r)).length) return !1;
            var a, o, l, n = -1,
                s = -1,
                d = -1;
            for (o = 0; o < e.length; o++) l = isNaN(t[o]) ? 0 : parseInt(t[o], 10), i[e[o]] = l, -1 !== (a = e[o]).indexOf("y") && (n = o), -1 !== a.indexOf("m") && (d = o), -1 !== a.indexOf("d") && (s = o);
            a = "y" === e[n] || "yyyy" === e[n] ? 4 : "yy" === e[n] ? 2 : -1;
            var c, u;
            return -1 !== n && (c = i[e[n]].toString(), 2 === a && 1 === c.length && (a = 1), c.length === a && (0 !== i[e[n]] || "00" === t[n]) && (-1 !== d && (!((c = i[e[d]].toString()).length < 1 || i[e[d]] < 1 || 12 < i[e[d]]) && (-1 !== s && !((c = i[e[s]].toString()).length < 1 || i[e[s]] < 1 || 31 < i[e[s]] || 2 === i[e[d]] && i[e[s]] > ((u = i[e[n]]) % 4 != 0 || u % 100 == 0 && u % 400 != 0 ? 28 : 29) || i[e[s]] > [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i[e[d]]])))))
        },
        isEmpty: function(e) {
            return !(!e.match(/^\s+$/) && "" !== e)
        },
        checkTime: function(e) {
            var t;
            if (!jgrid.isEmpty(e)) {
                if (!(t = e.match(/^(\d{1,2}):(\d{2})([apAP][Mm])?$/))) return !1;
                if (t[3]) {
                    if (t[1] < 1 || 12 < t[1]) return !1
                } else if (23 < t[1]) return !1;
                if (59 < t[2]) return !1
            }
            return !0
        },
        checkValues: function(e, t, r, i, a) {
            var o, l, n, s, d, c = this,
                u = c.p,
                p = u.colModel,
                f = jgrid.isEmpty,
                h = getGridRes.call($(c), "edit.msg"),
                g = function(e) {
                    var t = o[e];
                    return $.isFunction(t) ? t.call(c, a) : t
                },
                m = getGridRes.call($(c), "formatter.date.masks");
            if (void 0 === r) {
                if ("string" == typeof t && (t = u.iColByName[t]), void 0 === t || t < 0) return [!0, "", ""];
                s = p[t], o = s.editrules, null != s.formoptions && (l = s.formoptions.label)
            } else o = r, l = void 0 === i ? "_" : i, s = p[t];
            if (o) {
                if (l || (l = null != u.colNames ? u.colNames[t] : s.label), !0 === g("required") && f(e)) return [!1, l + ": " + h.required, ""];
                var v = !1 !== g("required");
                if (!0 === g("number") && (!1 !== v || !f(e)) && isNaN(e)) return [!1, l + ": " + h.number, ""];
                if (void 0 !== o.minValue && !isNaN(o.minValue) && parseFloat(e) < parseFloat(o.minValue)) return [!1, l + ": " + h.minValue + " " + o.minValue, ""];
                if (void 0 !== o.maxValue && !isNaN(o.maxValue) && parseFloat(e) > parseFloat(o.maxValue)) return [!1, l + ": " + h.maxValue + " " + o.maxValue, ""];
                if (!0 === g("email") && !(!1 === v && f(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e))) return [!1, l + ": " + h.email, ""];
                if (!0 === g("integer") && (!1 !== v || !f(e))) {
                    if (isNaN(e)) return [!1, l + ": " + h.integer, ""];
                    if (e % 1 != 0 || -1 !== e.indexOf(".")) return [!1, l + ": " + h.integer, ""]
                }
                if (!0 === g("date") && !(!1 === v && f(e) || (s.formatoptions && s.formatoptions.newformat ? (n = s.formatoptions.newformat, m.hasOwnProperty(n) && (n = m[n])) : n = p[t].datefmt || "Y-m-d", jgrid.checkDate(n, e)))) return [!1, l + ": " + h.date + " - " + n, ""];
                if (!0 === g("time") && !(!1 === v && f(e) || jgrid.checkTime(e))) return [!1, l + ": " + h.date + " - hh:mm (am/pm)", ""];
                if (!0 === g("url") && !(!1 === v && f(e) || /^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e))) return [!1, l + ": " + h.url, ""];
                if (!0 === o.custom) {
                    if (!1 !== v || !f(e)) return $.isFunction(o.custom_func) ? (d = o.custom_func.call(c, e, l, t), $.isArray(d) ? d : [!1, h.customarray, ""]) : [!1, h.customfcheck, ""]
                } else if ($.isFunction(o.custom) && (!1 !== v || !f(e))) return d = o.custom.call(c, a), $.isArray(d) ? d : [!1, h.customarray, ""]
            }
            return [!0, "", ""]
        }
    }), jgrid.extend({
        getColProp: function(e) {
            var t, r = this[0];
            return null != r && r.grid && void 0 !== (t = r.p.iColByName[e]) ? r.p.colModel[t] : {}
        },
        setColProp: function(r, i) {
            return this.each(function() {
                var e, t = this.p;
                this.grid && null != t && i && void 0 !== (e = t.iColByName[r]) && $.extend(!0, t.colModel[e], i)
            })
        },
        sortGrid: function(s, d, c) {
            return this.each(function() {
                var e, t, r, i = this.grid,
                    a = this.p,
                    o = a.colModel,
                    l = o.length,
                    n = !1;
                if (i)
                    for (s || (s = a.sortname), "boolean" != typeof d && (d = !1), t = 0; t < l; t++)
                        if ((e = o[t]).index === s || e.name === s) {
                            !0 === a.frozenColumns && !0 === e.frozen && (n = i.fhDiv.find("#" + jqID(a.id + "_" + s))), n && 0 !== n.length || (n = i.headers[t].el), ("boolean" != typeof(r = e.sortable) || r) && this.sortData(e.index || e.name, t, d, c, n);
                            break
                        }
            })
        },
        clearBeforeUnload: function() {
            return this.each(function() {
                var e, t = this,
                    r = t.p,
                    i = t.grid,
                    a = jgrid.clearArray,
                    o = Object.prototype.hasOwnProperty;
                $.isFunction(i.emptyRows) && i.emptyRows.call(t, !0, !0), $(document).off("mousemove.jqGrid mouseup.jqGrid" + r.id), $(t).off();
                var l, n = i.headers.length;
                for (l = 0; l < n; l++) i.headers[l].el = null;
                for (e in i) i.hasOwnProperty(e) && (i.propOrMethod = null);
                var s = ["formatCol", "sortData", "updatepager", "refreshIndex", "setHeadCheckBox", "constructTr", "clearToolbar", "fixScrollOffsetAndhBoxPadding", "rebuildRowIndexes", "modalAlert", "toggleToolbar", "triggerToolbar", "formatter", "addXmlData", "addJSONData", "ftoolbar", "_inlinenav", "nav", "grid", "p"];
                for (n = s.length, l = 0; l < n; l++) o.call(t, s[l]) && (t[s[l]] = null);
                t._index = {}, a(r.data), a(r.lastSelectedData), a(r.selarrrow), a(r.savedRow), r.editingInfo = {}
            })
        },
        GridDestroy: function() {
            return this.each(function() {
                var e = this.p;
                if (this.grid && null != e) {
                    e.pager && $(e.pager).remove();
                    try {
                        $("#alertmod_" + jqID(e.id)).remove(), $(this).jqGrid("clearBeforeUnload"), $(e.gBox).remove()
                    } catch (e) {}
                }
            })
        },
        GridUnload: function() {
            return this.each(function() {
                var e = $(this),
                    t = this.p,
                    r = $.fn.jqGrid;
                this.grid && (e.removeClass(r.getGuiStyles.call(e, "grid", "ui-grid-btable")), t.pager && (t.pager.substr(1, $.jgrid.uidPref.length) === $.jgrid.uidPref ? $(t.pager).remove() : $(t.pager).empty().removeClass(r.getGuiStyles.call(e, "pager.pager", "ui-grid-pager " + r.getGuiStyles.call(e, "bottom"))).removeAttr("style").removeAttr("dir")), e.jqGrid("clearBeforeUnload"), e.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"), e.empty(), e.insertBefore(t.gBox).show(), $(t.pager).insertBefore(t.gBox).show(), $(t.gBox).remove())
            })
        },
        setGridState: function(d) {
            return this.each(function() {
                var t = this,
                    e = t.p,
                    r = t.grid,
                    i = r.cDiv,
                    a = $(r.uDiv),
                    o = $(r.ubDiv);
                if (r && null != e) {
                    var l = function(e) {
                            return base.getIconRes.call(t, "gridMinimize." + e)
                        },
                        n = l("visible"),
                        s = l("hidden");
                    "hidden" === d ? ($(".ui-grid-bdiv, .ui-grid-hdiv", e.gView).slideUp("fast"), e.pager && $(e.pager).slideUp("fast"), e.toppager && $(e.toppager).slideUp("fast"), !0 === e.toolbar[0] && ("both" === e.toolbar[1] && o.slideUp("fast"), a.slideUp("fast")), e.footerrow && $(".ui-grid-sdiv", e.gBox).slideUp("fast"), $(".ui-grid-titlebar-close span", i).removeClass(n).addClass(s), e.gridstate = "hidden") : "visible" === d && ($(".ui-grid-hdiv, .ui-grid-bdiv", e.gView).slideDown("fast"), e.pager && $(e.pager).slideDown("fast"), e.toppager && $(e.toppager).slideDown("fast"), !0 === e.toolbar[0] && ("both" === e.toolbar[1] && o.slideDown("fast"), a.slideDown("fast")), e.footerrow && $(".ui-grid-sdiv", e.gBox).slideDown("fast"), $(".ui-grid-titlebar-close span", i).removeClass(s).addClass(n), e.gridstate = "visible")
                }
            })
        },
        filterToolbar: function(e) {
            return this.each(function() {
                var _ = this,
                    h = _.grid,
                    I = $(_),
                    G = _.p,
                    O = jgrid.info_dialog,
                    b = jgrid.htmlEncode;
                if (!this.ftoolbar) {
                    var k, N = $.extend(!0, {
                            autosearch: !0,
                            autosearchDelay: 500,
                            searchOnEnter: !0,
                            beforeSearch: null,
                            afterSearch: null,
                            beforeClear: null,
                            afterClear: null,
                            searchurl: "",
                            sField: "searchField",
                            sValue: "searchString",
                            sOper: "searchOper",
                            sFilter: G.prmNames.filters,
                            stringResult: !1,
                            groupOp: "AND",
                            defaultSearch: "bw",
                            idMode: "new",
                            searchOperators: !1,
                            resetIcon: "×",
                            applyLabelClasses: !0,
                            loadFilterDefaults: !0,
                            operands: {
                                eq: "==",
                                ne: "!",
                                lt: "<",
                                le: "<=",
                                gt: ">",
                                ge: ">=",
                                bw: "^",
                                bn: "!^",
                                in: "=",
                                ni: "!=",
                                ew: "|",
                                en: "!@",
                                cn: "~",
                                nc: "!~",
                                nu: "#",
                                nn: "!#"
                            }
                        }, jgrid.search, G.searching || {}, e || {}),
                        w = G.colModel,
                        E = function(e) {
                            return getGridRes.call(I, e)
                        },
                        A = E("errors.errcap"),
                        T = E("edit.bClose"),
                        M = E("edit.msg"),
                        B = getGuiStyles.call(_, "states.hover"),
                        y = getGuiStyles.call(_, "states.select"),
                        P = getGuiStyles.call(_, "filterToolbar.dataField"),
                        z = {},
                        L = function(e) {
                            var t = "gs_";
                            switch (N.idMode) {
                                case "compatibility":
                                    t += G.idPrefix;
                                    break;
                                case "new":
                                    t += G.id + "_"
                            }
                            return t + e
                        },
                        g = function(e) {
                            return "#" + jqID(L(e))
                        },
                        m = function(e) {
                            var t = (e.value || "").split(":");
                            return {
                                on: t[0] || "on",
                                off: t[1] || "off"
                            }
                        },
                        c = function(e) {
                            var t, r, i, a, o, l, n = G.postData[N.sFilter],
                                s = {},
                                d = G.iColByName;
                            if (e)
                                for (r = 0; r < w.length; r++) !1 !== (o = w[r]).search && (l = o.searchoptions || {}, s[o.name] = {
                                    op: l.sopt ? l.sopt[0] : "select" === o.stype || "checkbox" === o.stype ? "eq" : N.defaultSearch,
                                    data: void 0 !== l.defaultValue ? l.defaultValue : ""
                                });
                            if (!n || !G.search) return s;
                            if ("string" == typeof n) try {
                                n = $.parseJSON(n)
                            } catch (e) {
                                n = {}
                            } else n = n || {};
                            if (i = n.rules || {}, null == n || null != n.groupOp && null != N.groupOp && n.groupOp.toUpperCase() !== N.groupOp.toUpperCase() || null == i || 0 === i.length || null != n.groups && 0 < n.groups.length) return s;
                            for (r = 0; r < i.length; r++)
                                for (a = i[r], o = w[d[a.field]], t = 0; t < w.length; t++)
                                    if (((o = w[t]).index || o.name) === a.field && !1 !== o.search) {
                                        if ((l = o.searchoptions || {}).sopt) {
                                            if ($.inArray(a.op, l.sopt) < 0) continue
                                        } else if ("select" === o.stype || "checkbox" === o.stype) {
                                            if ("eq" !== a.op) continue
                                        } else if (a.op !== N.defaultSearch) continue;
                                        s[o.name] = {
                                            op: a.op,
                                            data: a.data
                                        }
                                    }
                            return s
                        },
                        V = function(e, t) {
                            switch (t) {
                                case 1:
                                    e.data("state", 1).prop({
                                        checked: !0,
                                        indeterminate: !1
                                    });
                                    break;
                                case 0:
                                    e.data("state", 0).prop({
                                        checked: !1,
                                        indeterminate: !1
                                    });
                                    break;
                                default:
                                    e.data("state", -1).prop({
                                        checked: !1,
                                        indeterminate: !0
                                    })
                            }
                        },
                        H = function() {
                            var u = {},
                                p = 0,
                                f = {};
                            $.each(w, function() {
                                var e, t, i = this,
                                    r = i.index || i.name,
                                    a = i.searchoptions || {},
                                    o = $(g(i.name), !0 === i.frozen && !0 === G.frozenColumns ? h.fhDiv : h.hDiv),
                                    l = function(e, t) {
                                        var r = i.formatoptions || {};
                                        return void 0 !== r[e] ? r[e] : E("formatter." + (t || i.formatter) + "." + e)
                                    },
                                    n = function(e) {
                                        var t = l("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g, "\\$1");
                                        return e.replace(new RegExp(t, "g"), "")
                                    };
                                if (t = N.searchOperators ? o.parent().prev().children("a").data("soper") || N.defaultSearch : a.sopt ? a.sopt[0] : "select" === i.stype || "checkbox" === i.stype ? "eq" : N.defaultSearch, "custom" === i.stype && $.isFunction(a.custom_value) && 0 < o.length && "SPAN" === o[0].nodeName.toUpperCase()) e = a.custom_value.call(_, o.children(".customelement").first(), "get");
                                else if ("select" === i.stype) e = o.prop("multiple") ? null == (e = o.val()) || 0 === e.length ? "" : e.join(G.inFilterSeparator || ",") : o.val();
                                else if ("checkbox" === i.stype) {
                                    var s = m(a);
                                    switch (o.data("state")) {
                                        case -1:
                                            e = "";
                                            break;
                                        case 0:
                                            e = s.off;
                                            break;
                                        default:
                                            e = s.on
                                    }
                                } else switch (e = $.trim(o.val()), i.formatter) {
                                    case "integer":
                                        "" !== (e = n(e).replace(l("decimalSeparator", "number"), ".")) && (e = String(parseInt(e, 10)));
                                        break;
                                    case "number":
                                        "" !== (e = n(e).replace(l("decimalSeparator"), ".")) && "0" === String(e).charAt(0) && (e = String(parseFloat(e)));
                                        break;
                                    case "currency":
                                        var d = l("prefix"),
                                            c = l("suffix");
                                        d && d.length && e.substr(0, d.length) === d && (e = e.substr(d.length)), c && c.length && e.length > c.length && e.substr(e.length - c.length, c.length) === c && (e = e.substr(0, e.length - c.length)), "" !== (e = n(e).replace(l("decimalSeparator"), ".")) && (e = String(parseFloat(e)))
                                }
                                if (e || "nu" === t || "nn" === t || 0 <= $.inArray(t, G.customUnaryOperations)) u[r] = e, f[r] = t, p++;
                                else if (u.hasOwnProperty(r) && delete u[r], !N.stringResult && !N.searchOperators && "local" !== G.datatype) try {
                                    null != G.postData && G.postData.hasOwnProperty(r) && delete G.postData[r]
                                } catch (e) {}
                            });
                            var e, t = 0 < p;
                            if (N.stringResult || N.searchOperators || "local" === G.datatype) {
                                var r = '{"groupOp":"' + N.groupOp + '","rules":[',
                                    i = 0;
                                $.each(u, function(e, t) {
                                    0 < i && (r += ","), r += '{"field":"' + e + '",', r += '"op":"' + f[e] + '",', r += '"data":"' + (t += "").replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"}', i++
                                }), r += "]}", G.postData[N.sFilter] = r, $.each([N.sField, N.sValue, N.sOper], function(e, t) {
                                    G.postData.hasOwnProperty(t) && delete G.postData[t]
                                })
                            } else $.extend(G.postData, u);
                            G.searchurl && (e = G.url, I.jqGrid("setGridParam", {
                                url: G.searchurl
                            }));
                            var a = "stop" === I.triggerHandler("jqGridToolbarBeforeSearch");
                            !a && $.isFunction(N.beforeSearch) && (a = N.beforeSearch.call(_)), a || I.jqGrid("setGridParam", {
                                search: t
                            }).trigger("reloadGrid", [$.extend({
                                page: 1
                            }, N.reloadGridSearchOptions || {})]), e && I.jqGrid("setGridParam", {
                                url: e
                            }), I.triggerHandler("jqGridToolbarAfterSearch"), $.isFunction(N.afterSearch) && N.afterSearch.call(_)
                        },
                        W = E("search.odata") || [],
                        U = G.customSortOperations,
                        Y = [],
                        X = $("", {
                            class: "ui-search-toolbar",
                            role: "row form"
                        });
                    N.loadFilterDefaults && (z = c() || {}), $.each(w, function(e) {
                        var c, t, r, i, a, o, l, n = this,
                            u = "filter",
                            s = n.searchoptions || {},
                            d = n.editoptions || {},
                            p = $("", {
                                class: getGuiStyles.call(_, "colHeaders", "ui-th-column ui-th-" + G.direction + " " + (N.applyLabelClasses && n.labelClasses || "")),
                                role: "gridcell",
                                "aria-describedby": G.id + "_" + n.name
                            }),
                            f = $("
"),
                            h = $("
"),
                            g = h.children("tbody").children("tr").children("td"),
                            m = g.eq(0),
                            v = g.eq(1),
                            b = g.eq(2);
                        if (!0 === this.hidden && p.css("display", "none"), this.search = !1 !== this.search, void 0 === this.stype && (this.stype = "text"), c = $.extend({
                                mode: u,
                                name: n.name,
                                cm: n,
                                iCol: e,
                                id: L(n.name)
                            }, s), this.search) {
                            if (N.searchOperators) {
                                for (i = G.search && null != z[this.name] ? z[this.name].op : c.sopt ? c.sopt[0] : "select" === n.stype || "checkbox" === n.stype ? "eq" : N.defaultSearch, a = 0; a < W.length; a++)
                                    if (W[a].oper === i) {
                                        r = N.operands[i] || "";
                                        break
                                    }
                                var w;
                                if (void 0 === r && null != U)
                                    for (w in U)
                                        if (U.hasOwnProperty(w) && w === i) {
                                            r = U[w].operand;
                                            break
                                        }
                                void 0 === r && (r = "="), m.append("" + r + "")
                            }
                            if (m.data("colindex", e), null != c.sopt && 1 !== c.sopt.length || m.hide(), G.search && null != z[this.name] && (c.defaultValue = z[this.name].data), void 0 === c.clearSearch && (c.clearSearch = "text" === this.stype), c.clearSearch) {
                                var y = $.isFunction(N.resetTitle) ? N.resetTitle.call(_, {
                                    options: N,
                                    cm: n,
                                    cmName: n.name,
                                    iCol: e
                                }) : (E("search.resetTitle") || "Clear Search Value") + " " + jgrid.stripHtml(G.colNames[e]);
                                b.append("" + N.resetIcon + "")
                            } else b.hide();
                            switch (f.append(h), this.stype) {
                                case "checkbox":
                                    var x = void 0 !== c.defaultValue ? c.defaultValue : "-1";
                                    l = $(""), "-1" === x ? l.prop("indeterminate", !0) : "1" === x && l.prop("checked", !0), l.click(function() {
                                        var e = $(this);
                                        switch (e.data("state")) {
                                            case -1:
                                                V(e, 1);
                                                break;
                                            case 0:
                                                V(e, -1);
                                                break;
                                            default:
                                                V(e, 0)
                                        }!0 === N.autosearch && H()
                                    }), v.append(l), c.attr && l.attr(c.attr), Y.push({
                                        elem: l[0],
                                        options: c
                                    });
                                    break;
                                case "select":
                                    var j, C, D;
                                    if (t = this.surl || c.dataUrl) $.ajax($.extend({
                                        url: t,
                                        context: {
                                            $tdInput: v,
                                            options: c,
                                            cm: n,
                                            iCol: e
                                        },
                                        dataType: "html",
                                        success: function(e, t, r) {
                                            var i, a, o, l = this.cm,
                                                n = this.iCol,
                                                s = this.options,
                                                d = this.$tdInput;
                                            void 0 !== s.buildSelect ? (i = s.buildSelect.call(_, e, r, l, n)) && d.append(i) : d.append(e), (o = d.children("select")).attr({
                                                name: l.index || l.name,
                                                id: L(l.name)
                                            }), s.attr && o.attr(s.attr), o.addClass(P), o.css({
                                                width: "100%"
                                            }), 0 === o.find("option[value='']").length && "string" == typeof c.noFilterText && ((a = document.createElement("option")).value = "", a.innerHTML = c.noFilterText, o.prepend(a), null != $(o[0].options[o[0].selectedIndex]).attr("selected") || o[0].multiple || (o[0].selectedIndex = 0)), o[0].multiple && 0 === o.find("option[selected]").length && -1 !== o[0].selectedIndex && (o[0].options[o[0].selectedIndex].selected = !1), void 0 !== s.defaultValue && o.val(s.defaultValue), jgrid.bindEv.call(_, o[0], s), jgrid.fullBoolFeedback.call(_, s.selectFilled, "jqGridSelectFilled", {
                                                elem: o[0],
                                                options: s,
                                                cm: l,
                                                cmName: l.name,
                                                iCol: n,
                                                mode: u
                                            }), !0 === N.autosearch && o.change(function() {
                                                return H(), !1
                                            })
                                        }
                                    }, jgrid.ajaxOptions, G.ajaxSelectOptions || {}));
                                    else if (n.searchoptions ? (j = void 0 === s.value ? d.value || "" : s.value, C = void 0 === s.separator ? d.separator || ":" : s.separator, D = void 0 === s.delimiter ? d.delimiter || ";" : s.delimiter) : n.editoptions && (j = void 0 === d.value ? "" : d.value, C = void 0 === d.separator ? ":" : d.separator, D = void 0 === d.delimiter ? ";" : d.delimiter), s.generateValue && null != G.indexByColumnData[n.name] && (j = _.generateValueFromColumnIndex(n.name, C, D)), j) {
                                        if ((o = document.createElement("select")).style.width = "100%", l = $(o).attr({
                                                name: n.index || n.name,
                                                role: "search",
                                                id: L(n.name),
                                                "aria-describedby": G.id + "_" + n.name
                                            }), c.attr && l.attr(c.attr), !jgrid.fillSelectOptions(o, j, C, D, null != c.attr && c.attr.multiple) && "string" == typeof c.noFilterText) {
                                            var S = document.createElement("option");
                                            S.value = "", S.innerHTML = c.noFilterText, S.selected = !0, l.prepend(S)
                                        }
                                        void 0 !== c.defaultValue && l.val(c.defaultValue), l.addClass(P), Y.push({
                                            elem: o,
                                            options: c
                                        }), v.append(o), jgrid.fullBoolFeedback.call(_, c.selectFilled, "jqGridSelectFilled", {
                                            elem: o,
                                            options: n.searchoptions || d,
                                            cm: n,
                                            cmName: n.name,
                                            iCol: e,
                                            mode: u
                                        }), !0 === N.autosearch && l.change(function() {
                                            return H(), !1
                                        })
                                    }
                                    break;
                                case "text":
                                    if (l = $("
" + (void 0 !== c.defaultValue ? c.defaultValue : "") + "
"), v.append(l), n.createColumnIndex && c.generateDatalist) {
                                        var q = "dl_" + L(n.name),
                                            F = I.jqGrid("generateDatalistFromColumnIndex", n.name);
                                        null != F && 0 < F.length && (l.attr("list", q), v.append(F.attr("id", q)))
                                    }
                                    c.attr && l.attr(c.attr), Y.push({
                                        elem: l[0],
                                        options: c
                                    }), !0 === N.autosearch && (N.searchOnEnter ? l.keypress(function(e) {
                                        return 13 === (e.charCode || e.keyCode || 0) ? (H(), !1) : this
                                    }) : l.keydown(function(e) {
                                        switch (e.which) {
                                            case 13:
                                                return !1;
                                            case 9:
                                            case 16:
                                            case 37:
                                            case 38:
                                            case 39:
                                            case 40:
                                            case 27:
                                                break;
                                            default:
                                                k && clearTimeout(k), k = setTimeout(function() {
                                                    H()
                                                }, N.autosearchDelay)
                                        }
                                    }));
                                    break;
                                case "custom":
                                    v.append("");
                                    try {
                                        if (!$.isFunction(c.custom_element)) throw "e1";
                                        var R = c.custom_element.call(_, void 0 !== c.defaultValue ? c.defaultValue : "", c);
                                        if (!R) throw "e2";
                                        R = $(R).addClass("customelement"), f.find("span[name='" + (n.index || n.name) + "']").append(R)
                                    } catch (e) {
                                        "e1" === e && O.call(_, A, "function 'custom_element' " + M.nodefined, T), "e2" === e ? O.call(_, A, "function 'custom_element' " + M.novalue, T) : O.call(_, A, "string" == typeof e ? e : e.message, T)
                                    }
                            }
                        }
                        p.append(f), p.find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function() {
                            $(this).addClass(B)
                        }, function() {
                            $(this).removeClass(B)
                        }), X.append(p), N.searchOperators || m.hide()
                    }), $(h.hDiv).find(">div>.ui-grid-htable>thead").append(X), $.each(Y, function() {
                        jgrid.bindEv.call(_, this.elem, this.options)
                    }), N.searchOperators && ($(".soptclass", X).click(function(e) {
                        var t = $(this).offset();
                        ! function(i, e, t) {
                            $("#sopt_menu").remove(), e = parseInt(e, 10), t = parseInt(t, 10) + 18;
                            var r, a, o = 0,
                                l = [],
                                n = $(i).data("soper"),
                                s = $(i).data("colname"),
                                d = $(".ui-grid-view").css("font-size") || "11px",
                                c = "
";
                            if (void 0 !== (o = G.iColByName[s])) {
                                var u, p, f, h, g, m = w[o],
                                    v = $.extend({}, m.searchoptions);
                                for (v.sopt || (v.sopt = [], v.sopt[0] = "select" === m.stype || "checkbox" === m.stype ? "eq" : N.defaultSearch), $.each(W, function() {
                                        l.push(this.oper)
                                    }), null != U && $.each(U, function(e) {
                                        l.push(e)
                                    }), o = 0; o < v.sopt.length; o++) f = v.sopt[o], -1 !== (a = $.inArray(f, l)) && (void 0 !== (u = W[a]) ? (h = N.operands[f], g = u.text) : null != U && (h = (p = U[f]).operand, g = p.text), r = n === f ? y : "", c += '
' + b(h) + "    " + b(g) + "
");
                                c += "
", $("body").append(c), $("#sopt_menu > li > a").hover(function() {
                                    $(this).addClass(B)
                                }, function() {
                                    $(this).removeClass(B)
                                }).click(function() {
                                    var e = $(this).attr("value"),
                                        t = $(this).data("oper");
                                    if (I.triggerHandler("jqGridToolbarSelectOper", [e, t, i]), $("#sopt_menu").hide(), $(i).data("soper", e).text(t), !0 === N.autosearch) {
                                        var r = $(i).parent().next().children()[0];
                                        ($(r).val() || "nu" === e || "nn" === e || 0 <= $.inArray(e, G.customUnaryOperations)) && H()
                                    }
                                })
                            }
                        }(this, t.left, t.top), e.stopPropagation()
                    }), $("body").on("click", function(e) {
                        "soptclass" !== e.target.className && $("#sopt_menu").hide()
                    })), $(".clearsearchclass", X).click(function() {
                        var e, t, r = $(this).closest(".ui-search-clear"),
                            i = r.siblings(".ui-search-oper"),
                            a = i.children("a"),
                            o = a.data("soper"),
                            l = parseInt(i.data("colindex"), 10),
                            n = r.siblings(".ui-search-input"),
                            s = w[l],
                            d = $.extend({}, s.searchoptions || {}),
                            c = d.defaultValue || "";
                        switch (s.stype) {
                            case "select":
                                c ? n.find("select").val(c) : n.find("select")[0].selectedIndex = 0;
                                break;
                            case "checkbox":
                                V(n.find("input[type=checkbox]"), -1);
                                break;
                            default:
                                n.find("input").val(c)
                        }("nu" === o || "nn" === o || 0 <= $.inArray(o, G.customUnaryOperations)) && (e = d.sopt ? d.sopt[0] : "select" === s.stype || "checkbox" === s.stype ? "eq" : N.defaultSearch, t = null != U && null != U[e] ? U[e].operand : N.operands[e] || "", a.data("soper", e).text(t)), !0 === N.autosearch && H()
                    }), _.ftoolbar = !0, _.triggerToolbar = H, _.clearToolbar = function(e) {
                        var o, l = {},
                            n = 0;
                        e = "boolean" != typeof e || e, $.each(w, function() {
                            var t, r, e = this,
                                i = $(g(e.name), !0 === e.frozen && !0 === G.frozenColumns ? h.fhDiv : h.hDiv),
                                a = e.searchoptions || {};
                            switch (void 0 !== a.defaultValue && (t = a.defaultValue), o = e.index || e.name, e.stype) {
                                case "checkbox":
                                    V(i, -1);
                                    break;
                                case "select":
                                    if (r = !(0 < i.length && i[0].multiple), i.find("option").each(function(e) {
                                            if (this.selected = 0 === e && r, $(this).val() === t) return !(this.selected = !0)
                                        }), void 0 !== t) l[o] = t, n++;
                                    else try {
                                        delete G.postData[o]
                                    } catch (e) {}
                                    break;
                                case "text":
                                    if (i.val(t || ""), void 0 !== t) l[o] = t, n++;
                                    else try {
                                        delete G.postData[o]
                                    } catch (e) {}
                                    break;
                                case "custom":
                                    $.isFunction(a.custom_value) && 0 < i.length && "SPAN" === i[0].nodeName.toUpperCase() && (void 0 === t && (t = ""), a.custom_value.call(_, i.children(".customelement").first(), "set", t))
                            }
                        });
                        var t, r = 0 < n;
                        if (G.resetsearch = !0, N.stringResult || N.searchOperators || "local" === G.datatype) {
                            var i = '{"groupOp":"' + N.groupOp + '","rules":[',
                                a = 0;
                            $.each(l, function(e, t) {
                                0 < a && (i += ","), i += '{"field":"' + e + '",', i += '"op":"eq",', i += '"data":"' + (t += "").replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"}', a++
                            }), i += "]}", G.postData[N.sFilter] = i, $.each([N.sField, N.sValue, N.sOper], function(e, t) {
                                G.postData.hasOwnProperty(t) && delete G.postData[t]
                            })
                        } else $.extend(G.postData, l);
                        G.searchurl && (t = G.url, I.jqGrid("setGridParam", {
                            url: G.searchurl
                        }));
                        var s = "stop" === I.triggerHandler("jqGridToolbarBeforeClear");
                        !s && $.isFunction(N.beforeClear) && (s = N.beforeClear.call(_)), s || e && I.jqGrid("setGridParam", {
                            search: r
                        }).trigger("reloadGrid", [$.extend({
                            page: 1
                        }, N.reloadGridResetOptions || {})]), t && I.jqGrid("setGridParam", {
                            url: t
                        }), I.triggerHandler("jqGridToolbarAfterClear"), $.isFunction(N.afterClear) && N.afterClear.call(_)
                    }, _.toggleToolbar = function() {
                        var e = $("tr.ui-search-toolbar", h.hDiv),
                            t = !0 === G.frozenColumns && $("tr.ui-search-toolbar", h.fhDiv);
                        "none" === e.css("display") ? (e.show(), t && t.show()) : (e.hide(), t && t.hide()), !0 === G.frozenColumns && (I.jqGrid("destroyFrozenColumns"), I.jqGrid("setFrozenColumns"))
                    }, !0 === G.frozenColumns && (I.jqGrid("destroyFrozenColumns"), I.jqGrid("setFrozenColumns")), I.on("jqGridRefreshFilterValues.filterToolbar" + (N.loadFilterDefaults ? " jqGridAfterLoadComplete.filterToolbar" : ""), function() {
                        var e, t, r, i, a, o, l, n = c(!0) || {};
                        if (N.stringResult || N.searchOperators || "local" === G.datatype || !G.search) {
                            for (e in n)
                                if (n.hasOwnProperty(e) && (t = n[e], o = (r = $(g(e))).closest("th.ui-th-column"), 0 < r.length && 0 < o.length)) {
                                    if (l = (G.colModel[o[0].cellIndex] || {}).searchoptions || {}, "SELECT" === r[0].tagName.toUpperCase() && r[0].multiple) r.val(t.data.split(G.inFilterSeparator || ","));
                                    else if (r.is("input[type=checkbox]")) {
                                        var s = m(l);
                                        V(r, t.data === s.on ? 1 : t.data === s.off ? 0 : -1)
                                    } else if (0 < r.find(".customelement").length && $.isFunction(l.custom_value)) {
                                        var d = l.custom_value.call(_, r.find(".customelement").first(), "get");
                                        "" === t.data && void 0 !== l.defaultValue && (t.data = l.defaultValue), void 0 === d && (d = ""), t.data !== d && String(t.data) !== String(d) && l.custom_value.call(_, r.find(".customelement").first(), "set", t.data)
                                    } else "" === t.data && void 0 !== l.defaultValue && (t.data = l.defaultValue), $.trim(r.val()) !== String(t.data) && r.val(t.data);
                                    (i = r.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass")).data("soper", t.op), i.text(N.operands[t.op] || (G.customSortOperations[t.op] || {}).operand)
                                }
                            for (a = 0; a < G.colModel.length; a++) e = G.colModel[a].name, n.hasOwnProperty(e) || $(g(e)).val("")
                        }
                    })
                }
            })
        },
        destroyFilterToolbar: function() {
            return this.each(function() {
                var e = this;
                e.ftoolbar && (e.triggerToolbar = null, e.clearToolbar = null, e.toggleToolbar = null, e.ftoolbar = !1, $(e.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(), !0 === e.p.frozenColumns && $(e).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))
            })
        },
        destroyGroupHeader: function(c) {
            return void 0 === c && (c = !0), this.each(function() {
                var e, t, r, i, a, o = this.grid,
                    l = this.p.colModel,
                    n = $("table.ui-grid-htable thead", o.hDiv);
                if (o) {
                    $(this).off(".setGroupHeaders");
                    var s = $("", {
                            role: "row"
                        }).addClass("ui-grid-labels"),
                        d = o.headers;
                    for (e = 0, t = d.length; e < t; e++) {
                        a = l[e].hidden ? "none" : "", r = $(d[e].el).width(d[e].width).css("display", a);
                        try {
                            r.removeAttr("rowSpan")
                        } catch (e) {
                            r.attr("rowSpan", 1)
                        }
                        s.append(r), 0 < (i = r.children("span.ui-grid-resize")).length && (i[0].style.height = ""), r.children("div")[0].style.top = ""
                    }
                    $(n).children("tr.ui-grid-labels").remove(), $(n).prepend(s), !0 === c && $(this).jqGrid("setGridParam", {
                        groupHeader: null
                    })
                }
            })
        },
        setGroupHeaders: function(F) {
            return F = $.extend({
                useColSpanStyle: !1,
                applyLabelClasses: !0,
                groupHeaders: []
            }, F || {}), this.each(function() {
                this.p.groupHeader = F;
                var e, t, r, i, a, o, l, n, s, d, c, u, p, f, h = this,
                    g = 0,
                    m = h.p,
                    v = m.colModel,
                    b = v.length,
                    w = h.grid.headers,
                    y = $("table.ui-grid-htable", h.grid.hDiv),
                    x = jgrid.isCellClassHidden,
                    j = y.children("thead").children("tr.ui-grid-labels"),
                    C = j.last().addClass("jqg-second-row-header"),
                    D = y.children("thead"),
                    S = y.find(".jqg-first-row-header");
                void 0 === S[0] ? S = $("", {
                    role: "row",
                    "aria-hidden": "true"
                }).addClass("jqg-first-row-header").css("height", "auto") : S.empty();
                var q = function(e, t) {
                    var r;
                    for (r = 0; r < t.length; r++)
                        if (t[r].startColumnName === e) return t[r];
                    return 0
                };
                for ($(h).prepend(D), r = $("", {
                        role: "row"
                    }).addClass("ui-grid-labels jqg-third-row-header"), e = 0; e < b; e++)
                    if (a = w[e].el, o = $(a), t = v[e], l = {
                            height: "0",
                            width: w[e].width + "px",
                            display: t.hidden ? "none" : ""
                        }, $("", {
                            role: "gridcell"
                        }).css(l).addClass("ui-first-th-" + m.direction + (F.applyLabelClasses ? " " + (t.labelClasses || "") : "")).appendTo(S), a.style.width = "", f = getGuiStyles.call(h, "colHeaders", "ui-th-column-header ui-th-" + m.direction + " " + (F.applyLabelClasses && t.labelClasses || "")), s = q(t.name, F.groupHeaders)) {
                        for (d = s.numberOfColumns, c = s.titleText, n = u = 0; n < d && e + n < b; n++) v[e + n].hidden || x(v[e + n].classes) || u++;
                        i = $("").addClass(f).html(c || " "), 0 < u && i.attr("colspan", String(u)), m.headertitles && i.attr("title", i.text()), 0 === u && i.hide(), o.before(i), r.append(a), g = d - 1
                    } else 0 === g ? F.useColSpanStyle ? o.attr("rowspan", j.length + 1) : ($("").addClass(f).css({
                        display: t.hidden ? "none" : "",
                        "border-top": "0 none"
                    }).insertBefore(o), r.append(a)) : (r.append(a), g--);
                (p = $(h).children("thead")).prepend(S), r.insertAfter(C), y.prepend(p), $(h).triggerHandler("jqGridAfterSetGroupHeaders")
            })
        },
        getNumberOfFrozenColumns: function() {
            var e = this;
            if (0 === e.length) return 0;
            var t, r = (e = e[0]).p.colModel,
                i = r.length,
                a = -1;
            for (t = 0; t < i && !0 === r[t].frozen; t++) a = t;
            return a + 1
        },
        setFrozenColumns: function(R) {
            return R = R || {}, this.each(function() {
                var r = this,
                    a = $(r),
                    v = r.p,
                    o = r.grid;
                if (o && null != v && !0 !== v.frozenColumns) {
                    var b, e, t = v.colModel,
                        i = t.length,
                        l = -1,
                        n = !1,
                        s = [],
                        d = jqID(v.id),
                        c = getGuiStyles.call(r, "states.hover");
                    if (!0 !== v.subGrid && !0 !== v.treeGrid && !v.scroll) {
                        for (b = 0; b < i && !0 === t[b].frozen; b++) n = !0, l = b, s.push("#jqgh_" + d + "_" + jqID(t[b].name));
                        if (v.sortable) {
                            e = $(o.hDiv).find(".ui-grid-htable .ui-grid-labels");
                            try {
                                e.sortable("destroy")
                            } catch (e) {}
                            a.jqGrid("setGridParam", {
                                sortable: {
                                    options: {
                                        items: 0 < s.length ? ">th:not(:has(" + s.join(",") + "),:hidden)" : ">th:not(:hidden)"
                                    }
                                }
                            }), a.jqGrid("sortableColumns", e)
                        }
                        if (0 <= l && n) {
                            var u = v.caption ? $(o.cDiv).outerHeight() : 0,
                                p = $(".ui-grid-htable", v.gView).height();
                            v.toppager && (u += $(o.topDiv).outerHeight()), !0 === v.toolbar[0] && "bottom" !== v.toolbar[1] && (u += $(o.uDiv).outerHeight()), o.fhDiv = $(""), o.fbDiv = $(""), $(v.gView).append(o.fhDiv);
                            var f = $(".ui-grid-htable", v.gView).clone(!0),
                                h = f[0].tHead.rows;
                            if (v.groupHeader) {
                                $(h[0].cells).filter(":gt(" + l + ")").remove(), $(h).filter(".jqg-third-row-header").each(function() {
                                    $(this).children("th[id]").each(function() {
                                        var e, t = $(this).attr("id");
                                        t && t.substr(0, r.id.length + 1) === r.id + "_" && (e = t.substr(r.id.length + 1), v.iColByName[e] > l && $(this).remove())
                                    })
                                });
                                var g, m = -1,
                                    w = -1;
                                $(h).filter(".jqg-second-row-header").children("th").each(function() {
                                    if (g = parseInt($(this).attr("colspan") || 1, 10), 1 < parseInt($(this).attr("rowspan") || 1, 10) ? (m++, w++) : g && (m += g, w++), m === l) return !1
                                }), m !== l && (w = l), $(h).filter(".jqg-second-row-header,.ui-search-toolbar").each(function() {
                                    $(this).children(":gt(" + w + ")").remove()
                                })
                            } else $(h).each(function() {
                                $(this).children(":gt(" + l + ")").remove()
                            });
                            if ($(f).width(1), $(o.fhDiv).append(f).scroll(function() {
                                    this.scrollLeft = 0
                                }), v.footerrow) {
                                var y = $(".ui-grid-bdiv", v.gView).height();
                                o.fsDiv = $(""), $(v.gView).append(o.fsDiv);
                                var x = $(".ui-grid-ftable", v.gView).clone(!0);
                                $("tr", x).each(function() {
                                    $("td:gt(" + l + ")", this).remove()
                                }), $(x).width(1), $(o.fsDiv).append(x)
                            }
                            $(v.gView).append(o.fbDiv), $(o.bDiv).scroll(function() {
                                $(o.fbDiv).scrollTop($(this).scrollTop())
                            }), $(o.fbDiv).on("mousewheel.setFrozenColumns DOMMouseScroll.setFrozenColumns", function(e) {
                                o.bDiv.scrollTop += $.isFunction(R.mouseWheel) ? R.mouseWheel.call(r, e) : "mousewheel" === e.type ? -e.originalEvent.wheelDelta / 10 : 6 * e.originalEvent.detail
                            }), !0 === v.hoverrows && $(v.idSel).off("mouseover.jqGrid mouseout.jqGrid");
                            var j = function(e, t) {
                                    var r = e.height();
                                    1 <= Math.abs(r - t) && 0 < t && (e.height(t), r = e.height(), 1 <= Math.abs(t - r) && e.height(t + Math.round(t - r)))
                                },
                                C = function(e, t) {
                                    var r = e.width();
                                    1 <= Math.abs(r - t) && (e.width(t), r = e.width(), 1 <= Math.abs(t - r) && e.width(t + Math.round(t - r)))
                                },
                                D = function(e, t, r, i) {
                                    var a, o, l, n, s, d, c, u, p, f, h, g, m = $(t).position().top;
                                    if (null != e && 0 < e.length) {
                                        if (e[0].scrollTop = t.scrollTop, e.css("rtl" === v.direction ? {
                                                top: m,
                                                right: 0
                                            } : {
                                                top: m,
                                                left: 0
                                            }), l = e.children("table").children("thead").children("tr"), 0 === (n = $(t).children("div").children("table").children("thead").children("tr")).length && 0 < e.children("table").length && (l = $(e.children("table")[0].rows), n = $($(t).children("div").children("table")[0].rows)), f = 0 < (o = Math.min(l.length, n.length)) ? $(l[0]).position().top : 0, h = 0 < o ? $(n[0]).position().top : 0, 0 <= r)
                                            for (0 <= i && (o = Math.min(i + 1, o)), a = r; a < o; a++)
                                                if ("none" !== (s = $(n[a])).css("display") && s.is(":visible")) {
                                                    if (m = s.position().top, c = (d = $(l[a])).position().top, u = s.height(), null != v.groupHeader && v.groupHeader.useColSpanStyle)
                                                        for (g = s[0].cells, b = 0; b < g.length; b++) null != (p = g[b]) && "TH" === p.nodeName.toUpperCase() && (u = Math.max(u, $(p).height()));
                                                    j(d, u + (m - h) + (f - c))
                                                }
                                        j(e, t.clientHeight)
                                    }
                                },
                                S = {
                                    resizeDiv: !0,
                                    resizedRows: {
                                        iRowStart: 0,
                                        iRowEnd: -1
                                    }
                                },
                                q = {
                                    header: S,
                                    resizeFooter: !0,
                                    body: S
                                };
                            a.on("jqGridAfterGridComplete.setFrozenColumns", function() {
                                $(v.idSel + "_frozen").remove(), $(o.fbDiv).height(o.hDiv.clientHeight);
                                var e = $(this).clone(!0),
                                    t = e[0].rows,
                                    r = a[0].rows;
                                if ($(t).filter("tr[role=row]").each(function() {
                                        $(this.cells).filter("td[role=gridcell]:gt(" + l + ")").remove()
                                    }), o.fbRows = t, e.width(1).attr("id", v.id + "_frozen"), e.appendTo(o.fbDiv), !0 === v.hoverrows) {
                                    var i = function(e, t, r) {
                                        $(e)[t](c), $(r[e.rowIndex])[t](c)
                                    };
                                    $(t).filter(".jqgrow").hover(function() {
                                        i(this, "addClass", r)
                                    }, function() {
                                        i(this, "removeClass", r)
                                    }), $(r).filter(".jqgrow").hover(function() {
                                        i(this, "addClass", t)
                                    }, function() {
                                        i(this, "removeClass", t)
                                    })
                                }
                                D(o.fhDiv, o.hDiv, 0, -1), D(o.fbDiv, o.bDiv, 0, -1), o.sDiv && D(o.fsDiv, o.sDiv, 0, -1)
                            });
                            var F = function(e) {
                                $(o.fbDiv).scrollTop($(o.bDiv).scrollTop()), e.header.resizeDiv && D(o.fhDiv, o.hDiv, e.header.resizedRows.iRowStart, e.header.resizedRows.iRowEnd), e.body.resizeDiv && D(o.fbDiv, o.bDiv, e.body.resizedRows.iRowStart, e.body.resizedRows.iRowEnd), e.resizeFooter && o.sDiv && e.resizeFooter && D(o.fsDiv, o.sDiv, 0, -1);
                                var t = o.fhDiv[0].clientWidth;
                                e.header.resizeDiv && null != o.fhDiv && 1 <= o.fhDiv.length && j($(o.fhDiv), o.hDiv.clientHeight), e.body.resizeDiv && null != o.fbDiv && 0 < o.fbDiv.length && C($(o.fbDiv), t), e.resizeFooter && null != o.fsDiv && 0 <= o.fsDiv.length && C($(o.fsDiv), t)
                            };
                            $(v.gBox).on("resizestop.setFrozenColumns", function() {
                                setTimeout(function() {
                                    F(q)
                                }, 50)
                            }), a.on("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns", function(e, t) {
                                var r = a.jqGrid("getInd", t);
                                F({
                                    header: {
                                        resizeDiv: !1,
                                        resizedRows: {
                                            iRowStart: -1,
                                            iRowEnd: -1
                                        }
                                    },
                                    resizeFooter: !0,
                                    body: {
                                        resizeDiv: !0,
                                        resizedRows: {
                                            iRowStart: r,
                                            iRowEnd: r
                                        }
                                    }
                                })
                            }), a.on("jqGridResizeStop.setFrozenColumns", function() {
                                F(q)
                            }), a.on("jqGridResetFrozenHeights.setFrozenColumns", function(e, t) {
                                F(t || q)
                            }), o.hDiv.loading || setTimeout(function() {
                                a.triggerHandler("jqGridAfterGridComplete")
                            }, 0), v.frozenColumns = !0
                        }
                    }
                }
            })
        },
        destroyFrozenColumns: function() {
            return this.each(function() {
                var e = $(this),
                    t = this.grid,
                    r = this.p,
                    i = jqID(r.id);
                if (t && !0 === r.frozenColumns) {
                    if ($(t.fhDiv).remove(), $(t.fbDiv).off(".setFrozenColumns"), $(t.fbDiv).remove(), t.fhDiv = null, t.fbDiv = null, t.fbRows = null, r.footerrow && ($(t.fsDiv).remove(), t.fsDiv = null), e.off(".setFrozenColumns"), !0 === r.hoverrows) {
                        var a, o = getGuiStyles.call(this, "states.hover");
                        e.on("mouseover.jqGrid", function(e) {
                            a = $(e.target).closest("tr.jqgrow"), "ui-subgrid" !== $(a).attr("class") && $(a).addClass(o)
                        }).on("mouseout.jqGrid", function(e) {
                            a = $(e.target).closest("tr.jqgrow"), $(a).removeClass(o)
                        })
                    }
                    if (r.frozenColumns = !1, r.sortable) {
                        var l = $(t.hDiv).find(".ui-grid-htable .ui-grid-labels");
                        l.sortable("destroy"), e.jqGrid("setGridParam", {
                            sortable: {
                                options: {
                                    items: ">th:not(:has(#jqgh_" + i + "_cb,#jqgh_" + i + "_rn,#jqgh_" + i + "_subgrid),:hidden)"
                                }
                            }
                        }), e.jqGrid("sortableColumns", l)
                    }
                }
            })
        }
    }), $.fn.jqFilter = function(e) {
        if ("string" == typeof e) {
            var t = $.fn.jqFilter[e];
            if (!t) throw "jqFilter - No such method: " + e;
            var r = $.makeArray(arguments).slice(1);
            return t.apply(this, r)
        }
        var E = $.extend(!0, {
            filter: null,
            columns: [],
            onChange: null,
            afterRedraw: null,
            error: !1,
            errmsg: "",
            errorcheck: !0,
            showQuery: !0,
            sopt: null,
            ops: [],
            operands: null,
            numopts: ["eq", "ne", "lt", "le", "gt", "ge", "nu", "nn", "in", "ni"],
            stropts: ["eq", "ne", "bw", "bn", "ew", "en", "cn", "nc", "nu", "nn", "in", "ni"],
            strarr: ["text", "string", "blob"],
            groupOps: [{
                op: "AND",
                text: "AND"
            }, {
                op: "OR",
                text: "OR"
            }],
            groupButton: !0,
            ruleButtons: !0,
            direction: "ltr"
        }, jgrid.filter, e || {});
        return this.each(function() {
            if (!this.filter) {
                null !== (this.p = E).filter && void 0 !== E.filter || (E.filter = {
                    groupOp: E.groupOps[0].op,
                    rules: [],
                    groups: []
                });
                var e, t, r = E.columns.length,
                    _ = /msie/i.test(navigator.userAgent) && !window.opera,
                    I = $.isFunction,
                    i = null != jgrid.defaults && I(jgrid.defaults.fatalError) ? jgrid.defaults.fatalError : alert,
                    G = function() {
                        return $("#" + jgrid.jqID(E.id))[0] || null
                    },
                    O = function(e, t) {
                        return $(G()).jqGrid("getGuiStyles", e, t || "")
                    },
                    k = function(e) {
                        return $(G()).jqGrid("getGridRes", "search." + e)
                    },
                    N = function(e) {
                        var t = G(),
                            r = t.p.iColByName[e];
                        return void 0 !== r ? {
                            cm: t.p.colModel[r],
                            iCol: r
                        } : void 0 !== (r = t.p.iPropByName[e]) ? {
                            cm: t.p.additionalProperties[r],
                            iCol: r,
                            isAddProp: !0
                        } : {
                            cm: null,
                            iCol: -1
                        }
                    },
                    b = O("states.error"),
                    a = O("dialog.content");
                if (E.initFilter = $.extend(!0, {}, E.filter), r) {
                    for (e = 0; e < r; e++)(t = E.columns[e]).stype ? t.inputtype = t.stype : t.inputtype || (t.inputtype = "text"), t.sorttype ? t.searchtype = t.sorttype : t.searchtype || (t.searchtype = "string"), void 0 === t.hidden && (t.hidden = !1), t.label || (t.label = t.name), t.cmName = t.name, t.index && (t.name = t.index), t.hasOwnProperty("searchoptions") || (t.searchoptions = {}), t.hasOwnProperty("searchrules") || (t.searchrules = {});
                    E.showQuery && $(this).append("
");
                    var n = function(e, t) {
                        var r = [!0, ""],
                            i = G();
                        if (I(t.searchrules)) r = t.searchrules.call(i, e, t);
                        else if (jgrid && jgrid.checkValues) try {
                            r = jgrid.checkValues.call(i, e, -1, t.searchrules, t.label)
                        } catch (e) {}
                        r && r.length && !1 === r[0] && (E.error = !r[0], E.errmsg = r[1])
                    };
                    this.onchange = function() {
                        return E.error = !1, E.errmsg = "", !!I(E.onChange) && E.onChange.call(G(), E, this)
                    }, this.reDraw = function() {
                        $("table.group:first", this).remove();
                        var e = this.createTableForGroup(E.filter, null);
                        $(this).append(e), I(E.afterRedraw) && E.afterRedraw.call(G(), E, this)
                    }, this.createTableForGroup = function(i, e) {
                        var a, o = this,
                            t = $("
"),
                            r = "left";
                        "rtl" === E.direction && (r = "right", t.attr("dir", "rtl")), null === e && t.append("");
                        var l = $("");
                        t.append(l);
                        var n = $("");
                        if (l.append(n), !0 === E.ruleButtons) {
                            var s = $("");
                            n.append(s);
                            var d, c = "";
                            for (a = 0; a < E.groupOps.length; a++) d = i.groupOp === o.p.groupOps[a].op ? " selected='selected'" : "", c += "" + o.p.groupOps[a].text + "";
                            s.append(c).on("change", function() {
                                i.groupOp = $(s).val(), o.onchange()
                            })
                        }
                        var u, p, f, h = "";
                        if (E.groupButton && (h = $("")).on("click", function() {
                                return void 0 === i.groups && (i.groups = []), i.groups.push({
                                    groupOp: E.groupOps[0].op,
                                    rules: [],
                                    groups: []
                                }), o.reDraw(), o.onchange(), !1
                            }), n.append(h), !0 === E.ruleButtons) {
                            var g, m = $("");
                            m.on("click", function() {
                                var e, t, r;
                                for (void 0 === i.rules && (i.rules = []), a = 0; a < o.p.columns.length; a++)
                                    if (e = void 0 === o.p.columns[a].search || o.p.columns[a].search, t = !0 === o.p.columns[a].hidden, !0 === o.p.columns[a].searchoptions.searchhidden && e || e && !t) {
                                        g = o.p.columns[a];
                                        break
                                    }
                                return r = g.searchoptions.sopt ? g.searchoptions.sopt : o.p.sopt ? o.p.sopt : -1 !== $.inArray(g.searchtype, o.p.strarr) ? o.p.stropts : o.p.numopts, i.rules.push({
                                    field: g.name,
                                    op: r[0],
                                    data: ""
                                }), o.reDraw(), !1
                            }), n.append(m)
                        }
                        if (null !== e) {
                            var v = $("");
                            n.append(v), v.on("click", function() {
                                for (a = 0; a < e.groups.length; a++)
                                    if (e.groups[a] === i) {
                                        e.groups.splice(a, 1);
                                        break
                                    }
                                return o.reDraw(), o.onchange(), !1
                            })
                        }
                        if (void 0 !== i.groups)
                            for (a = 0; a < i.groups.length; a++) u = $(""), t.append(u), p = $(""), u.append(p), (f = $("")).append(this.createTableForGroup(i.groups[a], i)), u.append(f);
                        if (void 0 === i.groupOp && (i.groupOp = o.p.groupOps[0].op), void 0 !== i.rules)
                            for (a = 0; a < i.rules.length; a++) t.append(this.createTableRowForRule(i.rules[a], i));
                        return t
                    }, this.createTableRowForRule = function(h, e) {
                        var t, g, r, i, m = this,
                            v = G(),
                            a = $(""),
                            o = "";
                        a.append("");
                        var l = $("");
                        a.append(l);
                        var b, w = $(""),
                            y = [];
                        l.append(w), w.on("change", function() {
                            h.field = $(w).val();
                            var e, t, r = $(this).parents("tr:first");
                            for (t = 0; t < m.p.columns.length; t++)
                                if (m.p.columns[t].name === h.field) {
                                    e = m.p.columns[t];
                                    break
                                }
                            if (e) {
                                var i = $.extend({}, e.editoptions || {});
                                delete i.readonly, delete i.disabled;
                                var a = $.extend({}, i || {}, e.searchoptions || {}, N(e.cmName), {
                                    id: jgrid.randId(),
                                    name: e.name,
                                    mode: "search"
                                });
                                a.column = e, _ && "text" === e.inputtype && (a.size || (a.size = 10));
                                var o = jgrid.createEl.call(v, e.inputtype, $.extend({}, a, a.attr || {}), "", !0, m.p.ajaxSelectOptions || {}, !0);
                                $(o).addClass(O("searchDialog.elem", "input-elm")), g = a.sopt ? a.sopt : m.p.sopt ? m.p.sopt : -1 !== $.inArray(e.searchtype, m.p.strarr) ? m.p.stropts : m.p.numopts;
                                var l, n, s, d = "",
                                    c = 0;
                                for (y = [], $.each(m.p.ops, function() {
                                        y.push(this.oper)
                                    }), m.p.cops && $.each(m.p.cops, function(e) {
                                        y.push(e)
                                    }), t = 0; t < g.length; t++) n = g[t], -1 !== (b = $.inArray(g[t], y)) && (s = void 0 !== (l = m.p.ops[b]) ? l.text : m.p.cops[n].text, 0 === c && (h.op = n), d += "" + s + "", c++);
                                if ($(".selectopts", r).empty().append(d), $(".selectopts", r)[0].selectedIndex = 0, jgrid.msie && jgrid.msiever() < 9) {
                                    var u = parseInt($("select.selectopts", r)[0].offsetWidth, 10) + 1;
                                    $(".selectopts", r).width(u), $(".selectopts", r).css("width", "auto")
                                }
                                if ($(".data", r).empty().append(o), e.createColumnIndex && a.generateDatalist) {
                                    var p = "dl_" + o.id,
                                        f = $(v).jqGrid("generateDatalistFromColumnIndex", e.name);
                                    null != f && 0 < f.length && ($(o).attr("list", p), $(".data", r).append(f.attr("id", p)))
                                }
                                jgrid.bindEv.call(v, o, a), $(".input-elm", r).on("change", a, function(e) {
                                    var t = e.target,
                                        r = e.data.column;
                                    h.data = r && "custom" === r.inputtype && I(r.searchoptions.custom_value) ? r.searchoptions.custom_value.call(v, $(this).find(".customelement").first(), "get") : t.value, $(t).is("input[type=checkbox]") && !$(t).is(":checked") && (h.data = $(t).data("offval")), m.onchange()
                                }), setTimeout(function() {
                                    h.data = $(o).val(), m.onchange()
                                }, 0)
                            }
                        });
                        var n, s, d = 0;
                        for (t = 0; t < m.p.columns.length; t++) n = void 0 === m.p.columns[t].search || m.p.columns[t].search, s = !0 === m.p.columns[t].hidden, (!0 === m.p.columns[t].searchoptions.searchhidden && n || n && !s) && (i = "", h.field === m.p.columns[t].name && (i = " selected='selected'", d = t), o += "" + m.p.columns[t].label + "");
                        w.append(o);
                        var c = $("");
                        a.append(c), r = E.columns[d], _ && "text" === r.inputtype && (r.searchoptions.size || (r.searchoptions.size = 10));
                        var u = $.extend({}, r.editoptions || {});
                        delete u.readonly, delete u.disabled;
                        var p = $.extend({}, u, r.searchoptions || {}, N(r.cmName), {
                            id: jgrid.randId(),
                            name: r.name,
                            mode: "search"
                        });
                        p.column = r;
                        var f = jgrid.createEl.call(v, r.inputtype, $.extend({}, p, p.attr || {}), h.data, !0, m.p.ajaxSelectOptions || {}, !0);
                        ("nu" === h.op || "nn" === h.op || 0 <= $.inArray(h.op, v.p.customUnaryOperations)) && ($(f).attr("readonly", "true"), $(f).attr("disabled", "true"));
                        var x, j, C = $("");
                        for (c.append(C), C.on("change", function() {
                                h.op = $(C).val();
                                var e = $(this).parents("tr:first"),
                                    t = $(".input-elm", e)[0];
                                "nu" === h.op || "nn" === h.op || 0 <= $.inArray(h.op, v.p.customUnaryOperations) ? (h.data = "", "SELECT" !== t.tagName.toUpperCase() && (t.value = ""), t.setAttribute("readonly", "true"), t.setAttribute("disabled", "true")) : ("SELECT" === t.tagName.toUpperCase() && (h.data = t.value), t.removeAttribute("readonly"), t.removeAttribute("disabled")), m.onchange()
                            }), g = r.searchoptions.sopt ? r.searchoptions.sopt : m.p.sopt ? m.p.sopt : -1 !== $.inArray(r.searchtype, m.p.strarr) ? m.p.stropts : m.p.numopts, o = "", $.each(m.p.ops, function() {
                                y.push(this.oper)
                            }), m.p.cops && $.each(m.p.cops, function(e) {
                                y.push(e)
                            }), t = 0; t < g.length; t++) j = g[t], -1 !== (b = $.inArray(g[t], y)) && (x = m.p.ops[b], o += "" + (void 0 !== x ? x.text : m.p.cops[j].text) + "");
                        C.append(o);
                        var D = $("");
                        if (a.append(D), D.append(f), r.createColumnIndex && r.searchoptions.generateDatalist) {
                            var S = "dl_" + f.id,
                                q = $(v).jqGrid("generateDatalistFromColumnIndex", r.name);
                            null != q && 0 < q.length && ($(f).attr("list", S), D.append(q.attr("id", S)))
                        }
                        jgrid.bindEv.call(v, f, r.searchoptions), $(f).addClass(O("searchDialog.elem", "input-elm")).on("change", function() {
                            h.data = "custom" === r.inputtype ? r.searchoptions.custom_value.call(v, $(this).find(".customelement").first(), "get") : $(this).val(), $(this).is("input[type=checkbox]") && !$(this).is(":checked") && (h.data = $(this).data("offval")), $.isArray(h.data) && (h.data = h.data.join(E.inFilterSeparator || ",")), m.onchange()
                        });
                        var F = $("");
                        if (a.append(F), !0 === E.ruleButtons) {
                            var R = $("");
                            F.append(R), R.on("click", function() {
                                for (t = 0; t < e.rules.length; t++)
                                    if (e.rules[t] === h) {
                                        e.rules.splice(t, 1);
                                        break
                                    }
                                return m.reDraw(), m.onchange(), !1
                            })
                        }
                        return a
                    }, this.getStringForGroup = function(e) {
                        var t, r = "(";
                        if (void 0 !== e.groups)
                            for (t = 0; t < e.groups.length; t++) {
                                1 < r.length && (r += " " + e.groupOp + " ");
                                try {
                                    r += this.getStringForGroup(e.groups[t])
                                } catch (e) {
                                    i(e)
                                }
                            }
                        if (void 0 !== e.rules) try {
                            for (t = 0; t < e.rules.length; t++) 1 < r.length && (r += " " + e.groupOp + " "), r += this.getStringForRule(e.rules[t])
                        } catch (e) {
                            i(e)
                        }
                        return "()" === (r += ")") ? "" : r
                    }, this.getStringForRule = function(e) {
                        var t, r, i, a = "",
                            o = "",
                            l = e.data;
                        for (t = 0; t < E.ops.length; t++)
                            if (E.ops[t].oper === e.op) {
                                a = E.operands.hasOwnProperty(e.op) ? E.operands[e.op] : "", o = E.ops[t].oper;
                                break
                            }
                        if ("" === o && null != E.cops)
                            for (i in E.cops)
                                if (E.cops.hasOwnProperty(i) && (o = i, a = E.cops[i].operand, I(E.cops[i].buildQueryValue))) return E.cops[i].buildQueryValue.call(E, {
                                    cmName: e.field,
                                    searchValue: l,
                                    operand: a
                                });
                        for (t = 0; t < E.columns.length; t++)
                            if (E.columns[t].name === e.field) {
                                r = E.columns[t];
                                break
                            }
                        return null == r ? "" : ("bw" !== o && "bn" !== o || (l += "%"), "ew" !== o && "en" !== o || (l = "%" + l), "cn" !== o && "nc" !== o || (l = "%" + l + "%"), "in" !== o && "ni" !== o || (l = " (" + l + ")"), E.errorcheck && n(e.data, r), -1 !== $.inArray(r.searchtype, ["int", "integer", "float", "number", "currency"]) || "nn" === o || "nu" === o || 0 <= $.inArray(o, G().p.customUnaryOperations) ? e.field + " " + a + " " + l : e.field + " " + a + ' "' + l + '"')
                    }, this.resetFilter = function() {
                        E.filter = $.extend(!0, {}, E.initFilter), this.reDraw(), this.onchange()
                    }, this.hideError = function() {
                        $("th." + b, this).html(""), $("tr.error", this).hide()
                    }, this.showError = function() {
                        $("th." + b, this).html(E.errmsg), $("tr.error", this).show()
                    }, this.toUserFriendlyString = function() {
                        return this.getStringForGroup(E.filter)
                    }, this.toString = function() {
                        var i = this;

                        function a(e) {
                            if (i.p.errorcheck) {
                                var t, r;
                                for (t = 0; t < i.p.columns.length; t++)
                                    if (i.p.columns[t].name === e.field) {
                                        r = i.p.columns[t];
                                        break
                                    }
                                r && n(e.data, r)
                            }
                            return e.op + "(item." + e.field + ",'" + e.data + "')"
                        }
                        return function e(t) {
                            var r, i = "(";
                            if (void 0 !== t.groups)
                                for (r = 0; r < t.groups.length; r++) 1 < i.length && ("OR" === t.groupOp ? i += " || " : i += " && "), i += e(t.groups[r]);
                            if (void 0 !== t.rules)
                                for (r = 0; r < t.rules.length; r++) 1 < i.length && ("OR" === t.groupOp ? i += " || " : i += " && "), i += a(t.rules[r]);
                            return "()" == (i += ")") ? "" : i
                        }(E.filter)
                    }, this.reDraw(), E.showQuery && this.onchange(), this.filter = !0
                }
            }
        })
    }, $.extend($.fn.jqFilter, {
        toSQLString: function() {
            var e = "";
            return this.each(function() {
                e = this.toUserFriendlyString()
            }), e
        },
        filterData: function() {
            var e;
            return this.each(function() {
                e = this.p.filter
            }), e
        },
        getParameter: function(e) {
            return void 0 !== e && this.p.hasOwnProperty(e) ? this.p[e] : this.p
        },
        resetFilter: function() {
            return this.each(function() {
                this.resetFilter()
            })
        },
        addFilter: function(e) {
            "string" == typeof e && (e = $.parseJSON(e)), this.each(function() {
                this.p.filter = e, this.reDraw(), this.onchange()
            })
        }
    });
    var xmlJsonClass = {
        xml2json: function(e, t) {
            9 === e.nodeType && (e = e.documentElement);
            var r = this.removeWhite(e),
                i = this.toObj(r),
                a = this.toJson(i, e.nodeName, "\t");
            return "{\n" + t + (t ? a.replace(/\t/g, t) : a.replace(/\t|\n/g, "")) + "\n}"
        },
        json2xml: function(e, t) {
            var r, s = function(e, t, r) {
                    var i, a, o, l, n = "";
                    if (e instanceof Array)
                        if (0 === e.length) n += r + "<" + t + ">__EMPTY_ARRAY_\n";
                        else
                            for (i = 0, a = e.length; i < a; i += 1) n += r + s(e[i], t, r + "\t") + "\n";
                    else if ("object" == typeof e) {
                        for (l in o = !1, n += r + "<" + t, e) e.hasOwnProperty(l) && ("@" === l.charAt(0) ? n += " " + l.substr(1) + '="' + e[l].toString() + '"' : o = !0);
                        if (n += o ? ">" : "/>", o) {
                            for (l in e) e.hasOwnProperty(l) && ("#text" === l ? n += e[l] : "#cdata" === l ? n += "" : "@" !== l.charAt(0) && (n += s(e[l], l, r + "\t")));
                            n += ("\n" === n.charAt(n.length - 1) ? r : "") + ""
                        }
                    } else "function" == typeof e ? n += r + "<" + t + ">" : (void 0 === e && (e = ""), '""' === e.toString() || 0 === e.toString().length ? n += r + "<" + t + ">__EMPTY_STRING_" : n += r + "<" + t + ">" + e.toString() + "");
                    return n
                },
                i = "";
            for (r in e) e.hasOwnProperty(r) && (i += s(e[r], r, ""));
            return t ? i.replace(/\t/g, t) : i.replace(/\t|\n/g, "")
        },
        toObj: function(e) {
            var t, r, i = {},
                a = /function/i,
                o = 0,
                l = 0,
                n = !1;
            if (1 === e.nodeType) {
                if (e.attributes.length)
                    for (t = 0; t < e.attributes.length; t += 1) i["@" + e.attributes[t].nodeName] = (e.attributes[t].nodeValue || "").toString();
                if (e.firstChild) {
                    for (r = e.firstChild; r; r = r.nextSibling) 1 === r.nodeType ? n = !0 : 3 === r.nodeType && r.nodeValue.match(/[^ \f\n\r\t\v]/) ? o += 1 : 4 === r.nodeType && (l += 1);
                    if (n)
                        if (o < 2 && l < 2)
                            for (this.removeWhite(e), r = e.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? i["#text"] = this.escape(r.nodeValue) : 4 === r.nodeType ? a.test(r.nodeValue) ? i[r.nodeName] = [i[r.nodeName], r.nodeValue] : i["#cdata"] = this.escape(r.nodeValue) : i[r.nodeName] ? i[r.nodeName] instanceof Array ? i[r.nodeName][i[r.nodeName].length] = this.toObj(r) : i[r.nodeName] = [i[r.nodeName], this.toObj(r)] : i[r.nodeName] = this.toObj(r);
                        else e.attributes.length ? i["#text"] = this.escape(this.innerXml(e)) : i = this.escape(this.innerXml(e));
                    else if (o) e.attributes.length ? i["#text"] = this.escape(this.innerXml(e)) : "__EMPTY_ARRAY_" === (i = this.escape(this.innerXml(e))) ? i = "[]" : "__EMPTY_STRING_" === i && (i = "");
                    else if (l)
                        if (1 < l) i = this.escape(this.innerXml(e));
                        else
                            for (r = e.firstChild; r; r = r.nextSibling) {
                                if (a.test(e.firstChild.nodeValue)) {
                                    i = e.firstChild.nodeValue;
                                    break
                                }
                                i["#cdata"] = this.escape(r.nodeValue)
                            }
                }
                e.attributes.length || e.firstChild || (i = null)
            } else 9 === e.nodeType ? i = this.toObj(e.documentElement) : (null != $.jgrid && null != $.jgrid.defaults && $.isFunction($.jgrid.defaults.fatalError) ? $.jgrid.defaults.fatalError : alert)("unhandled node type: " + e.nodeType);
            return i
        },
        toJson: function(e, t, r, i) {
            void 0 === i && (i = !0);
            var a, o, l, n = t ? '"' + t + '"' : "",
                s = "\t",
                d = "\n",
                c = [],
                u = [];
            if (i || (d = s = ""), "[]" === e) n += t ? ":[]" : "[]";
            else if (e instanceof Array) {
                for (o = 0, a = e.length; o < a; o += 1) c[o] = this.toJson(e[o], "", r + s, i);
                n += (t ? ":[" : "[") + (1 < c.length ? d + r + s + c.join("," + d + r + s) + d + r : c.join("")) + "]"
            } else if (null === e) n += (t && ":") + "null";
            else if ("object" == typeof e) {
                for (l in e) e.hasOwnProperty(l) && (u[u.length] = this.toJson(e[l], l, r + s, i));
                n += (t ? ":{" : "{") + (1 < u.length ? d + r + s + u.join("," + d + r + s) + d + r : u.join("")) + "}"
            } else n += "string" == typeof e ? (t && ":") + '"' + e.replace(/\\/g, "\\\\").replace(/\"/g, '\\"') + '"' : (t && ":") + e.toString();
            return n
        },
        innerXml: function(e) {
            var t, r = "",
                a = function(e) {
                    var t, r, i = "";
                    if (1 === e.nodeType) {
                        for (i += "<" + e.nodeName, t = 0; t < e.attributes.length; t += 1) i += " " + e.attributes[t].nodeName + '="' + (e.attributes[t].nodeValue || "").toString() + '"';
                        if (e.firstChild) {
                            for (i += ">", r = e.firstChild; r; r = r.nextSibling) i += a(r);
                            i += ""
                        } else i += "/>"
                    } else 3 === e.nodeType ? i += e.nodeValue : 4 === e.nodeType && (i += "");
                    return i
                };
            if (e.hasOwnProperty("innerHTML")) r = e.innerHTML;
            else
                for (t = e.firstChild; t; t = t.nextSibling) r += a(t);
            return r
        },
        escape: function(e) {
            return e.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r")
        },
        removeWhite: function(e) {
            e.normalize();
            for (var t, r = e.firstChild; r;) 3 === r.nodeType ? r.nodeValue.match(/[^ \f\n\r\t\v]/) ? r = r.nextSibling : (t = r.nextSibling, e.removeChild(r), r = t) : (1 === r.nodeType && this.removeWhite(r), r = r.nextSibling);
            return e
        }
    };
    window.xmlJsonClass = xmlJsonClass;
    var jgridFeedback = jgrid.feedback,
        fullBoolFeedback = jgrid.fullBoolFeedback,
        builderFmButon = jgrid.builderFmButon,
        addFormIcon = function(e, t, r) {
            var i;
            !0 === t[0] && (i = "", "right" === t[1] ? e.addClass("fm-button-icon-right").append(i) : e.addClass("fm-button-icon-left").prepend(i))
        },
        getGuiStateStyles = function(e) {
            return getGuiStyles.call(this, "states." + e)
        },
        hideRowsWithoutVissibleCells = function(e) {
            e.find("tr[data-rowpos]").each(function() {
                var e = 0;
                $(this).children("td").each(function() {
                    "hidden" !== $(this).css("visibility") && e++
                }), e || $(this).hide()
            })
        },
        isEmptyString = function(e) {
            return " " === e || " " === e || 1 === e.length && 160 === e.charCodeAt(0)
        };
    jgrid.extend({
        searchGrid: function(F) {
            return this.each(function() {
                var o = this,
                    l = $(o),
                    n = o.p;
                if (o.grid && null != n) {
                    var s = $.extend(!0, {
                            drag: !0,
                            sField: "searchField",
                            sValue: "searchString",
                            sOper: "searchOper",
                            sFilter: n.prmNames.filters,
                            loadDefaults: !0,
                            beforeShowSearch: null,
                            afterShowSearch: null,
                            onInitializeSearch: null,
                            afterRedraw: null,
                            afterChange: null,
                            closeAfterSearch: !1,
                            closeAfterReset: !1,
                            closeOnEscape: !1,
                            searchOnEnter: !1,
                            multipleSearch: !1,
                            multipleGroup: !1,
                            top: 0,
                            left: 0,
                            removemodal: !0,
                            resize: !0,
                            width: 450,
                            height: "auto",
                            dataheight: "auto",
                            showQuery: !1,
                            errorcheck: !0,
                            sopt: null,
                            stringResult: void 0,
                            onClose: null,
                            onSearch: null,
                            onReset: null,
                            columns: [],
                            tmplNames: null,
                            tmplFilters: null,
                            tmplLabel: " Template: ",
                            showOnLoad: !1,
                            layer: null,
                            operands: {
                                eq: "=",
                                ne: "<>",
                                lt: "<",
                                le: "<=",
                                gt: ">",
                                ge: ">=",
                                bw: "LIKE",
                                bn: "NOT LIKE",
                                in: "IN",
                                ni: "NOT IN",
                                ew: "LIKE",
                                en: "NOT LIKE",
                                cn: "LIKE",
                                nc: "NOT LIKE",
                                nu: "IS NULL",
                                nn: "IS NOT NULL"
                            }
                        }, base.getGridRes.call(l, "search"), jgrid.search || {}, n.searching || {}, F || {}),
                        d = "fbox_" + n.id,
                        e = s.commonIconClass,
                        r = {
                            themodal: "searchmod" + d,
                            modalhead: "searchhd" + d,
                            modalcontent: "searchcnt" + d,
                            resizeAlso: d
                        },
                        t = "#" + jqID(r.themodal),
                        i = n.gBox,
                        a = n.gView,
                        c = $.each,
                        u = n.postData[s.sFilter],
                        p = function() {
                            var e = $.makeArray(arguments);
                            return e.unshift("Search"), e.unshift("Filter"), e.unshift(s), jgridFeedback.apply(o, e)
                        },
                        f = function() {
                            jgrid.hideModal(t, {
                                gb: i,
                                jqm: s.jqModal,
                                onClose: s.onClose,
                                removemodal: s.removemodal
                            })
                        };
                    if ("string" == typeof u && (u = "" !== $.trim(u) ? $.parseJSON(u) : void 0), $(t).remove(), void 0 !== $(t)[0]) q($("#fbox_" + jqID(n.id)));
                    else {
                        var h = $("
").insertBefore(a);
                        "rtl" === n.direction && h.attr("dir", "rtl");
                        var g, m, v = "",
                            b = "",
                            w = !1,
                            y = -1,
                            x = $.extend([], n.colModel),
                            j = builderFmButon.call(o, d + "_search", s.Find, mergeCssClasses(e, s.findDialogIcon), "right"),
                            C = builderFmButon.call(o, d + "_reset", s.Reset, mergeCssClasses(e, s.resetDialogIcon), "left");
                        if (s.showQuery && (v = builderFmButon.call(o, d + "_query", "Query", mergeCssClasses(e, s.queryDialogIcon), "left") + " "), s.searchForAdditionalProperties && c(n.additionalProperties, function() {
                                var e = "string" == typeof this ? {
                                    name: this
                                } : this;
                                e.label || (e.label = e.name), e.isAddProp = !0, x.push(e)
                            }), s.columns.length ? (x = s.columns, g = x[y = 0].index || x[0].name) : c(x, function(e, t) {
                                if (t.label || (t.label = t.isAddProp ? t.name : n.colNames[e]), !w) {
                                    var r = void 0 === t.search || t.search,
                                        i = !0 === t.hidden;
                                    (t.searchoptions && !0 === t.searchoptions.searchhidden && r || r && !i) && (w = !0, g = t.index || t.name, y = e)
                                }
                            }), !u && g || !1 === s.multipleSearch) {
                            var D = "eq";
                            0 <= y && x[y].searchoptions && x[y].searchoptions.sopt ? D = x[y].searchoptions.sopt[0] : s.sopt && s.sopt.length && (D = s.sopt[0]), u = {
                                groupOp: "AND",
                                rules: [{
                                    field: g,
                                    op: D,
                                    data: ""
                                }]
                            }
                        }
                        w = !1, s.tmplNames && s.tmplNames.length && (w = !0, b = s.tmplLabel, b += ""), m = "
" + C + b + "   " + v + j + "
", d = jqID(d), s.gbox = i, s.height = "auto", $(d = "#" + d).jqFilter({
                            columns: x,
                            filter: s.loadDefaults ? u : null,
                            showQuery: s.showQuery,
                            errorcheck: s.errorcheck,
                            sopt: s.sopt,
                            groupButton: s.multipleGroup,
                            ruleButtons: s.multipleSearch,
                            afterRedraw: s.afterRedraw,
                            ops: s.odata,
                            cops: n.customSortOperations,
                            operands: s.operands,
                            ajaxSelectOptions: n.ajaxSelectOptions,
                            groupOps: s.groupOps,
                            onChange: function(e, t) {
                                e.showQuery && $(".query", t).text(t.toUserFriendlyString()), fullBoolFeedback.call(o, s.afterChange, "jqGridFilterAfterChange", $(d), s, e, t)
                            },
                            direction: n.direction,
                            id: n.id
                        }), h.append(m), w && s.tmplFilters && s.tmplFilters.length && $(".ui-template", h).on("change", function() {
                            var e = $(this).val();
                            return "default" === e ? $(d).jqFilter("addFilter", u) : $(d).jqFilter("addFilter", s.tmplFilters[parseInt(e, 10)]), !1
                        }), !0 === s.multipleGroup && (s.multipleSearch = !0), p("onInitialize", $(d)), s.layer ? jgrid.createModal.call(o, r, h, s, a, $(i)[0], "#" + jqID(s.layer), {
                            position: "relative"
                        }) : jgrid.createModal.call(o, r, h, s, a, $(i)[0]), (s.searchOnEnter || s.closeOnEscape) && $(t).keydown(function(e) {
                            var t = $(e.target);
                            return !s.searchOnEnter || 13 !== e.which || t.hasClass("add-group") || t.hasClass("add-rule") || t.hasClass("delete-group") || t.hasClass("delete-rule") || t.hasClass("fm-button") && t.is("[id$=_query]") ? s.closeOnEscape && 27 === e.which ? ($("#" + jqID(r.modalhead)).find(".ui-jqdialog-titlebar-close").click(), !1) : void 0 : ($(d + "_search").click(), !1)
                        }), v && $(d + "_query").on("click", function() {
                            return $(".queryresult", h).toggle(), !1
                        }), void 0 === s.stringResult && (s.stringResult = s.multipleSearch), $(d + "_search").on("click", function() {
                            var e, t = {},
                                r = "",
                                i = $(d),
                                a = i.find(".input-elm");
                            if (a.filter(":focus") && (a = a.filter(":focus")), a.change(), e = i.jqFilter("filterData"), s.errorcheck && (i[0].hideError(), s.showQuery || i.jqFilter("toSQLString"), i[0].p.error)) return i[0].showError(), !1;
                            if (s.stringResult || "local" === n.datatype) {
                                try {
                                    r = JSON.stringify(e)
                                } catch (e) {}
                                "string" == typeof r && (t[s.sFilter] = r, c([s.sField, s.sValue, s.sOper], function() {
                                    t[this] = ""
                                }))
                            } else s.multipleSearch ? (t[s.sFilter] = e, c([s.sField, s.sValue, s.sOper], function() {
                                t[this] = ""
                            })) : (t[s.sField] = e.rules[0].field, t[s.sValue] = e.rules[0].data, t[s.sOper] = e.rules[0].op, t[s.sFilter] = "");
                            return $.extend(n.postData, t), fullBoolFeedback.call(o, s.onSearch, "jqGridFilterSearch", n.filters) && (n.search = !0, l.trigger("reloadGrid", [$.extend({
                                page: 1
                            }, s.reloadGridSearchOptions || {})])), s.closeAfterSearch && f(), !1
                        }), $(d + "_reset").on("click", function() {
                            var e = {},
                                t = $(d);
                            return n.search = !1, !(n.resetsearch = !0) === s.multipleSearch ? e[s.sField] = e[s.sValue] = e[s.sOper] = "" : e[s.sFilter] = "", t[0].resetFilter(), w && $(".ui-template", h).val("default"), $.extend(n.postData, e), fullBoolFeedback.call(o, s.onReset, "jqGridFilterReset") && l.trigger("reloadGrid", [$.extend({
                                page: 1
                            }, s.reloadGridResetOptions || {})]), s.closeAfterReset && f(), !1
                        }), q($(d));
                        var S = getGuiStateStyles.call(o, "hover");
                        $(".fm-button:not(." + getGuiStateStyles.call(o, "disabled").split(" ").join(".") + ")", h).hover(function() {
                            $(this).addClass(S)
                        }, function() {
                            $(this).removeClass(S)
                        })
                    }
                }

                function q(e) {
                    p("beforeShow", e) && ($(t).data("onClose", s.onClose), jgrid.viewModal.call(o, t, {
                        gbox: i,
                        jqm: s.jqModal,
                        overlay: s.overlay,
                        modal: s.modal,
                        overlayClass: s.overlayClass,
                        toTop: s.toTop,
                        onHide: function(e) {
                            e.w.remove(), e.o && e.o.remove()
                        }
                    }), p("afterShow", e))
                }
            })
        },
        editGridRow: function(ie, ae) {
            return this.each(function() {
                var R = this,
                    _ = $(R),
                    I = R.p;
                if (R.grid && null != I && ie) {
                    var w, y, G = I.id,
                        d = base.getGridRes,
                        x = base.setSelection,
                        O = $.extend(!0, {
                            top: 0,
                            left: 0,
                            width: 300,
                            datawidth: "auto",
                            height: "auto",
                            dataheight: "auto",
                            drag: !0,
                            resize: !0,
                            url: null,
                            mtype: "POST",
                            clearAfterAdd: !0,
                            closeAfterEdit: !1,
                            reloadAfterSubmit: !0,
                            onInitializeForm: null,
                            beforeInitData: null,
                            beforeShowForm: null,
                            afterShowForm: null,
                            beforeSubmit: null,
                            afterSubmit: null,
                            onclickSubmit: null,
                            afterComplete: null,
                            onclickPgButtons: null,
                            afterclickPgButtons: null,
                            editData: {},
                            closeOnEscape: !1,
                            addedrow: "first",
                            topinfo: "",
                            bottominfo: "",
                            labelswidth: "",
                            savekey: [!1, 13],
                            navkeys: [!1, 38, 40],
                            checkOnSubmit: !1,
                            checkOnUpdate: !1,
                            _savedData: {},
                            processing: !1,
                            onClose: null,
                            ajaxEditOptions: {},
                            serializeEditData: null,
                            viewPagerButtons: !0,
                            overlayClass: getGuiStyles.call(this, "overlay"),
                            removemodal: !0,
                            skipPostTypes: ["image", "file"],
                            saveui: "enable",
                            savetext: d.call(_, "defaults.savetext") || "Saving..."
                        }, d.call(_, "edit"), jgrid.edit, I.formEditing || {}, ae || {}),
                        k = "FrmGrid_" + G,
                        e = k,
                        t = "TblGrid_" + G,
                        j = "#" + jqID(t),
                        C = j + "_2",
                        r = {
                            themodal: "editmod" + G,
                            modalhead: "edithd" + G,
                            modalcontent: "editcnt" + G,
                            resizeAlso: k
                        },
                        i = "#" + jqID(r.themodal),
                        a = I.gBox,
                        N = I.colModel,
                        c = I.iColByName,
                        o = 1,
                        l = 0,
                        n = O.commonIconClass,
                        D = function() {
                            jgrid.hideModal(i, {
                                gb: a,
                                jqm: O.jqModal,
                                onClose: O.onClose,
                                removemodal: O.removemodal
                            })
                        },
                        u = d.call(_, "errors.errcap"),
                        s = function() {
                            var e = $.makeArray(arguments);
                            return e.unshift(""), e.unshift("AddEdit"), e.unshift(O), jgridFeedback.apply(R, e)
                        },
                        p = getGuiStateStyles.call(R, "hover"),
                        E = getGuiStateStyles.call(R, "disabled"),
                        f = getGuiStateStyles.call(R, "select"),
                        S = getGuiStateStyles.call(R, "active"),
                        h = getGuiStateStyles.call(R, "error");
                    $(i).remove(), k = "#" + jqID(k), "new" === ie ? (ie = "_empty", y = "add", O.caption = O.addCaption) : (O.caption = O.editCaption, y = "edit");
                    var g = !0;
                    !O.checkOnUpdate || !0 !== O.jqModal && void 0 !== O.jqModal || O.modal || (g = !1);
                    var m = isNaN(O.dataheight) ? O.dataheight : O.dataheight + "px",
                        v = isNaN(O.datawidth) ? O.datawidth : O.datawidth + "px",
                        b = $("
").data("disabled", !1),
                        q = $("
");
                    $(N).each(function() {
                        var e = this.formoptions;
                        o = Math.max(o, e && e.colpos || 0), l = Math.max(l, e && e.rowpos || 0)
                    }), $(b).append(q);
                    var F = $(" ");
                    if (F[0].rp = 0, $(q).append(F), (F = $("" + (O.topinfo || " ") + ""))[0].rp = 0, $(q).append(F), s("beforeInitData", b, y)) {
                        ! function() {
                            var e = jgrid.detectRowEditing.call(R, ie);
                            if (null != e)
                                if ("inlineEditing" === e.mode) base.restoreRow.call(_, ie);
                                else {
                                    var t = e.savedRow,
                                        r = R.rows[t.id];
                                    base.restoreCell.call(_, t.id, t.ic), $(r.cells[t.ic]).removeClass("edit-cell " + f), $(r).addClass(f).attr({
                                        "aria-selected": "true",
                                        tabindex: "0"
                                    })
                                }
                        }();
                        var A = "rtl" === I.direction,
                            T = A ? "nData" : "pData",
                            M = A ? "pData" : "nData";
                        ! function(x, e, j) {
                            var t, C = 0,
                                D = [],
                                S = !1,
                                q = $(e),
                                r = String(O.labelswidth) + (!O.labelswidth || isNaN(O.labelswidth) ? "" : "px"),
                                i = "  ",
                                F = "";
                            for (t = 1; t <= j; t++) F += i;
                            if ("_empty" !== x && (S = base.getInd.call(_, x)), $(N).each(function(e) {
                                    var t, r, i, a, o, l = this,
                                        n = l.name,
                                        s = l.editable,
                                        d = !1,
                                        c = !1,
                                        u = "_empty" === x ? "addForm" : "editForm";
                                    switch ($.isFunction(s) && (s = s.call(R, {
                                        rowid: x,
                                        iCol: e,
                                        iRow: S,
                                        cmName: n,
                                        cm: l,
                                        mode: u
                                    })), r = !(l.editrules && !0 === l.editrules.edithidden || !0 !== l.hidden && "hidden" !== s), String(s).toLowerCase()) {
                                        case "hidden":
                                            s = !0;
                                            break;
                                        case "disabled":
                                            d = s = !0;
                                            break;
                                        case "readonly":
                                            c = s = !0
                                    }
                                    if ("cb" !== n && "subgrid" !== n && !0 === s && "rn" !== n) {
                                        if (!1 === S) a = "";
                                        else {
                                            t = $(R.rows[S].cells[e]);
                                            try {
                                                a = $.unformat.call(R, t, {
                                                    rowId: x,
                                                    colModel: l
                                                }, e)
                                            } catch (e) {
                                                a = l.edittype && "textarea" === l.edittype ? t.text() : t.html()
                                            }
                                            isEmptyString(a) && (a = "")
                                        }
                                        var p = $.extend({}, l.editoptions || {}, {
                                                id: n,
                                                name: n,
                                                rowId: x,
                                                mode: u,
                                                cm: l,
                                                iCol: e
                                            }),
                                            f = $.extend({}, {
                                                elmprefix: "",
                                                elmsuffix: "",
                                                rowabove: !1,
                                                rowcontent: ""
                                            }, l.formoptions || {}),
                                            h = parseInt(f.rowpos, 10) || C + 1,
                                            g = parseInt(2 * (parseInt(f.colpos, 10) || 1), 10);
                                        if ("_empty" === x && p.defaultValue && (a = $.isFunction(p.defaultValue) ? p.defaultValue.call(R) : p.defaultValue), l.edittype || (l.edittype = "text"), I.autoEncodeOnEdit && (a = jgrid.oldDecodePostedData(a)), o = jgrid.createEl.call(R, l.edittype, p, a, !1, $.extend({}, jgrid.ajaxOptions, I.ajaxSelectOptions || {})), (O.checkOnSubmit || O.checkOnUpdate) && (O._savedData[n] = a), $(o).addClass("FormElement"), -1 < $.inArray(l.edittype, ["text", "textarea", "checkbox", "password", "select"]) && $(o).addClass(getGuiStyles.call(R, "dialog.dataField")), i = q.find("tr[data-rowpos=" + h + "]"), f.rowabove) {
                                            var m = $("" + f.rowcontent + "");
                                            q.append(m), m[0].rp = h
                                        }
                                        0 === i.length && (i = $("").addClass("FormData").attr("id", "tr_" + n), $(i).append(F), q.append(i), i[0].rp = h);
                                        var v = $("td:eq(" + (g - 2) + ")", i[0]),
                                            b = $("td:eq(" + (g - 1) + ")", i[0]);
                                        v.html(void 0 === f.label ? I.colNames[e] : f.label || " ");
                                        var w = b[isEmptyString(b.html()) ? "html" : "append"](f.elmprefix);
                                        if (w.append(o).append(f.elmsuffix), "INPUT" === o.tagName.toUpperCase() && l.createColumnIndex && p.generateDatalist) {
                                            var y = _.jqGrid("generateDatalistFromColumnIndex", l.name);
                                            null != y && 0 < y.length && ($(o).attr("list", "dl_" + o.id), w.append(y.attr("id", "dl_" + o.id)))
                                        }
                                        d ? (v.addClass(E), b.addClass(E), $(o).prop("readonly", !0), $(o).prop("disabled", !0)) : c && $(o).prop("readonly", !0), "custom" === l.edittype && $.isFunction(p.custom_value) && p.custom_value.call(R, $("#" + jqID(n), k), "set", a), jgrid.bindEv.call(R, o, p), r && v.add(b).css("visibility", "hidden"), D[C] = e, C++
                                    }
                                }), hideRowsWithoutVissibleCells(q), 0 < C) {
                                var a = $(" 
" + x + "
");
                                a[0].rp = C + 999, q.append(a), (O.checkOnSubmit || O.checkOnUpdate) && (O._savedData[G + "_id"] = x)
                            }
                        }(ie, q, o);
                        var B = builderFmButon.call(R, T, "", mergeCssClasses(n, O.prevIcon), "", "left"),
                            P = builderFmButon.call(R, M, "", mergeCssClasses(n, O.nextIcon), "", "right"),
                            z = builderFmButon.call(R, "sData", O.bSubmit),
                            L = builderFmButon.call(R, "cData", O.bCancel),
                            V = "
";
                        if (V += "", V += "
" + (A ? P + B : B + P) + " " + z + " " + L + "
", 0 < l) {
                            var H = [];
                            $.each($(q)[0].rows, function(e, t) {
                                H[e] = t
                            }), H.sort(function(e, t) {
                                return e.rp > t.rp ? 1 : e.rp < t.rp ? -1 : 0
                            }), $.each(H, function(e, t) {
                                $("tbody", q).append(t)
                            })
                        }
                        O.gbox = a;
                        var W = !1;
                        !0 === O.closeOnEscape && (O.closeOnEscape = !1, W = !0);
                        var U = $("
").append($("
").append(b)).append(V);
                        if (jgrid.createModal.call(R, r, U, O, I.gView, $(a)[0]), O.topinfo && $(".tinfo", j).show(), O.bottominfo && $(".binfo", C).show(), V = U = null, $(i).keydown(function(e) {
                                var t, r, i = (e.target.tagName || "").toUpperCase();
                                if (!0 === $(k).data("disabled")) return !1;
                                if (13 === e.which && "TEXTAREA" !== i) {
                                    if (r = (t = $(C).find(":focus")).attr("id"), 0 < t.length && 0 <= $.inArray(r, ["pData", "nData", "cData"])) return t.trigger("click"), !1;
                                    if (!0 === O.savekey[0] && 13 === O.savekey[1]) return $("#sData", C).trigger("click"), !1
                                }
                                if (!0 === O.savekey[0] && e.which === O.savekey[1] && "TEXTAREA" !== i) return $("#sData", C).trigger("click"), !1;
                                if (27 === e.which) return ee() && W && D(), !1;
                                if (!0 === O.navkeys[0]) {
                                    if ("_empty" === $("#id_g", j).val()) return !0;
                                    if (e.which === O.navkeys[1]) return $("#pData", C).trigger("click"), !1;
                                    if (e.which === O.navkeys[2]) return $("#nData", C).trigger("click"), !1
                                }
                            }), O.checkOnUpdate && ($("a.ui-jqdialog-titlebar-close span", i).removeClass("jqmClose"), $("a.ui-jqdialog-titlebar-close", i).off("click").click(function() {
                                return ee() && D(), !1
                            })), addFormIcon($("#sData", C), O.saveicon, n), addFormIcon($("#cData", C), O.closeicon, n), O.checkOnSubmit || O.checkOnUpdate) {
                            z = builderFmButon.call(R, "sNew", O.bYes), P = builderFmButon.call(R, "nNew", O.bNo), L = builderFmButon.call(R, "cNew", O.bExit);
                            var Y = O.zIndex || 999;
                            Y++, $("
" + O.saveData + "

" + z + P + L + "
").insertAfter(k), $("#sNew", i).click(function() {
                                return Z(), $(k).data("disabled", !1), $(".confirm", i).hide(), !1
                            }), $("#nNew", i).click(function() {
                                return $(".confirm", i).hide(), $(k).data("disabled", !1), setTimeout(function() {
                                    $(k).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)").first().focus()
                                }, 0), !1
                            }), $("#cNew", i).click(function() {
                                return $(".confirm", i).hide(), $(k).data("disabled", !1), D(), !1
                            })
                        }
                        s("onInitializeForm", $(k), y), "_empty" !== ie && O.viewPagerButtons ? $("#pData,#nData", C).show() : $("#pData,#nData", C).hide(), s("beforeShowForm", $(k), y), $(i).data("onClose", O.onClose), jgrid.viewModal.call(R, i, {
                            gbox: a,
                            jqm: O.jqModal,
                            overlay: O.overlay,
                            modal: O.modal,
                            overlayClass: O.overlayClass,
                            toTop: O.toTop,
                            onHide: function(e) {
                                e.w.remove(), e.o && e.o.remove()
                            }
                        }), g || $("." + jqID(O.overlayClass)).click(function() {
                            return ee() && D(), !1
                        }), $(".fm-button", i).hover(function() {
                            $(this).addClass(p)
                        }, function() {
                            $(this).removeClass(p)
                        }), $("#sData", C).click(function() {
                            return w = {}, $("#FormError", j).hide(), Q(), "_empty" === w[G + "_id"] ? Z() : !0 === O.checkOnSubmit && K(w, O._savedData) ? ($(k).data("disabled", !0), $(".confirm", i).show()) : Z(), !1
                        }), $("#cData", C).click(function() {
                            return ee() && D(), !1
                        }), $("#nData", C).click(function() {
                            if (!ee()) return !1;
                            $("#FormError", j).hide();
                            var e = re();
                            if (e[0] = parseInt(e[0], 10), -1 !== e[0] && e[1][e[0] + 1]) {
                                if (!s("onclickPgButtons", "next", $(k), e[1][e[0]])) return !1;
                                J(e[1][e[0] + 1], k), x.call(_, e[1][e[0] + 1]), s("afterclickPgButtons", "next", $(k), e[1][e[0] + 1]), te(e[0] + 1, e)
                            }
                            return !1
                        }), $("#pData", C).click(function() {
                            if (!ee()) return !1;
                            $("#FormError", j).hide();
                            var e = re();
                            if (-1 !== e[0] && e[1][e[0] - 1]) {
                                if (!s("onclickPgButtons", "prev", $(k), e[1][e[0]])) return !1;
                                if (hasOneFromClasses($("#" + jqID(e[1][e[0] - 1])), E)) return !1;
                                J(e[1][e[0] - 1], k), x.call(_, e[1][e[0] - 1]), s("afterclickPgButtons", "prev", $(k), e[1][e[0] - 1]), te(e[0] - 1, e)
                            }
                            return !1
                        }), s("afterShowForm", $(k), y);
                        var X = re();
                        te(X[0], X)
                    }
                }

                function Q() {
                    return $(j + " > tbody > tr > td .FormElement").each(function() {
                        var e, t, r = $(".customelement", this),
                            i = r.length ? r.attr("name") : this.name,
                            a = c[i],
                            o = void 0 !== a && N[a] || {},
                            l = o.editoptions || {};
                        if (r.length && $.isFunction(l.custom_value)) {
                            try {
                                if (w[i] = l.custom_value.call(R, $("#" + jqID(i), j), "get"), void 0 === w[i]) throw "e1"
                            } catch (e) {
                                "e1" === e ? jgrid.info_dialog.call(R, u, "function 'custom_value' " + O.msg.novalue, O.bClose) : jgrid.info_dialog.call(R, u, e.message, O.bClose)
                            }
                            return !0
                        }
                        switch (t = $(this)[0].type) {
                            case "checkbox":
                                var n = "string" == typeof l.value ? l.value.split(":") : ["Yes", "No"];
                                w[i] = $(this).is(":checked") ? n[0] : n[1];
                                break;
                            case "select-one":
                                w[i] = $("option:selected", this).val();
                                break;
                            case "select-multiple":
                                w[i] = $(this).val(), w[i] = w[i] ? w[i].join(",") : "";
                                var s = [];
                                $("option:selected", this).each(function(e, t) {
                                    s[e] = $(t).text()
                                });
                                break;
                            case "date":
                                w[i] = $(this).val(), 3 === String(w[i]).split("-").length && (e = (o.formatoptions || {}).newformat || d.call(_, "formatter.date.newformat"), w[i] = jgrid.parseDate.call(_[0], "Y-m-d", w[i], e));
                                break;
                            default:
                                void 0 !== t && $.inArray(t, O.skipPostTypes) < 0 && (w[i] = $(this).val())
                        }
                    }), !0
                }

                function J(e, t) {
                    var r, i, a, o, l, n = 0;
                    (O.checkOnSubmit || O.checkOnUpdate) && (O._savedData = {}, O._savedData[G + "_id"] = e);
                    var s = I.colModel;
                    if ("_empty" === e) return $(s).each(function() {
                        r = this.name, a = $.extend({}, this.editoptions || {}), (i = $("#" + jqID(r), t)) && i.length && null !== i[0] && (o = "", "custom" === this.edittype && $.isFunction(a.custom_value) ? a.custom_value.call(R, i, "set", o) : a.defaultValue ? (o = $.isFunction(a.defaultValue) ? a.defaultValue.call(R) : a.defaultValue, "checkbox" === i[0].type ? (l = o.toLowerCase()).search(/(false|f|0|no|n|off|undefined)/i) < 0 && "" !== l ? (i[0].checked = !0, i[0].defaultChecked = !0, i[0].value = o) : (i[0].checked = !1, i[0].defaultChecked = !1) : i.val(o)) : "checkbox" === i[0].type ? (i[0].checked = !1, i[0].defaultChecked = !1, o = $(i).data("offval")) : i[0].type && "select" === i[0].type.substr(0, 6) ? i[0].selectedIndex = 0 : i.val(o), (!0 === O.checkOnSubmit || O.checkOnUpdate) && (O._savedData[r] = o))
                    }), void $("#id_g", t).val(e);
                    var d = base.getInd.call(_, e, !0);
                    d && ($(d.cells).filter("td[role=gridcell]").each(function(a) {
                        var i;
                        if ("cb" !== (r = s[a].name) && "subgrid" !== r && "rn" !== r && !0 === s[a].editable) {
                            try {
                                i = $.unformat.call(R, $(this), {
                                    rowId: e,
                                    colModel: s[a]
                                }, a)
                            } catch (e) {
                                i = "textarea" === s[a].edittype ? $(this).text() : $(this).html()
                            }
                            switch (I.autoEncodeOnEdit && (i = jgrid.oldDecodePostedData(i)), (!0 === O.checkOnSubmit || O.checkOnUpdate) && (O._savedData[r] = i), r = "#" + jqID(r), s[a].edittype) {
                                case "password":
                                case "text":
                                case "button":
                                case "image":
                                case "textarea":
                                    isEmptyString(i) && (i = ""), $(r, t).val(i);
                                    break;
                                case "select":
                                    var o = i.split(",");
                                    o = $.map(o, function(e) {
                                        return $.trim(e)
                                    }), $(r + " option", t).each(function() {
                                        var e, t = this,
                                            r = $(t),
                                            i = $.trim(r.val());
                                        if (s[a].editoptions.multiple || o[0] !== i ? s[a].editoptions.multiple && -1 < (e = $.inArray(i, o)) ? (o.splice(e, 1), t.selected = !0) : t.selected = !1 : (o.splice(0, 1), t.selected = !0), 0 === o.length) return !1
                                    }), 0 < o.length && $(r + " option", t).each(function() {
                                        var e, t = $(this),
                                            r = $.trim(t.text());
                                        if (s[a].editoptions.multiple || $.trim(i) !== r && o[0] !== r ? s[a].editoptions.multiple && -1 < (e = $.inArray(r, o)) && (o.splice(e, 1), this.selected = !0) : (o.splice(0, 1), this.selected = !0), 0 === o.length) return !1
                                    });
                                    break;
                                case "checkbox":
                                    i = String(i), i = s[a].editoptions && s[a].editoptions.value ? s[a].editoptions.value.split(":")[0] === i : (i = i.toLowerCase()).search(/(false|f|0|no|n|off|undefined)/i) < 0 && "" !== i, $(r, t).prop({
                                        checked: i,
                                        defaultChecked: i
                                    });
                                    break;
                                case "custom":
                                    try {
                                        if (!s[a].editoptions || !$.isFunction(s[a].editoptions.custom_value)) throw "e1";
                                        s[a].editoptions.custom_value.call(R, $(r, t), "set", i)
                                    } catch (e) {
                                        "e1" === e ? jgrid.info_dialog.call(R, u, "function 'custom_value' " + O.msg.nodefined, O.bClose) : jgrid.info_dialog.call(R, u, e.message, O.bClose)
                                    }
                            }
                            n++
                        }
                    }), 0 < n && $("#id_g", j).val(e))
                }

                function Z() {
                    var o, l, e, n, t, r, i, a, s, d = [!0, "", ""],
                        c = d,
                        u = {},
                        p = I.prmNames,
                        f = base.getInd.call(_, ie),
                        h = !1 === f ? null : R.rows[f],
                        g = _.triggerHandler("jqGridAddEditBeforeCheckValues", [w, $(k), y]);
                    for (e in g && "object" == typeof g && (w = g), f = !1 === f ? -1 : f, $.isFunction(O.beforeCheckValues) && (g = O.beforeCheckValues.call(R, w, $(k), y)) && "object" == typeof g && (w = g), w)
                        if (w.hasOwnProperty(e) && (a = I.iColByName[e], null != (c = jgrid.checkValues.call(R, w[e], e, void 0, void 0, {
                                oldValue: "_empty" === ie ? null : base.getCell.call(_, ie, a),
                                newValue: w[e],
                                cmName: e,
                                rowid: ie,
                                cm: N[a],
                                iCol: a,
                                iRow: f,
                                tr: h,
                                td: null == h ? null : h.cells[a],
                                mode: "_empty" === ie ? "addForm" : "editForm"
                            })) && !0 !== c || (c = d), !1 === c[0])) break;
                    if (s = O.url || I.editurl, $.each(N, function(e, t) {
                            var r = t.name;
                            w.hasOwnProperty(r) && ("date" !== t.formatter || null != t.formatoptions && !0 === t.formatoptions.sendFormatted || (w[r] = $.unformat.date.call(R, w[r], t)), "clientArray" !== s && t.editoptions && !0 === t.editoptions.NullIfEmpty && "" === w[r] && (w[r] = "null"))
                        }), c[0] && (void 0 === (u = _.triggerHandler("jqGridAddEditClickSubmit", [O, w, y])) && $.isFunction(O.onclickSubmit) && (u = O.onclickSubmit.call(R, O, w, y) || {}), null != (c = _.triggerHandler("jqGridAddEditBeforeSubmit", [w, $(k), y])) && !0 !== c || (c = d), c[0] && $.isFunction(O.beforeSubmit) && (null != (c = O.beforeSubmit.call(R, w, $(k), y)) && !0 !== c || (c = d))), c[0] && !O.processing) {
                        if (O.processing = !0, $("#sData", C).addClass(S), r = O.url || I.editurl, l = p.oper, o = "clientArray" === r && !1 !== I.keyName ? I.keyName : p.id, w[l] = "_empty" === $.trim(w[G + "_id"]) ? p.addoper : p.editoper, w[l] !== p.addoper ? w[o] = w[G + "_id"] : void 0 === w[o] && (w[o] = w[G + "_id"]), delete w[G + "_id"], w = $.extend(w, O.editData, u), !0 === I.treeGrid) {
                            if (w[l] === p.addoper) {
                                n = I.selrow;
                                var m = "adjacency" === I.treeGridModel ? I.treeReader.parent_id_field : "parent_id";
                                w[m] = n
                            }
                            for (t in I.treeReader)
                                if (I.treeReader.hasOwnProperty(t) && (i = I.treeReader[t], w.hasOwnProperty(i))) {
                                    if (w[l] === p.addoper && "parent_id_field" === t) continue;
                                    delete w[i]
                                }
                        }
                        w[o] = jgrid.stripPref(I.idPrefix, w[o]), I.autoEncodeOnEdit && $.each(w, function(e, t) {
                            $.isFunction(t) || (w[e] = jgrid.oldEncodePostedData(t))
                        });
                        var v = $.extend({
                            url: $.isFunction(r) ? r.call(R, w[o], y, w, O) : r,
                            type: $.isFunction(O.mtype) ? O.mtype.call(R, y, O, w[o], w) : O.mtype,
                            data: jgrid.serializeFeedback.call(R, $.isFunction(O.serializeEditData) ? O.serializeEditData : I.serializeEditData, "jqGridAddEditSerializeEditData", w),
                            complete: function(e, t) {
                                if (_.jqGrid("progressBar", {
                                        method: "hide",
                                        loadtype: O.saveui
                                    }), $("#sData", C).removeClass(S), w[o] = $("#id_g", j).val(), 300 <= e.status && 304 !== e.status || 0 === e.status && 4 === e.readyState ? (c[0] = !1, c[1] = _.triggerHandler("jqGridAddEditErrorTextFormat", [e, y]), $.isFunction(O.errorTextFormat) ? c[1] = O.errorTextFormat.call(R, e, y) : c[1] = t + " Status: '" + e.statusText + "'. Error code: " + e.status) : (null != (c = _.triggerHandler("jqGridAddEditAfterSubmit", [e, w, y])) && !0 !== c || (c = d), c[0] && $.isFunction(O.afterSubmit) && (null != (c = O.afterSubmit.call(R, e, w, y)) && !0 !== c || (c = d))), !1 === c[0]) $("#FormError>td", j).html(c[1]), $("#FormError", j).show();
                                else {
                                    I.autoEncodeOnEdit && $.each(w, function(e, t) {
                                        w[e] = jgrid.oldDecodePostedData(t)
                                    });
                                    var r, i = [$.extend({}, O.reloadGridOptions || {})];
                                    if (w[l] === p.addoper ? (c[2] || (c[2] = jgrid.randId()), null == w[o] || "_empty" === w[o] || w[l] === p.addoper ? w[o] = c[2] : c[2] = w[o], O.reloadAfterSubmit ? _.trigger("reloadGrid", i) : !0 === I.treeGrid ? base.addChildNode.call(_, c[2], n, w) : base.addRowData.call(_, c[2], w, O.addedrow), O.closeAfterAdd ? (!0 !== I.treeGrid && x.call(_, c[2]), D()) : O.clearAfterAdd && J("_empty", k)) : (O.reloadAfterSubmit ? (_.trigger("reloadGrid", i), O.closeAfterEdit || setTimeout(function() {
                                            x.call(_, w[o])
                                        }, 1e3)) : !0 === I.treeGrid ? base.setTreeRow.call(_, w[o], w) : base.setRowData.call(_, w[o], w), O.closeAfterEdit && D()), $.isFunction(O.afterComplete)) {
                                        var a = e;
                                        setTimeout(function() {
                                            _.triggerHandler("jqGridAddEditAfterComplete", [a, w, $(k), y]), O.afterComplete.call(R, a, w, $(k), y), a = null
                                        }, 50)
                                    }
                                    if (O.checkOnSubmit || O.checkOnUpdate)
                                        if ($(k).data("disabled", !1), "_empty" !== O._savedData[G + "_id"])
                                            for (r in O._savedData) O._savedData.hasOwnProperty(r) && w[r] && (O._savedData[r] = w[r])
                                }
                                O.processing = !1;
                                try {
                                    $(k).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)").first().focus()
                                } catch (e) {}
                            }
                        }, jgrid.ajaxOptions, O.ajaxEditOptions);
                        if (v.url || O.useDataProxy || ($.isFunction(I.dataProxy) ? O.useDataProxy = !0 : (c[0] = !1, c[1] += " " + jgrid.errors.nourl)), c[0])
                            if (_.jqGrid("progressBar", {
                                    method: "show",
                                    loadtype: O.saveui,
                                    htmlcontent: O.savetext
                                }), O.useDataProxy) {
                                var b = I.dataProxy.call(R, v, "set_" + G);
                                void 0 === b && (b = [!0, ""]), !1 === b[0] ? (c[0] = !1, c[1] = b[1] || "Error deleting the selected row!") : (v.data.oper === p.addoper && O.closeAfterAdd && D(), v.data.oper === p.editoper && O.closeAfterEdit && D())
                            } else "clientArray" === v.url ? (O.reloadAfterSubmit = !1, w = v.data, v.complete({
                                status: 200,
                                statusText: ""
                            }, "")) : $.ajax(v)
                    }!1 === c[0] && ($("#FormError>td", j).html(c[1]), $("#FormError", j).show())
                }

                function K(e, t) {
                    var r, i = !1;
                    for (r in e)
                        if (e.hasOwnProperty(r) && String(e[r]) !== String(t[r])) {
                            i = !0;
                            break
                        }
                    return i
                }

                function ee() {
                    var e = !0;
                    return $("#FormError", j).hide(), O.checkOnUpdate && (w = {}, Q(), K(w, O._savedData) && ($(k).data("disabled", !0), $(".confirm", i).show(), e = !1)), e
                }

                function te(e, t) {
                    var r = t[1].length - 1;
                    0 === e ? $("#pData", C).addClass(E) : void 0 !== t[1][e - 1] && hasOneFromClasses($("#" + jqID(t[1][e - 1])), E) ? $("#pData", C).addClass(E) : $("#pData", C).removeClass(E), e === r ? $("#nData", C).addClass(E) : void 0 !== t[1][e + 1] && hasOneFromClasses($("#" + jqID(t[1][e + 1])), E) ? $("#nData", C).addClass(E) : $("#nData", C).removeClass(E)
                }

                function re() {
                    var e = base.getDataIDs.call(_),
                        t = $("#id_g", j).val();
                    return [$.inArray(t, e), e]
                }
            })
        },
        viewGridRow: function(B, P) {
            return this.each(function() {
                var D = this,
                    S = $(D),
                    q = D.p;
                if (D.grid && null != q && B) {
                    var e = q.id,
                        F = $.extend(!0, {
                            top: 0,
                            left: 0,
                            width: 0,
                            datawidth: "auto",
                            height: "auto",
                            dataheight: "auto",
                            drag: !0,
                            resize: !0,
                            closeOnEscape: !1,
                            labelswidth: "",
                            navkeys: [!1, 38, 40],
                            onClose: null,
                            beforeShowForm: null,
                            beforeInitData: null,
                            viewPagerButtons: !0,
                            removemodal: !0
                        }, base.getGridRes.call(S, "view"), jgrid.view || {}, q.formViewing || {}, P || {}),
                        i = "#ViewGrid_" + jqID(e),
                        o = "#ViewTbl_" + jqID(e),
                        a = o + "_2",
                        t = "ViewGrid_" + e,
                        r = "ViewTbl_" + e,
                        l = F.commonIconClass,
                        n = {
                            themodal: "viewmod" + e,
                            modalhead: "viewhd" + e,
                            modalcontent: "viewcnt" + e,
                            resizeAlso: t
                        },
                        s = "#" + jqID(n.themodal),
                        d = q.gBox,
                        R = q.colModel,
                        c = 1,
                        u = 0,
                        p = function() {
                            var e = $.makeArray(arguments);
                            return e.unshift(""), e.unshift("View"), e.unshift(F), jgridFeedback.apply(D, e)
                        },
                        f = function() {
                            jgrid.hideModal(s, {
                                gb: d,
                                jqm: F.jqModal,
                                onClose: F.onClose,
                                removemodal: F.removemodal
                            })
                        },
                        h = getGuiStateStyles.call(D, "hover"),
                        g = getGuiStateStyles.call(D, "disabled"),
                        m = isNaN(F.dataheight) ? F.dataheight : F.dataheight + "px",
                        v = isNaN(F.datawidth) ? F.datawidth : F.datawidth + "px",
                        b = $("
"),
                        w = b.children("form.FormGrid"),
                        y = $("
");
                    if ($(s).remove(), $(R).each(function() {
                            var e = this.formoptions;
                            c = Math.max(c, e && e.colpos || 0), u = Math.max(u, e && e.rowpos || 0)
                        }), w.append(y), p("beforeInitData", w)) {
                        ! function(e, t, d) {
                            var c, u, p, f, r, h, g, m, v = 0,
                                b = [],
                                w = base.getInd.call(S, e),
                                y = getGuiStyles.call(D, "dialog.viewData"),
                                x = $(t),
                                j = getGuiStyles.call(D, "dialog.viewLabel"),
                                i = String(F.labelswidth) + (!F.labelswidth || isNaN(F.labelswidth) ? "" : "px"),
                                a = "  ",
                                C = "",
                                o = ["integer", "number", "currency"],
                                l = 0,
                                n = 0;
                            for (r = 0; r < d; r++) C += a;
                            if ($(R).each(function() {
                                    var e = this;
                                    (u = (!e.editrules || !0 !== e.editrules.edithidden) && !0 === e.hidden) || "right" !== e.align || (e.formatter && -1 !== $.inArray(e.formatter, o) ? l = Math.max(l, parseInt(e.width, 10)) : n = Math.max(n, parseInt(e.width, 10)))
                                }), h = 0 !== l ? l : 0 !== n ? n : 0, $(R).each(function(e) {
                                    var t = this;
                                    if (c = t.name, g = !1, u = (!t.editrules || !0 !== t.editrules.edithidden) && !0 === t.hidden, m = "boolean" != typeof t.viewable || t.viewable, "cb" !== c && "subgrid" !== c && "rn" !== c && m) {
                                        f = !1 === w ? "" : jgrid.getDataFieldOfCell.call(D, D.rows[w], e).html(), g = "right" === t.align && 0 !== h;
                                        var r = $.extend({}, {
                                                rowabove: !1,
                                                rowcontent: ""
                                            }, t.formoptions || {}),
                                            i = parseInt(r.rowpos, 10) || v + 1,
                                            a = parseInt(2 * (parseInt(r.colpos, 10) || 1), 10);
                                        if (r.rowabove) {
                                            var o = $("" + r.rowcontent + "");
                                            x.append(o), o[0].rp = i
                                        }
                                        0 === (p = x.find("tr[data-rowpos=" + i + "]")).length && ((p = $("").addClass("FormData").attr("id", "trv_" + c)).append(C), x.append(p), p[0].rp = i);
                                        var l = void 0 === r.label ? q.colNames[e] : r.label,
                                            n = $("td:eq(" + (a - 1) + ")", p[0]),
                                            s = $("td:eq(" + (a - 2) + ")", p[0]);
                                        s.html("" : ">") + (l || " ") + ""), n[isEmptyString(n.html()) ? "html" : "append"]("" : ">") + (f || " ") + "").attr("id", "v_" + c), g && $("td:eq(" + (a - 1) + ") span", p[0]).css({
                                            "text-align": "right",
                                            width: h + "px"
                                        }), u && s.add(n).css("visibility", "hidden"), b[v] = e, v++
                                    }
                                }), hideRowsWithoutVissibleCells(x), 0 < v) {
                                var s = $(" 
" + e + "
");
                                s[0].rp = v + 99, x.append(s)
                            }
                        }(B, y, c);
                        var x = "rtl" === q.direction,
                            j = x ? "nData" : "pData",
                            C = x ? "pData" : "nData",
                            _ = builderFmButon.call(D, j, "", mergeCssClasses(l, F.prevIcon), "", "left"),
                            I = builderFmButon.call(D, C, "", mergeCssClasses(l, F.nextIcon), "", "right"),
                            G = builderFmButon.call(D, "cData", F.bClose);
                        if (0 < u) {
                            var O = [];
                            $.each($(y)[0].rows, function(e, t) {
                                O[e] = t
                            }), O.sort(function(e, t) {
                                return e.rp > t.rp ? 1 : e.rp < t.rp ? -1 : 0
                            }), $.each(O, function(e, t) {
                                $("tbody", y).append(t)
                            })
                        }
                        F.gbox = d;
                        var k = $("
").append(b).append("
" + (x ? I + _ : _ + I) + " " + G + "
");
                        jgrid.createModal.call(D, n, k, F, q.gView, $(q.gView)[0]), F.viewPagerButtons || $("#pData, #nData", a).hide(), k = null, $(s).keydown(function(e) {
                            var t, r;
                            if (!0 === $(i).data("disabled")) return !1;
                            if (13 === e.which && (r = (t = $(a).find(":focus")).attr("id"), 0 < t.length && 0 <= $.inArray(r, ["pData", "nData", "cData"]))) return t.trigger("click"), !1;
                            if (27 === e.which) return F.closeOnEscape && f(), !1;
                            if (!0 === F.navkeys[0]) {
                                if (e.which === F.navkeys[1]) return $("#pData", a).trigger("click"), !1;
                                if (e.which === F.navkeys[2]) return $("#nData", a).trigger("click"), !1
                            }
                        }), addFormIcon($("#cData", a), F.closeicon, l), p("beforeShowForm", $(i)), jgrid.viewModal.call(D, s, {
                            gbox: d,
                            jqm: F.jqModal,
                            overlay: F.overlay,
                            toTop: F.toTop,
                            modal: F.modal,
                            onHide: function(e) {
                                e.w.remove(), e.o && e.o.remove()
                            }
                        }), $(".fm-button:not(." + g.split(" ").join(".") + ")", a).hover(function() {
                            $(this).addClass(h)
                        }, function() {
                            $(this).removeClass(h)
                        }), E(), $("#cData", a).click(function() {
                            return f(), !1
                        }), $("#nData", a).click(function() {
                            $("#FormError", o).hide();
                            var e = M();
                            if (e[0] = parseInt(e[0], 10), -1 !== e[0] && e[1][e[0] + 1]) {
                                if (!p("onclickPgButtons", "next", $(i), e[1][e[0]])) return !1;
                                A(e[1][e[0] + 1]), base.setSelection.call(S, e[1][e[0] + 1]), p("afterclickPgButtons", "next", $(i), e[1][e[0] + 1]), T(e[0] + 1, e)
                            }
                            return E(), !1
                        }), $("#pData", a).click(function() {
                            $("#FormError", o).hide();
                            var e = M();
                            if (-1 !== e[0] && e[1][e[0] - 1]) {
                                if (!p("onclickPgButtons", "prev", $(i), e[1][e[0]])) return !1;
                                A(e[1][e[0] - 1]), base.setSelection.call(S, e[1][e[0] - 1]), p("afterclickPgButtons", "prev", $(i), e[1][e[0] - 1]), T(e[0] - 1, e)
                            }
                            return E(), !1
                        });
                        var N = M();
                        T(N[0], N)
                    }
                }

                function E() {
                    !0 !== F.closeOnEscape && !0 !== F.navkeys[0] || setTimeout(function() {
                        $("#cData").focus()
                    }, 0)
                }

                function A(e) {
                    var t, r, i = 0,
                        a = base.getInd.call(S, e, !0);
                    a && ($("td", a).each(function(e) {
                        r = R[e], "cb" !== (t = r.name) && "subgrid" !== t && "rn" !== t && (t = jqID("v_" + t), $("#" + t + " span", o).html(jgrid.getDataFieldOfCell.call(D, a, e).html()), i++)
                    }), 0 < i && $("#id_g", o).val(e))
                }

                function T(e, t) {
                    var r = t[1].length - 1;
                    0 === e ? $("#pData", a).addClass(g) : void 0 !== t[1][e - 1] && hasOneFromClasses($("#" + jqID(t[1][e - 1])), g) ? $("#pData", a).addClass(g) : $("#pData", a).removeClass(g), e === r ? $("#nData", a).addClass(g) : void 0 !== t[1][e + 1] && hasOneFromClasses($("#" + jqID(t[1][e + 1])), g) ? $("#nData", a).addClass(g) : $("#nData", a).removeClass(g)
                }

                function M() {
                    var e = base.getDataIDs.call(S),
                        t = $("#id_g", o).val();
                    return [$.inArray(t, e), e]
                }
            })
        },
        delGridRow: function(D, S) {
            return this.each(function() {
                var d = this,
                    c = d.p,
                    u = $(d);
                if (d.grid && null != c && D) {
                    var p, f, h, g, m = c.id,
                        v = $.extend(!0, {
                            top: 0,
                            left: 0,
                            width: 240,
                            removemodal: !0,
                            height: "auto",
                            dataheight: "auto",
                            datawidth: "auto",
                            drag: !0,
                            resize: !0,
                            url: "",
                            mtype: "POST",
                            reloadAfterSubmit: !0,
                            beforeShowForm: null,
                            beforeInitData: null,
                            afterShowForm: null,
                            beforeSubmit: null,
                            onclickSubmit: null,
                            afterSubmit: null,
                            closeOnEscape: !1,
                            delData: {},
                            idSeparator: ",",
                            onClose: null,
                            ajaxDelOptions: {},
                            processing: !1,
                            serializeDelData: null,
                            useDataProxy: !1,
                            delui: "disable",
                            deltext: base.getGridRes.call(u, "defaults.deltext") || "Deleting..."
                        }, base.getGridRes.call(u, "del"), jgrid.del || {}, c.formDeleting || {}, S || {}),
                        e = "DelTbl_" + m,
                        b = "#DelTbl_" + jqID(m),
                        t = {
                            themodal: "delmod" + m,
                            modalhead: "delhd" + m,
                            modalcontent: "delcnt" + m,
                            resizeAlso: e
                        },
                        w = "#" + jqID(t.themodal),
                        y = c.gBox,
                        r = v.commonIconClass,
                        x = function() {
                            var e = $.makeArray(arguments);
                            return e.unshift(""), e.unshift("Delete"), e.unshift(v), jgridFeedback.apply(d, e)
                        },
                        i = getGuiStateStyles.call(d, "hover"),
                        j = getGuiStateStyles.call(d, "active"),
                        a = getGuiStateStyles.call(d, "error");
                    if ($.isArray(D) || (D = [String(D)]), void 0 !== $(w)[0]) {
                        if (!x("beforeInitData", $(b))) return;
                        $("#DelData>td", b).text(D.join(v.idSeparator)).data("rowids", D), $("#DelError", b).hide(), !0 === v.processing && (v.processing = !1, $("#dData", b).removeClass(j)), x("beforeShowForm", $(b)), jgrid.viewModal.call(d, w, {
                            gbox: y,
                            jqm: v.jqModal,
                            jqM: !1,
                            overlay: v.overlay,
                            toTop: v.toTop,
                            modal: v.modal
                        }), x("afterShowForm", $(b))
                    } else {
                        var o = isNaN(v.dataheight) ? v.dataheight : v.dataheight + "px",
                            l = isNaN(v.datawidth) ? v.datawidth : v.datawidth + "px",
                            n = "
";
                        n += "", n += "", n += "", n += "", n += "
" + v.msg + "
";
                        var s = builderFmButon.call(d, "dData", v.bSubmit),
                            C = builderFmButon.call(d, "eData", v.bCancel);
                        if (n += "
" + s + " " + C + "
", v.gbox = y, jgrid.createModal.call(d, t, n, v, c.gView, $(c.gView)[0]), $("#DelData>td", b).data("rowids", D), !x("beforeInitData", $(n))) return;
                        $(".fm-button", b + "_2").hover(function() {
                            $(this).addClass(i)
                        }, function() {
                            $(this).removeClass(i)
                        }), addFormIcon($("#dData", b + "_2"), v.delicon, r), addFormIcon($("#eData", b + "_2"), v.cancelicon, r), $("#dData", b + "_2").click(function() {
                            var e, i = [!0, ""],
                                t = $("#DelData>td", b),
                                a = t.text(),
                                o = t.data("rowids"),
                                r = {};
                            if ($.isFunction(v.onclickSubmit) && (r = v.onclickSubmit.call(d, v, a, o) || {}), $.isFunction(v.beforeSubmit) && (i = v.beforeSubmit.call(d, a, o) || i), i[0] && !v.processing) {
                                if (v.processing = !0, h = c.prmNames, p = $.extend({}, v.delData, r), g = h.oper, p[g] = h.deloper, f = h.id, !(a = o.slice()).length) return !1;
                                for (e in a) a.hasOwnProperty(e) && (a[e] = jgrid.stripPref(c.idPrefix, a[e]));
                                p[f] = a.join(v.idSeparator), $(this).addClass(j);
                                var l = v.url || c.editurl,
                                    n = $.extend({
                                        url: $.isFunction(l) ? l.call(d, p[f], p, v, o) : l,
                                        type: v.mtype,
                                        data: $.isFunction(v.serializeDelData) ? v.serializeDelData.call(d, p, o) : p,
                                        complete: function(e, t) {
                                            var r;
                                            if (u.jqGrid("progressBar", {
                                                    method: "hide",
                                                    loadtype: v.delui
                                                }), $("#dData", b + "_2").removeClass(j), 300 <= e.status && 304 !== e.status || 0 === e.status && 4 === e.readyState ? (i[0] = !1, $.isFunction(v.errorTextFormat) ? i[1] = v.errorTextFormat.call(d, e) : i[1] = t + " Status: '" + e.statusText + "'. Error code: " + e.status) : $.isFunction(v.afterSubmit) && (i = v.afterSubmit.call(d, e, p, o) || [!0]), !1 === i[0]) $("#DelError>td", b).html(i[1]), $("#DelError", b).show();
                                            else {
                                                if ("local" === c.datatype || !0 === c.treeGrid || !v.reloadAfterSubmit)
                                                    if (!0 === c.treeGrid) try {
                                                        base.delTreeNode.call(u, o[0])
                                                    } catch (e) {} else
                                                        for (o = o.slice(), r = 0; r < o.length; r++) base.delRowData.call(u, o[r]);
                                                v.reloadAfterSubmit && u.trigger("reloadGrid", [$.extend({}, v.reloadGridOptions || {})]), setTimeout(function() {
                                                    x("afterComplete", e, a, $(b), o)
                                                }, 50)
                                            }
                                            v.processing = !1, i[0] && jgrid.hideModal(w, {
                                                gb: y,
                                                jqm: v.jqModal,
                                                onClose: v.onClose,
                                                removemodal: v.removemodal
                                            })
                                        }
                                    }, jgrid.ajaxOptions, v.ajaxDelOptions);
                                if (n.url || v.useDataProxy || ($.isFunction(c.dataProxy) ? v.useDataProxy = !0 : (i[0] = !1, i[1] += " " + jgrid.errors.nourl)), i[0])
                                    if (u.jqGrid("progressBar", {
                                            method: "show",
                                            loadtype: v.delui,
                                            htmlcontent: v.deltext
                                        }), v.useDataProxy) {
                                        var s = c.dataProxy.call(d, n, "del_" + m);
                                        void 0 === s && (s = [!0, ""]), !1 === s[0] ? (i[0] = !1, i[1] = s[1] || "Error deleting the selected row!") : jgrid.hideModal(w, {
                                            gb: y,
                                            jqm: v.jqModal,
                                            onClose: v.onClose,
                                            removemodal: v.removemodal
                                        })
                                    } else "clientArray" === n.url ? (p = n.data, n.complete({
                                        status: 200,
                                        statusText: ""
                                    }, "")) : $.ajax(n)
                            }
                            return !1 === i[0] && ($("#DelError>td", b).html(i[1]), $("#DelError", b).show()), !1
                        }), $("#eData", b + "_2").click(function() {
                            return jgrid.hideModal(w, {
                                gb: y,
                                jqm: v.jqModal,
                                onClose: v.onClose,
                                removemodal: v.removemodal
                            }), !1
                        }), x("beforeShowForm", $(b)), jgrid.viewModal.call(d, w, {
                            gbox: y,
                            jqm: v.jqModal,
                            overlay: v.overlay,
                            toTop: v.toTop,
                            modal: v.modal
                        }), x("afterShowForm", $(b))
                    }!0 === v.closeOnEscape && setTimeout(function() {
                        $(".ui-jqdialog-titlebar-close", "#" + jqID(t.modalhead)).attr("tabindex", "-1").focus()
                    }, 0)
                }
            })
        },
        navGrid: function(T, M, B, P, z, L, V) {
            return "object" == typeof T && (V = L, L = z, z = P, P = B, B = M, M = T, T = void 0), P = P || {}, B = B || {}, V = V || {}, z = z || {}, L = L || {}, this.each(function() {
                var l = this,
                    n = l.p,
                    s = $(l);
                if (l.grid && null != n && !(l.nav && 0 < $(T).find(".navtable").length)) {
                    var o = n.id,
                        d = $.extend({
                            edit: !0,
                            add: !0,
                            del: !0,
                            search: !0,
                            refresh: !0,
                            refreshstate: "firstpage",
                            view: !1,
                            closeOnEscape: !0,
                            beforeRefresh: null,
                            afterRefresh: null,
                            cloneToTop: !1,
                            hideEmptyPagerParts: !0,
                            alertwidth: 200,
                            alertheight: "auto",
                            alerttop: null,
                            removemodal: !0,
                            alertleft: null,
                            alertzIndex: null,
                            iconsOverText: !1
                        }, base.getGridRes.call(s, "nav"), jgrid.nav || {}, n.navOptions || {}, M || {});
                    d.position = d.position || ("rtl" === n.direction ? "right" : "left");
                    var e, t, c, r = n.idSel,
                        u = n.gBox,
                        p = d.commonIconClass,
                        f = {
                            themodal: "alertmod_" + o,
                            modalhead: "alerthd_" + o,
                            modalcontent: "alertcnt_" + o
                        },
                        a = function() {
                            var e = document.documentElement,
                                t = window,
                                r = 1024,
                                i = 768,
                                a = s.closest(".ui-grid").offset();
                            void 0 === $("#" + jqID(f.themodal))[0] && (d.alerttop || d.alertleft || (void 0 !== t.innerWidth ? (r = t.innerWidth, i = t.innerHeight) : null != e && void 0 !== e.clientWidth && 0 !== e.clientWidth && (r = e.clientWidth, i = e.clientHeight), r = r / 2 - parseInt(d.alertwidth, 10) / 2 - a.left + (void 0 !== t.pageXOffset ? t.pageXOffset : (e || document.body.parentNode || document.body).scrollLeft), i = i / 2 - 25 - a.top + (void 0 !== t.pageYOffset ? t.pageYOffset : (e || document.body.parentNode || document.body).scrollTop)), jgrid.createModal.call(l, f, "
" + d.alerttext + "
", {
                                gbox: u,
                                jqModal: d.jqModal,
                                drag: !0,
                                resize: !0,
                                caption: d.alertcap,
                                top: null != d.alerttop ? d.alerttop : i,
                                left: null != d.alertleft ? d.alertleft : r,
                                width: d.alertwidth,
                                height: d.alertheight,
                                closeOnEscape: d.closeOnEscape,
                                zIndex: d.alertzIndex,
                                removemodal: d.removemodal
                            }, n.gView, $(u)[0], !1)), jgrid.viewModal.call(l, "#" + jqID(f.themodal), {
                                gbox: u,
                                toTop: d.alertToTop,
                                jqm: d.jqModal
                            });
                            var o = $("#" + jqID(f.modalhead)).find(".ui-jqdialog-titlebar-close");
                            o.attr({
                                tabindex: "0",
                                href: "#",
                                role: "button"
                            }), setTimeout(function() {
                                o.focus()
                            }, 50)
                        },
                        i = function(e) {
                            var t;
                            if (13 === e.which && 0 < (t = $(this).find(".ui-pg-button").filter(":focus")).length) {
                                var r = t[0].id,
                                    i = r.substr(0, 0 < $(this).closest(".ui-grid-toppager").length ? r.length - o.length - 5 : r.length - o.length - 1) + "mod" + n.id,
                                    a = $(".ui-jqdialog").filter(":visible").map(function() {
                                        return this.id
                                    });
                                if ($.inArray(i, a) < 0) return t.trigger("click"), !1
                            }
                        },
                        h = getGuiStateStyles.call(l, "hover"),
                        g = getGuiStateStyles.call(l, "disabled"),
                        m = getGuiStyles.call(l, "navButton", "ui-pg-button");
                    if (l.grid) {
                        l.modalAlert = a, void 0 === T && (n.pager ? (T = n.pager, n.toppager && (d.cloneToTop = !0)) : n.toppager && (T = n.toppager));
                        var v, b, w, y, x, j, C, D = 1,
                            S = ["left", "center", "right"],
                            q = "
",
                            F = function() {
                                hasOneFromClasses(this, g) || $(this).addClass(h)
                            },
                            R = function() {
                                $(this).removeClass(h)
                            },
                            _ = function() {
                                return hasOneFromClasses(this, g) || ($.isFunction(d.addfunc) ? d.addfunc.call(l, P) : base.editGridRow.call(s, "new", P)), !1
                            },
                            I = function(e, t, r) {
                                if (!hasOneFromClasses(this, g)) {
                                    var i = n.selrow;
                                    i ? $.isFunction(e) ? e.call(l, i, r) : base[t].call(s, i, r) : a()
                                }
                                return !1
                            },
                            G = function() {
                                return I.call(this, d.editfunc, "editGridRow", B)
                            },
                            O = function() {
                                return I.call(this, d.viewfunc, "viewGridRow", V)
                            },
                            k = function() {
                                var e;
                                return hasOneFromClasses(this, g) || (n.multiselect ? 0 === (e = n.selarrrow).length && (e = null) : e = n.selrow, e ? $.isFunction(d.delfunc) ? d.delfunc.call(l, e, z) : base.delGridRow.call(s, e, z) : a()), !1
                            },
                            N = function() {
                                return hasOneFromClasses(this, g) || ($.isFunction(d.searchfunc) ? d.searchfunc.call(l, L) : base.searchGrid.call(s, L)), !1
                            },
                            E = function() {
                                if (!hasOneFromClasses(this, g)) {
                                    $.isFunction(d.beforeRefresh) && d.beforeRefresh.call(l), n.search = !1, n.resetsearch = !0;
                                    try {
                                        if ("currentfilter" !== d.refreshstate) {
                                            n.postData.filters = "";
                                            try {
                                                $("#fbox_" + r).jqFilter("resetFilter")
                                            } catch (e) {}
                                            $.isFunction(l.clearToolbar) && l.clearToolbar(!1)
                                        }
                                    } catch (e) {}
                                    switch (d.refreshstate) {
                                        case "firstpage":
                                            s.trigger("reloadGrid", [$.extend({}, d.reloadGridOptions || {}, {
                                                page: 1
                                            })]);
                                            break;
                                        case "current":
                                        case "currentfilter":
                                            s.trigger("reloadGrid", [$.extend({}, d.reloadGridOptions || {}, {
                                                current: !0
                                            })])
                                    }
                                    $.isFunction(d.afterRefresh) && d.afterRefresh.call(l)
                                }
                                return !1
                            },
                            A = function(e, t, r) {
                                var i = $("
"),
                                    a = d[e + "icon"],
                                    o = $.trim(d[e + "text"]);
                                return i.append("
" + (o ? "" + o + "" : "") + "
"), $(c).append(i), i.attr({
                                    title: d[e + "title"] || "",
                                    id: t || e + "_" + y
                                }).click(r).hover(F, R), i
                            };
                        for (d.cloneToTop && n.toppager && (D = 2), v = 0; v < D; v++) {
                            if (c = $("
"), 0 === v ? (y = o, (w = T) === n.toppager && (y += "_top", D = 1)) : (w = n.toppager, y = o + "_top"), d.add && A("add", P.id, _), d.edit && A("edit", B.id, G), d.view && A("view", V.id, O), d.del && A("del", z.id, k), (d.add || d.edit || d.del || d.view) && $(c).append(q), d.search && (b = A("search", L.id, N), L.showOnLoad && !0 === L.showOnLoad && $(b, c).click()), d.refresh && A("refresh", "", E), t = $(".ui-grid>.ui-grid-view").css("font-size") || "11px", $("body").append("
"), e = $(c).clone().appendTo("#testpg2").width(), $("#testpg2").remove(), $(w + "_" + d.position, w).append(c), d.hideEmptyPagerParts)
                                for (x = 0; x < S.length; x++) S[x] !== d.position && (0 === (C = $(w + "_" + S[x], w)).length || 0 === C[0].childNodes.length ? C.hide() : 1 === C[0].childNodes.length && (j = C[0].firstChild, !$(j).is("table.ui-pg-table") || 0 !== j.rows && 0 !== j.rows[0].cells.length || C.hide()));
                            n._nvtd && (e > n._nvtd[0] && ($(w + "_" + d.position, w).width(e), n._nvtd[0] = e), n._nvtd[1] = e), l.nav = !0, c.on("keydown.jqGrid", i)
                        }
                        s.triggerHandler("jqGridResetFrozenHeights")
                    }
                }
            })
        },
        navButtonAdd: function(c, u) {
            return "object" == typeof c && (u = c, c = void 0), this.each(function() {
                var t = this,
                    e = t.p;
                if (t.grid) {
                    var r = $.extend({
                            caption: "newButton",
                            title: "",
                            onClickButton: null,
                            position: "last",
                            iconsOverText: !1
                        }, base.getGridRes.call($(t), "nav"), jgrid.nav || {}, e.navOptions || {}, u || {}),
                        i = r.id,
                        a = getGuiStateStyles.call(t, "hover"),
                        o = getGuiStateStyles.call(t, "disabled"),
                        l = getGuiStyles.call(t, "navButton", "ui-pg-button");
                    if (void 0 === c)
                        if (e.pager) {
                            if (base.navButtonAdd.call($(t), e.pager, r), !e.toppager) return;
                            c = e.toppager, i && (i += "_top")
                        } else e.toppager && (c = e.toppager);
                    "string" == typeof c && 0 !== c.indexOf("#") && (c = "#" + jqID(c));
                    var n = $(".navtable", c),
                        s = r.commonIconClass;
                    if (0 < n.length) {
                        if (i && 0 < n.find("#" + jqID(i)).length) return;
                        var d = $("
");
                        "NONE" === r.buttonicon.toString().toUpperCase() ? $(d).addClass(l).append("
" + (r.caption ? "" + r.caption + "" : "") + "
") : $(d).addClass(l).append("
" + (r.caption ? "" + r.caption + "" : "") + "
"), i && $(d).attr("id", i), "first" === r.position && 0 < n.children("div.ui-pg-button").length ? n.children("div.ui-pg-button").first().before(d) : n.append(d), $(d, n).attr("title", r.title || "").click(function(e) {
                            return hasOneFromClasses(this, o) || $.isFunction(r.onClickButton) && r.onClickButton.call(t, r, e), !1
                        }).hover(function() {
                            hasOneFromClasses(this, o) || $(this).addClass(a)
                        }, function() {
                            $(this).removeClass(a)
                        }), $(t).triggerHandler("jqGridResetFrozenHeights")
                    }
                }
            })
        },
        navSeparatorAdd: function(a, o) {
            return o = $.extend({
                sepclass: "ui-separator",
                sepcontent: "",
                position: "last"
            }, o || {}), this.each(function() {
                if (this.grid) {
                    var e = this.p,
                        t = getGuiStyles.call(this, "navButton", "ui-pg-button " + getGuiStateStyles.call(this, "disabled"));
                    if (void 0 === a)
                        if (e.pager) {
                            if (base.navSeparatorAdd.call($(this), e.pager, o), !e.toppager) return;
                            a = e.toppager
                        } else e.toppager && (a = e.toppager);
                    "string" == typeof a && 0 !== a.indexOf("#") && (a = "#" + jqID(a));
                    var r = $(".navtable", a);
                    if (0 < r.length) {
                        var i = "
" + o.sepcontent + "
";
                        "first" === o.position ? 0 === r.children("div.ui-pg-button").length ? r.append(i) : r.children("div.ui-pg-button").first().before(i) : r.append(i)
                    }
                }
            })
        },
        GridToForm: function(o, l) {
            return this.each(function() {
                var e, t, r, i;
                if (this.grid) {
                    var a = base.getRowData.call($(this), o);
                    if (a)
                        for (e in a)
                            if (a.hasOwnProperty(e))
                                if ((t = $("[name=" + jqID(e) + "]", l)).is("input:radio") || t.is("input:checkbox"))
                                    for (r = 0; r < t.length; r++)(i = $(t[r])).prop("checked", i.val() === String(a[e]));
                                else t.val(isEmptyString(a[e]) ? "" : a[e])
                }
            })
        },
        FormToGrid: function(t, i, a, o) {
            return this.each(function() {
                if (this.grid) {
                    a || (a = "set"), o || (o = "first");
                    var e = $(i).serializeArray(),
                        r = {};
                    $.each(e, function(e, t) {
                        r[t.name] = t.value
                    }), "add" === a ? base.addRowData.call($(this), t, r, o) : "set" === a && base.setRowData.call($(this), t, r)
                }
            })
        }
    }), jgrid.extend({
        groupingSetup: function() {
            return this.each(function() {
                var e, t, r, i, a, o = this.p,
                    l = o.colModel,
                    n = o.groupingView,
                    s = function() {
                        return ""
                    };
                if (null === n || "object" != typeof n && !$.isFunction(n)) o.grouping = !1;
                else if (n.groupField.length) {
                    for (void 0 === n.visibiltyOnNextGrouping && (n.visibiltyOnNextGrouping = []), n.lastvalues = [], n._locgr || (n.groups = []), n.counters = [], e = 0; e < n.groupField.length; e++) n.groupOrder[e] || (n.groupOrder[e] = "asc"), n.groupText[e] || (n.groupText[e] = "{0}"), "boolean" != typeof n.groupColumnShow[e] && (n.groupColumnShow[e] = !0), "boolean" != typeof n.groupSummary[e] && (n.groupSummary[e] = !1), n.groupSummaryPos[e] || (n.groupSummaryPos[e] = "footer"), i = l[o.iColByName[n.groupField[e]]], !0 === n.groupColumnShow[e] ? (n.visibiltyOnNextGrouping[e] = !0, null != i && !0 === i.hidden && base.showCol.call($(this), n.groupField[e])) : (n.visibiltyOnNextGrouping[e] = $("#" + jgrid.jqID(o.id + "_" + n.groupField[e])).is(":visible"), null != i && !0 !== i.hidden && base.hideCol.call($(this), n.groupField[e]));
                    for (n.summary = [], n.hideFirstGroupCol && (n.formatDisplayField[0] = function(e) {
                            return e
                        }), t = 0, r = l.length; t < r; t++) i = l[t], n.hideFirstGroupCol && (i.hidden || n.groupField[0] !== i.name || (i.formatter = s)), i.summaryType && (a = {
                        nm: i.name,
                        st: i.summaryType,
                        v: "",
                        sr: i.summaryRound,
                        srt: i.summaryRoundType || "round"
                    }, i.summaryDivider && (a.sd = i.summaryDivider, a.vd = ""), n.summary.push(a))
                } else o.grouping = !1
            })
        },
        groupingPrepare: function(x, j) {
            return this.each(function() {
                var e, t, r, i, a, o, l, n, s, d = this,
                    c = d.p,
                    u = c.groupingView,
                    p = u.groups,
                    f = u.counters,
                    h = u.lastvalues,
                    g = u.isInTheSameGroup,
                    m = u.groupField.length,
                    v = !1,
                    b = base.groupingCalculations.handler,
                    w = function() {
                        var e, t, r;
                        for (e = 0; e < a.summary.length; e++) t = a.summary[e], r = $.isArray(t.st) ? t.st[i.idx] : t.st, $.isFunction(r) ? t.v = r.call(d, t.v, t.nm, x, i) : (t.v = b.call($(d), r, t.v, t.nm, t.sr, t.srt, x), "avg" === r.toLowerCase() && t.sd && (t.vd = b.call($(d), r, t.vd, t.sd, t.sr, t.srt, x)));
                        return a.summary
                    },
                    y = function(e, t) {
                        if (null == e && u.useDefaultValuesOnGrouping) {
                            var r, i = void 0 !== c.iColByName[t] ? c.colModel[c.iColByName[t]] : c.additionalProperties[c.iPropByName[t]];
                            null != i && null != i.formatter && (null != i.formatoptions && void 0 !== i.formatoptions.defaultValue ? e = i.formatoptions.defaultValue : "string" == typeof i.formatter && void 0 !== (r = $(d).jqGrid("getGridRes", "formatter." + i.formatter + ".defaultValue")) && (e = r))
                        }
                        return e
                    };
                for (e = 0; e < m; e++)
                    if (o = u.groupField[e], l = y(x[o], o), null == (s = null == (n = u.displayField[e]) ? null : y(x[n], n)) && (s = l), void 0 !== l) {
                        for (r = [], t = 0; t <= e; t++) r.push(x[u.groupField[t]]);
                        for (i = {
                                idx: e,
                                dataIndex: o,
                                value: l,
                                displayValue: s,
                                startRow: j,
                                cnt: 1,
                                keys: r,
                                summary: []
                            }, a = {
                                cnt: 1,
                                pos: p.length,
                                summary: $.extend(!0, [], u.summary)
                            }, 0 === j ? (p.push(i), h[e] = l, f[e] = a) : "object" == typeof l || ($.isArray(g) && $.isFunction(g[e]) ? g[e].call(d, h[e], l, e, u) : h[e] === l) ? v ? (p.push(i), h[e] = l, f[e] = a) : ((a = f[e]).cnt += 1, p[a.pos].cnt = a.cnt) : (p.push(i), h[e] = l, v = !0, f[e] = a), p[a.pos].summary = w(), t = a.pos - 1; 0 <= t; t--)
                            if (p[t].idx < p[a.pos].idx) {
                                p[a.pos].parentGroupIndex = t, p[a.pos].parentGroup = p[t];
                                break
                            }
                    }
            }), this
        },
        getGroupHeaderIndex: function(e, t) {
            var r = this[0].p,
                i = t ? $(t).closest("tr.jqgroup") : $("#" + jgrid.jqID(e)),
                a = parseInt(i.data("jqgrouplevel"), 10),
                o = r.id + "ghead_" + a + "_";
            return isNaN(a) || !i.hasClass("jqgroup") || e.length <= o.length ? -1 : parseInt(e.substring(o.length), 10)
        },
        groupingToggle: function(g, m) {
            return this.each(function() {
                var e, t, r, i = this,
                    a = i.p,
                    o = a.groupingView,
                    l = o.minusicon,
                    n = o.plusicon,
                    s = m ? $(m).closest("tr.jqgroup") : $("#" + jgrid.jqID(g)),
                    d = function(e) {
                        return e.find(">td>span.tree-wrap")
                    },
                    c = !0,
                    u = !1,
                    p = [],
                    f = function(e) {
                        var t, r = e.length;
                        for (t = 0; t < r; t++) p.push(e[t])
                    },
                    h = parseInt(s.data("jqgrouplevel"), 10);
                for (a.frozenColumns && 0 < s.length && (t = s[0].rowIndex, s = (s = $(i.rows[t])).add(i.grid.fbRows[t])), r = d(s), jgrid.hasAllClasses(r, l) ? (r.removeClass(l).addClass(n), u = !0) : r.removeClass(n).addClass(l), s = s.next(); s.length; s = s.next())
                    if (s.hasClass("jqfoot")) {
                        if (e = parseInt(s.data("jqfootlevel"), 10), u) {
                            if (e = parseInt(s.data("jqfootlevel"), 10), (!o.showSummaryOnHide && e === h || h < e) && f(s), e < h) break
                        } else if ((e === h || o.showSummaryOnHide && e === h + 1) && f(s), e <= h) break
                    } else if (s.hasClass("jqgroup"))
                    if (e = parseInt(s.data("jqgrouplevel"), 10), u) {
                        if (e <= h) break;
                        f(s)
                    } else {
                        if (e <= h) break;
                        e === h + 1 && (d(s).removeClass(l).addClass(n), f(s)), c = !1
                    }
                else(u || c) && f(s);
                $(p).css("display", u ? "none" : ""), a.frozenColumns && $(i).triggerHandler("jqGridResetFrozenHeights", [{
                    header: {
                        resizeDiv: !1,
                        resizedRows: {
                            iRowStart: -1,
                            iRowEnd: -1
                        }
                    },
                    resizeFooter: !1,
                    body: {
                        resizeDiv: !0,
                        resizedRows: {
                            iRowStart: t,
                            iRowEnd: s.length ? s[0].rowIndex - 1 : -1
                        }
                    }
                }]), i.fixScrollOffsetAndhBoxPadding(), $(i).triggerHandler("jqGridGroupingClickGroup", [g, u]), $.isFunction(a.onClickGroup) && a.onClickGroup.call(i, g, u)
            }), !1
        },
        groupingRender: function(b, w) {
            var y = "",
                j = this[0],
                C = j.p,
                x = 0,
                D = [],
                S = C.groupingView,
                q = $.makeArray(S.groupSummary),
                F = S.groupField.length,
                R = S.groups,
                _ = C.colModel,
                I = _.length,
                G = C.page,
                e = "jqGridShowHideCol.groupingRender",
                t = function(e) {
                    return base.getGuiStyles.call(j, "gridRow", e)
                },
                O = t("jqgroup ui-row-" + C.direction),
                k = t("jqfoot ui-row-" + C.direction);

            function N(e, t, r, i, a) {
                var o, l, n, s, d, c, u, p, f, h, g, m, v, b = R[e],
                    w = "",
                    y = 0,
                    x = !0;
                if (0 !== t && 0 !== R[e].idx)
                    for (o = e; 0 <= o; o--)
                        if (R[o].idx === R[e].idx - t) {
                            b = R[o];
                            break
                        }
                for (l = b.cnt, g = void 0 === a ? i : 0; g < I; g++) {
                    for (n = " ", h = _[g], p = 0; p < b.summary.length; p++)
                        if (f = b.summary[p], m = $.isArray(f.st) ? f.st[r.idx] : f.st, v = $.isArray(h.summaryTpl) ? h.summaryTpl[r.idx] : h.summaryTpl || "{0}", f.nm === h.name) {
                            "string" == typeof m && "avg" === m.toLowerCase() && (f.sd && f.vd ? f.v = f.v / f.vd : f.v && 0 < l && (f.v = f.v / l));
                            try {
                                f.groupCount = b.cnt, f.groupIndex = b.dataIndex, f.groupValue = b.value, c = j.formatter("", f.v, g, f)
                            } catch (e) {
                                c = f.v
                            }
                            n = jgrid.format(v, c), h.summaryFormat && (n = h.summaryFormat.call(j, r, n, c, h, f));
                            break
                        }
                    d = s = !1, void 0 !== a && x && (h.hidden || (n = a, x = !1, 1 < i && (s = !0, y = i - 1), d = h.align, h.align = "rtl" === C.direction ? "right" : "left", S.iconColumnName = h.name)), u = !1, 0 < y && !h.hidden && " " === n ? (u = !0, d && (h.align = d), y--) : (w += "" + n + "", s = !1, d && (h.align = d), u && (h.hidden = !1, y--))
                }
                return w
            }
            return $.each(_, function(e, t) {
                var r;
                for (r = 0; r < F; r++)
                    if (S.groupField[r] === t.name) {
                        D[r] = e;
                        break
                    }
            }), q.reverse(), $.each(R, function(e, t) {
                var r, i, a, o, l, n, s, d, c = C.id + "ghead_" + t.idx,
                    u = c + "_" + e,
                    p = $.isFunction(S.groupCollapse) ? S.groupCollapse.call(j, {
                        group: t,
                        rowid: u
                    }) : S.groupCollapse,
                    f = 1,
                    h = 0,
                    g = F - 1 === t.idx,
                    m = null != t.parentGroup && t.parentGroup.collapsed,
                    v = "";
                if (S._locgr && !(t.startRow + t.cnt > (G - 1) * w && t.startRow < G * w)) return !0;
                m && (p = !0), void 0 !== p && (t.collapsed = p), x++;
                try {
                    $.isArray(S.formatDisplayField) && $.isFunction(S.formatDisplayField[t.idx]) ? (t.displayValue = S.formatDisplayField[t.idx].call(j, t.displayValue, t.value, _[D[t.idx]], t.idx, t, e), r = t.displayValue) : r = j.formatter(u, t.displayValue, D[t.idx], t.value, t)
                } catch (e) {
                    r = t.displayValue
                }
                if (y += "", "string" != typeof(d = $.isFunction(S.groupText[t.idx]) ? S.groupText[t.idx].call(j, r, t.cnt, t.summary) : jgrid.template(S.groupText[t.idx], r, t.cnt, t.summary)) && "number" != typeof d && (d = r), "header" === S.groupSummaryPos[t.idx] ? (f = 1, "cb" !== _[0].name && "cb" !== _[1].name || f++, "subgrid" !== _[0].name && "subgrid" !== _[1].name || f++, y += N(e, 0, t, f, v + "" + d + "")) : y += "" + v + d + "", y += "", g) {
                    for (n = R[e + 1], l = t.startRow, s = void 0 !== n ? n.startRow : R[e].startRow + R[e].cnt, S._locgr && (h = (G - 1) * w) > t.startRow && (l = h), a = l; a < s && b[a - h]; a++) y += b[a - h].join("");
                    if ("header" !== S.groupSummaryPos[t.idx]) {
                        if (void 0 !== n) {
                            for (i = 0; i < S.groupField.length && n.dataIndex !== S.groupField[i]; i++);
                            x = S.groupField.length - i
                        }
                        for (o = 0; o < x; o++) q[o] && (y += "", y += N(e, o, R[t.idx - o], 0), y += "");
                        x = i
                    }
                }
            }), this.off(e).on(e, function() {
                var e, t, r, i, a = C.iColByName[S.iconColumnName];
                if (0 <= $.inArray("header", S.groupSummaryPos)) {
                    for (i = 0; i < _.length; i++)
                        if (!_[i].hidden) {
                            r = i;
                            break
                        }
                    if (void 0 === r || a === r) return;
                    for (e = 0; e < j.rows.length; e++) t = j.rows[e], $(t).hasClass("jqgroup") && ($(t.cells[r]).html(t.cells[a].innerHTML), $(t.cells[a]).html(" "));
                    S.iconColumnName = _[r].name
                }
            }), y
        },
        groupingGroupBy: function(a, o) {
            return this.each(function() {
                var e, t, r = this.p,
                    i = r.groupingView;
                for ("string" == typeof a && (a = [a]), r.grouping = !0, i._locgr = !1, void 0 === i.visibiltyOnNextGrouping && (i.visibiltyOnNextGrouping = []), e = 0; e < i.groupField.length; e++) t = r.colModel[r.iColByName[i.groupField[e]]], !i.groupColumnShow[e] && i.visibiltyOnNextGrouping[e] && null != t && !0 === t.hidden && base.showCol.call($(this), i.groupField[e]);
                for (e = 0; e < a.length; e++) i.visibiltyOnNextGrouping[e] = $(r.idSel + "_" + jgrid.jqID(a[e])).is(":visible");
                r.groupingView = $.extend(r.groupingView, o || {}), i.groupField = a, $(this).trigger("reloadGrid")
            })
        },
        groupingRemove: function(a) {
            return this.each(function() {
                var e, t = this.p,
                    r = this.tBodies[0],
                    i = t.groupingView;
                if (void 0 === a && (a = !0), !(t.grouping = !1) === a) {
                    for (e = 0; e < i.groupField.length; e++) !i.groupColumnShow[e] && i.visibiltyOnNextGrouping[e] && base.showCol.call($(this), i.groupField);
                    $("tr.jqgroup, tr.jqfoot", r).remove(), $("tr.jqgrow", r).filter(":hidden").show()
                } else $(this).trigger("reloadGrid")
            })
        },
        groupingCalculations: {
            handler: function(e, t, r, i, a, o) {
                var l, n, s = {
                    sum: function() {
                        return parseFloat(t || 0) + parseFloat(o[r] || 0)
                    },
                    min: function() {
                        return "" === t ? parseFloat(o[r] || 0) : Math.min(parseFloat(t), parseFloat(o[r] || 0))
                    },
                    max: function() {
                        return "" === t ? parseFloat(o[r] || 0) : Math.max(parseFloat(t), parseFloat(o[r] || 0))
                    },
                    count: function() {
                        return "" === t && (t = 0), o.hasOwnProperty(r) ? t + 1 : 0
                    },
                    avg: function() {
                        return s.sum()
                    }
                };
                if (!s[e]) throw "jqGrid Grouping No such method: " + e;
                return l = s[e](), null != i && ("fixed" === a ? l = l.toFixed(i) : (n = Math.pow(10, i), l = Math.round(l * n) / n)), l
            }
        }
    }), $.jgrid.extend({
        jqGridImport: function(i) {
            return i = $.extend({
                imptype: "xml",
                impstring: "",
                impurl: "",
                mtype: "GET",
                impData: {},
                xmlGrid: {
                    config: "roots>grid",
                    data: "roots>rows"
                },
                jsonGrid: {
                    config: "grid",
                    data: "data"
                },
                ajaxOptions: {}
            }, i || {}), this.each(function() {
                var e, s = this,
                    t = function(e, t) {
                        var r, i, a, o, l = $(t.xmlGrid.config, e)[0],
                            n = $(t.xmlGrid.data, e)[0];
                        if (xmlJsonClass.xml2json) {
                            for (a in r = xmlJsonClass.xml2json(l, " "), r = $.parseJSON(r)) r.hasOwnProperty(a) && (i = r[a]);
                            void 0 !== i && (n ? (o = r.grid.datatype, r.grid.datatype = "xmlstring", r.grid.datastr = e, $(s).jqGrid(i).jqGrid("setGridParam", {
                                datatype: o
                            })) : $(s).jqGrid(i))
                        } else(null != jgrid.defaults && $.isFunction(jgrid.defaults.fatalError) ? jgrid.defaults.fatalError : alert)("xml2json or parse are not present")
                    },
                    r = function(e, t) {
                        if (e && "string" == typeof e) {
                            var r, i = $.parseJSON(e),
                                a = i[t.jsonGrid.config],
                                o = i[t.jsonGrid.data];
                            o ? (r = a.datatype, a.datatype = "jsonstring", a.datastr = o, $(s).jqGrid(a).jqGrid("setGridParam", {
                                datatype: r
                            })) : $(s).jqGrid(a)
                        }
                    };
                switch (i.imptype) {
                    case "xml":
                        $.ajax($.extend({
                            url: i.impurl,
                            type: i.mtype,
                            data: i.impData,
                            dataType: "xml",
                            context: i,
                            complete: function(e) {
                                !(e.status < 300 || 304 === e.status) || 0 === e.status && 4 === e.readyState || (t(e.responseXML, this), $(s).triggerHandler("jqGridImportComplete", [e, this]), $.isFunction(this.importComplete) && this.importComplete(e))
                            }
                        }, i.ajaxOptions));
                        break;
                    case "xmlstring":
                        i.impstring && "string" == typeof i.impstring && (e = $.parseXML(i.impstring)) && (t(e, i), $(s).triggerHandler("jqGridImportComplete", [e, i]), $.isFunction(i.importComplete) && i.importComplete(e), i.impstring = null);
                        break;
                    case "json":
                        $.ajax($.extend({
                            url: i.impurl,
                            type: i.mtype,
                            data: i.impData,
                            dataType: "json",
                            context: i,
                            complete: function(e) {
                                try {
                                    !(e.status < 300 || 304 === e.status) || 0 === e.status && 4 === e.readyState || (r(e.responseText, this), $(s).triggerHandler("jqGridImportComplete", [e, this]), $.isFunction(this.importComplete) && this.importComplete(e))
                                } catch (e) {}
                            }
                        }, i.ajaxOptions));
                        break;
                    case "jsonstring":
                        i.impstring && "string" == typeof i.impstring && (r(i.impstring, i), $(s).triggerHandler("jqGridImportComplete", [i.impstring, i]), $.isFunction(i.importComplete) && i.importComplete(i.impstring), i.impstring = null)
                }
            })
        },
        jqGridExport: function(r) {
            r = $.extend({
                exptype: "xmlstring",
                root: "grid",
                ident: "\t"
            }, r || {});
            var i = null;
            return this.each(function() {
                if (this.grid) {
                    var e, t = $.extend(!0, {}, $(this).jqGrid("getGridParam"));
                    if (t.rownumbers && (t.colNames.splice(0, 1), t.colModel.splice(0, 1)), t.multiselect && (t.colNames.splice(0, 1), t.colModel.splice(0, 1)), t.subGrid && (t.colNames.splice(0, 1), t.colModel.splice(0, 1)), t.knv = null, t.treeGrid)
                        for (e in t.treeReader) t.treeReader.hasOwnProperty(e) && (t.colNames.splice(t.colNames.length - 1), t.colModel.splice(t.colModel.length - 1));
                    switch (r.exptype) {
                        case "xmlstring":
                            i = "<" + r.root + ">" + xmlJsonClass.json2xml(t, r.ident) + "";
                            break;
                        case "jsonstring":
                            i = "{" + xmlJsonClass.toJson(t, r.root, r.ident, !1) + "}", void 0 !== t.postData.filters && (i = (i = i.replace(/filters":"/, 'filters":')).replace(/\}\]\}"/, "}]}"))
                    }
                }
            }), i
        },
        excelExport: function(t) {
            return t = $.extend({
                exptype: "remote",
                url: null,
                oper: "oper",
                tag: "excel",
                exportOptions: {}
            }, t || {}), this.each(function() {
                var e;
                this.grid && "remote" === t.exptype && ((e = $.extend({}, this.p.postData, t.exportOptions))[t.oper] = t.tag, window.location = t.url + (null != t.url && 0 <= t.url.indexOf("?") ? "&" : "?") + $.param(e))
            })
        }
    });
    var editFeedback = function(e) {
        var t = $.makeArray(arguments).slice(1);
        return t.unshift(""), t.unshift("Inline"), t.unshift(e), jgrid.feedback.apply(this, t)
    };
    jgrid.inlineEdit = jgrid.inlineEdit || {}, jgrid.extend({
        editRow: function(b, e, t, r, i, a, o, l, n, s) {
            var w = {},
                d = $.makeArray(arguments).slice(1);
            return "object" === $.type(d[0]) ? w = d[0] : (void 0 !== e && (w.keys = e), $.isFunction(t) && (w.oneditfunc = t), $.isFunction(r) && (w.successfunc = r), void 0 !== i && (w.url = i), null != a && (w.extraparam = a), $.isFunction(o) && (w.aftersavefunc = o), $.isFunction(l) && (w.errorfunc = l), $.isFunction(n) && (w.afterrestorefunc = n), $.isFunction(s) && (w.beforeEditRow = s)), this.each(function() {
                var u = this,
                    o = $(u),
                    p = u.p,
                    f = 0,
                    h = null,
                    g = {},
                    m = {},
                    e = p.colModel,
                    t = p.prmNames;
                if (u.grid) {
                    var l = $.extend(!0, {
                            keys: !1,
                            oneditfunc: null,
                            successfunc: null,
                            url: null,
                            extraparam: {},
                            aftersavefunc: null,
                            errorfunc: null,
                            afterrestorefunc: null,
                            restoreAfterError: !0,
                            beforeEditRow: null,
                            focusField: !0
                        }, jgrid.inlineEdit, p.inlineEditing || {}, w),
                        n = o.jqGrid("getInd", b, !0),
                        r = l.focusField,
                        i = "object" == typeof r && null != r ? $(r.target || r).closest("tr.jqgrow>td")[0] : null;
                    if (!1 !== n && (l.extraparam[t.oper] === t.addoper || editFeedback.call(u, l, "beforeEditRow", l, b)) && "0" === ($(n).attr("editable") || "0") && !$(n).hasClass("not-editable-row")) {
                        var a = jgrid.detectRowEditing.call(u, b);
                        if (null != a && "cellEditing" === a.mode) {
                            var s = a.savedRow,
                                d = u.rows[s.id],
                                c = getGuiStateStyles.call(u, "select");
                            o.jqGrid("restoreCell", s.id, s.ic), $(d.cells[s.ic]).removeClass("edit-cell " + c), $(d).addClass(c).attr({
                                "aria-selected": "true",
                                tabindex: "0"
                            })
                        }
                        if (jgrid.enumEditableCells.call(u, n, $(n).hasClass("jqgrid-new-row") ? "add" : "edit", function(e) {
                                var t, r, i, a = e.cm,
                                    o = $(e.dataElement),
                                    l = e.dataWidth,
                                    n = a.name,
                                    s = a.edittype,
                                    d = e.iCol,
                                    c = a.editoptions || {};
                                if (m[n] = e.editable, "hidden" !== e.editable) {
                                    try {
                                        t = $.unformat.call(this, e.td, {
                                            rowId: b,
                                            colModel: a
                                        }, d)
                                    } catch (e) {
                                        t = "textarea" === s ? o.text() : o.html()
                                    }
                                    g[n] = t, o.html(""), r = $.extend({}, c, {
                                        id: b + "_" + n,
                                        name: n,
                                        rowId: b,
                                        mode: e.mode,
                                        cm: a,
                                        iCol: d
                                    }), (" " === t || " " === t || 1 === t.length && 160 === t.charCodeAt(0)) && (t = ""), i = jgrid.createEl.call(u, s, r, t, !0, $.extend({}, jgrid.ajaxOptions, p.ajaxSelectOptions || {})), $(i).addClass("editable"), o.append(i), l && $(i).width(e.dataWidth), jgrid.bindEv.call(u, i, r), "select" === s && !0 === c.multiple && void 0 === c.dataUrl && jgrid.msie && $(i).width($(i).width()), null === h && (h = d), f++
                                }
                            }), 0 < f) {
                            if (g.id = b, p.savedRow.push(g), p.editingInfo[b] = {
                                    mode: "inlineEditing",
                                    savedRow: g,
                                    editable: m
                                }, $(n).attr("editable", "1"), r && ("number" == typeof r && parseInt(r, 10) <= e.length ? h = r : "string" == typeof r ? h = p.iColByName[r] : null != i && (h = i.cellIndex), setTimeout(function() {
                                    var t = o.jqGrid("getNumberOfFrozenColumns"),
                                        e = function(e) {
                                            return p.frozenColumns && 0 < t && h < t ? u.grid.fbRows[n.rowIndex].cells[e] : n.cells[e]
                                        },
                                        r = function(e) {
                                            return $(e).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)")
                                        },
                                        i = function() {
                                            return r(p.frozenColumns && 0 < t ? u.grid.fbRows[n.rowIndex] : n).first()
                                        },
                                        a = r(e(h));
                                    0 < a.length ? a.first().focus() : "number" == typeof l.defaultFocusField || "string" == typeof l.defaultFocusField ? (0 === (a = r(e("number" == typeof l.defaultFocusField ? l.defaultFocusField : p.iColByName[l.defaultFocusField]))).length && (a = i()), a.first().focus()) : i().focus()
                                }, 0)), !0 === l.keys) {
                                var v = $(n);
                                p.frozenColumns && (v = v.add(u.grid.fbRows[n.rowIndex])), v.on("keydown", function(e) {
                                    return 27 === e.keyCode ? (o.jqGrid("restoreRow", b, l.afterrestorefunc), !1) : 13 === e.keyCode ? "TEXTAREA" === e.target.tagName || (o.jqGrid("saveRow", b, l), !1) : void 0
                                })
                            }
                            fullBoolFeedback.call(u, l.oneditfunc, "jqGridInlineEditRow", b, l)
                        }
                    }
                }
            })
        },
        saveRow: function(o, e, t, r, i, a, l, n) {
            var s, d = $.makeArray(arguments).slice(1),
                c = {},
                u = this[0],
                p = $(u),
                f = null != u ? u.p : null,
                h = jgrid.info_dialog,
                g = $.isFunction,
                m = null != jgrid.defaults && g(jgrid.defaults.fatalError) ? jgrid.defaults.fatalError : alert;
            if (u.grid && null != f) {
                "object" === $.type(d[0]) ? c = d[0] : (g(e) && (c.successfunc = e), void 0 !== t && (c.url = t), void 0 !== r && (c.extraparam = r), g(i) && (c.aftersavefunc = i), g(a) && (c.errorfunc = a), g(l) && (c.afterrestorefunc = l), g(n) && (c.beforeSaveRow = n));
                var v = function(e) {
                    return p.jqGrid("getGridRes", e)
                };
                c = $.extend(!0, {
                    successfunc: null,
                    url: null,
                    extraparam: {},
                    aftersavefunc: null,
                    errorfunc: null,
                    afterrestorefunc: null,
                    restoreAfterError: !0,
                    beforeSaveRow: null,
                    ajaxSaveOptions: {},
                    serializeSaveData: null,
                    mtype: "POST",
                    saveui: "enable",
                    savetext: v("defaults.savetext") || "Saving..."
                }, jgrid.inlineEdit, f.inlineEditing || {}, c);
                var b, w, y, x, j, C, D, S, q = {},
                    F = {},
                    R = {},
                    _ = p.jqGrid("getInd", o, !0),
                    I = $(_),
                    G = f.prmNames,
                    O = v("errors.errcap"),
                    k = v("edit.bClose"),
                    N = function(t, e) {
                        try {
                            var r = jgrid.getRelativeRect.call(u, e);
                            h.call(u, O, t, k, {
                                top: r.top,
                                left: r.left + $(u).closest(".ui-grid").offset().left
                            })
                        } catch (e) {
                            m(t)
                        }
                    };
                if (!1 !== _ && (s = c.extraparam[G.oper] === G.addoper ? "add" : "edit", editFeedback.call(u, c, "beforeSaveRow", c, o, s) && (b = I.attr("editable"), c.url = c.url || f.editurl, D = "clientArray" !== c.url, "1" === b))) {
                    if (C = $.jgrid.detectRowEditing.call(u, o), jgrid.enumEditableCells.call(u, _, I.hasClass("jqgrid-new-row") ? "add" : "edit", function(e) {
                            var t = e.cm,
                                r = t.formatter,
                                i = t.editoptions || {},
                                a = t.formatoptions || {},
                                o = {},
                                l = jgrid.getEditedValue.call(u, $(e.dataElement), t, o, e.editable);
                            if ("select" === t.edittype && "select" !== t.formatter && (F[t.name] = o.text), null != (j = jgrid.checkValues.call(u, l, e.iCol, void 0, void 0, $.extend(e, {
                                    oldValue: null != C ? C.savedRow[t.name] : null,
                                    newValue: l,
                                    oldRowData: null != C ? C.savedRow : null
                                }))) && !1 === j[0]) return S = !0, N(j[1], e.td), !1;
                            "date" === r && !0 !== a.sendFormatted && (l = $.unformat.date.call(u, l, t)), D && !0 === i.NullIfEmpty && "" === l && (l = "null"), q[t.name] = l
                        }), S) return;
                    var E;
                    G = f.prmNames, E = !1 === f.keyName ? G.id : f.keyName, q && (q[G.oper] = G.editoper, void 0 !== q[E] && "" !== q[E] || (q[E] = jgrid.stripPref(f.idPrefix, o)), q = $.extend({}, q, f.inlineData || {}, c.extraparam));
                    var A = {
                        options: c,
                        rowid: o,
                        tr: _,
                        iRow: _.rowIndex,
                        savedRow: C.savedRow,
                        newData: q,
                        mode: s
                    };
                    if (!editFeedback.call(u, c, "saveRowValidation", A)) return void(A.errorText && N(A.errorText, _));
                    if (D) p.jqGrid("progressBar", {
                        method: "show",
                        loadtype: c.saveui,
                        htmlcontent: c.savetext
                    }), (R = $.extend({}, q, R))[E] = jgrid.stripPref(f.idPrefix, R[E]), f.autoEncodeOnEdit && $.each(R, function(e, t) {
                        g(t) || (R[e] = jgrid.oldEncodePostedData(t))
                    }), _.id === f.idPrefix + R[E] || null == G.idold || R.hasOwnProperty(G.idold) || (R[G.idold] = jgrid.stripPref(f.idPrefix, _.id)), $.ajax($.extend({
                        url: g(c.url) ? c.url.call(u, R[E], s, R, c) : c.url,
                        data: jgrid.serializeFeedback.call(u, g(c.serializeSaveData) ? c.serializeSaveData : f.serializeRowData, "jqGridInlineSerializeSaveData", R),
                        type: g(c.mtype) ? c.mtype.call(u, s, c, R[E], R) : c.mtype,
                        complete: function(e, t) {
                            var r, i, a;
                            if (p.jqGrid("progressBar", {
                                    method: "hide",
                                    loadtype: c.saveui
                                }), (e.status < 300 || 304 === e.status) && (0 !== e.status || 4 !== e.readyState))
                                if (null != (i = p.triggerHandler("jqGridInlineSuccessSaveRow", [e, o, c, s, R])) && !0 !== i || (i = [!0, q]), i[0] && g(c.successfunc) && (i = c.successfunc.call(u, e, o, c, s, R)), $.isArray(i) ? (r = i[0], q = i[1] || q) : r = i, !0 === r) {
                                    for (f.autoEncodeOnEdit && $.each(q, function(e, t) {
                                            q[e] = jgrid.oldDecodePostedData(t)
                                        }), q = $.extend({}, q, F), p.jqGrid("setRowData", o, q), I.attr("editable", "0"), a = 0; a < f.savedRow.length; a++)
                                        if (String(f.savedRow[a].id) === String(o)) {
                                            y = a;
                                            break
                                        }
                                    0 <= y && (f.savedRow.splice(y, 1), delete f.editingInfo[o]), fullBoolFeedback.call(u, c.aftersavefunc, "jqGridInlineAfterSaveRow", o, e, q, c), null != i[2] ? p.jqGrid("changeRowid", o, f.idPrefix + i[2]) : _.id !== f.idPrefix + q[E] && p.jqGrid("changeRowid", _.id, f.idPrefix + q[E]), I.removeClass("jqgrid-new-row").off("keydown")
                                } else fullBoolFeedback.call(u, c.errorfunc, "jqGridInlineErrorSaveRow", o, e, t, null, c), !0 === c.restoreAfterError && p.jqGrid("restoreRow", o, c.afterrestorefunc)
                        },
                        error: function(e, t, r) {
                            if (p.triggerHandler("jqGridInlineErrorSaveRow", [o, e, t, r, c]), g(c.errorfunc)) c.errorfunc.call(u, o, e, t, r);
                            else {
                                var i = e.responseText || e.statusText;
                                try {
                                    h.call(u, O, '
' + i + "
", k, {
                                        buttonalign: "right"
                                    })
                                } catch (e) {
                                    m(i)
                                }
                            }!0 === c.restoreAfterError && p.jqGrid("restoreRow", o, c.afterrestorefunc)
                        }
                    }, jgrid.ajaxOptions, f.ajaxRowOptions, c.ajaxSaveOptions || {}));
                    else {
                        for (q = $.extend({}, q, F), x = p.jqGrid("setRowData", o, q), I.attr("editable", "0"), w = 0; w < f.savedRow.length; w++)
                            if (String(f.savedRow[w].id) === String(o)) {
                                y = w;
                                break
                            }
                        0 <= y && (f.savedRow.splice(y, 1), delete f.editingInfo[o]), fullBoolFeedback.call(u, c.aftersavefunc, "jqGridInlineAfterSaveRow", o, x, q, c), I.removeClass("jqgrid-new-row").off("keydown"), _.id !== f.idPrefix + q[E] && p.jqGrid("changeRowid", _.id, f.idPrefix + q[E])
                    }
                }
            }
        },
        restoreRow: function(s, e) {
            var t = $.makeArray(arguments).slice(1),
                d = {};
            return "object" === $.type(t[0]) ? d = t[0] : $.isFunction(e) && (d.afterrestorefunc = e), this.each(function() {
                var e, t = this,
                    r = $(t),
                    i = t.p,
                    a = -1,
                    o = {};
                if (t.grid) {
                    var l = $.extend(!0, {}, jgrid.inlineEdit, i.inlineEditing || {}, d),
                        n = r.jqGrid("getInd", s, !0);
                    if (!1 !== n && editFeedback.call(t, l, "beforeCancelRow", l, s)) {
                        for (e = 0; e < i.savedRow.length; e++)
                            if (String(i.savedRow[e].id) === String(s)) {
                                a = e;
                                break
                            }
                        if (0 <= a) {
                            if ($.isFunction($.fn.datepicker)) try {
                                $("input.hasDatepicker", "#" + jgrid.jqID(n.id)).datepicker("hide")
                            } catch (e) {}
                            $.each(i.colModel, function() {
                                var e = this.name;
                                i.savedRow[a].hasOwnProperty(e) && (o[e] = i.savedRow[a][e], !this.formatter || "date" !== this.formatter || null != this.formatoptions && !0 === this.formatoptions.sendFormatted || (o[e] = $.unformat.date.call(t, o[e], this)))
                            }), r.jqGrid("setRowData", s, o), $(n).attr("editable", "0").off("keydown"), i.savedRow.splice(a, 1), delete i.editingInfo[s], $("#" + jgrid.jqID(s), t).hasClass("jqgrid-new-row") && setTimeout(function() {
                                r.jqGrid("delRowData", s), r.jqGrid("showAddEditButtons", !1)
                            }, 0)
                        }
                        fullBoolFeedback.call(t, l.afterrestorefunc, "jqGridInlineAfterRestoreRow", s)
                    }
                }
            })
        },
        addRow: function(l) {
            return this.each(function() {
                if (this.grid) {
                    var t = this,
                        e = $(t),
                        r = t.p,
                        i = $.extend(!0, {
                            rowID: null,
                            initdata: {},
                            position: "first",
                            useDefValues: !0,
                            useFormatter: !1,
                            beforeAddRow: null,
                            addRowParams: {
                                extraparam: {}
                            }
                        }, jgrid.inlineEdit, r.inlineEditing || {}, l || {});
                    if (editFeedback.call(t, i, "beforeAddRow", i.addRowParams))
                        if (i.rowID = $.isFunction(i.rowID) ? i.rowID.call(t, i) : null != i.rowID ? i.rowID : jgrid.randId(), !0 === i.useDefValues && $(r.colModel).each(function() {
                                if (this.editoptions && this.editoptions.defaultValue) {
                                    var e = this.editoptions.defaultValue;
                                    i.initdata[this.name] = $.isFunction(e) ? e.call(t, i) : e
                                }
                            }), i.rowID = r.idPrefix + i.rowID, e.jqGrid("addRowData", i.rowID, i.initdata, i.position), $("#" + jgrid.jqID(i.rowID), t).addClass("jqgrid-new-row"), i.useFormatter) $("#" + jgrid.jqID(i.rowID) + " .ui-inline-edit", t).click();
                        else {
                            var a = r.prmNames,
                                o = a.oper;
                            i.addRowParams.extraparam[o] = a.addoper, e.jqGrid("editRow", i.rowID, i.addRowParams), e.jqGrid("setSelection", i.rowID)
                        }
                }
            })
        },
        inlineNav: function(f, h) {
            return "object" == typeof f && (h = f, f = void 0), this.each(function() {
                var a = this,
                    o = $(a),
                    l = a.p;
                if (this.grid && null != l) {
                    var e, t = f === l.toppager ? l.idSel + "_top" : l.idSel,
                        r = f === l.toppager ? l.id + "_top" : l.id,
                        n = getGuiStateStyles.call(a, "disabled"),
                        s = $.extend(!0, {
                            edit: !0,
                            editicon: "ui-icon-pencil",
                            add: !0,
                            addicon: "ui-icon-plus",
                            save: !0,
                            saveicon: "ui-icon-disk",
                            cancel: !0,
                            cancelicon: "ui-icon-cancel",
                            commonIconClass: "ui-icon",
                            iconsOverText: !1,
                            addParams: {
                                addRowParams: {
                                    extraparam: {}
                                }
                            },
                            editParams: {},
                            restoreAfterSelect: !0
                        }, o.jqGrid("getGridRes", "nav"), jgrid.nav || {}, l.navOptions || {}, jgrid.inlineNav || {}, l.inlineNavOptions || {}, h || {}),
                        d = function() {
                            a.modalAlert()
                        };
                    if (void 0 === f)
                        if (l.pager) {
                            if (o.jqGrid("inlineNav", l.pager, s), !l.toppager) return;
                            f = l.toppager, t = l.idSel + "_top", r = l.id + "_top"
                        } else l.toppager && (f = l.toppager, t = l.idSel + "_top", r = l.id + "_top");
                    if (void 0 !== f && !((e = $(f)).length <= 0)) {
                        if (e.find(".navtable").length <= 0 && o.jqGrid("navGrid", f, {
                                add: !1,
                                edit: !1,
                                del: !1,
                                search: !1,
                                refresh: !1,
                                view: !1
                            }), (l._inlinenav = !0) === s.addParams.useFormatter) {
                            var i, c, u, p = l.colModel;
                            for (i = 0; i < p.length; i++)
                                if (p[i].formatter && "actions" === p[i].formatter) {
                                    p[i].formatoptions && (c = {
                                        keys: !1,
                                        onEdit: null,
                                        onSuccess: null,
                                        afterSave: null,
                                        onError: null,
                                        afterRestore: null,
                                        extraparam: {},
                                        url: null
                                    }, u = $.extend(c, p[i].formatoptions), s.addParams.addRowParams = {
                                        keys: u.keys,
                                        oneditfunc: u.onEdit,
                                        successfunc: u.onSuccess,
                                        url: u.url,
                                        extraparam: u.extraparam,
                                        aftersavefunc: u.afterSave,
                                        errorfunc: u.onError,
                                        afterrestorefunc: u.afterRestore
                                    });
                                    break
                                }
                        }
                        s.add && o.jqGrid("navButtonAdd", f, {
                            caption: s.addtext,
                            title: s.addtitle,
                            commonIconClass: s.commonIconClass,
                            buttonicon: s.addicon,
                            iconsOverText: s.iconsOverText,
                            id: r + "_iladd",
                            onClickButton: function() {
                                hasOneFromClasses(this, n) || o.jqGrid("addRow", s.addParams)
                            }
                        }), s.edit && o.jqGrid("navButtonAdd", f, {
                            caption: s.edittext,
                            title: s.edittitle,
                            commonIconClass: s.commonIconClass,
                            buttonicon: s.editicon,
                            iconsOverText: s.iconsOverText,
                            id: r + "_iledit",
                            onClickButton: function() {
                                if (!hasOneFromClasses(this, n)) {
                                    var e = l.selrow;
                                    e ? o.jqGrid("editRow", e, s.editParams) : d()
                                }
                            }
                        }), s.save && (o.jqGrid("navButtonAdd", f, {
                            caption: s.savetext,
                            title: s.savetitle,
                            commonIconClass: s.commonIconClass,
                            buttonicon: s.saveicon,
                            iconsOverText: s.iconsOverText,
                            id: r + "_ilsave",
                            onClickButton: function() {
                                if (!hasOneFromClasses(this, n) && 0 < l.savedRow.length) {
                                    var e = l.savedRow[0].id;
                                    if (e) {
                                        var t = l.prmNames,
                                            r = t.oper,
                                            i = s.editParams;
                                        $("#" + jgrid.jqID(e), a).hasClass("jqgrid-new-row") ? (s.addParams.addRowParams.extraparam[r] = t.addoper, i = s.addParams.addRowParams) : (s.editParams.extraparam || (s.editParams.extraparam = {}), s.editParams.extraparam[r] = t.editoper), o.jqGrid("saveRow", e, i)
                                    } else d()
                                }
                            }
                        }), $(t + "_ilsave").addClass(n)), s.cancel && (o.jqGrid("navButtonAdd", f, {
                            caption: s.canceltext,
                            title: s.canceltitle,
                            commonIconClass: s.commonIconClass,
                            buttonicon: s.cancelicon,
                            iconsOverText: s.iconsOverText,
                            id: r + "_ilcancel",
                            onClickButton: function() {
                                if (!hasOneFromClasses(this, n) && 0 < l.savedRow.length) {
                                    var e = l.savedRow[0].id,
                                        t = s.editParams;
                                    e ? ($("#" + jgrid.jqID(e), a).hasClass("jqgrid-new-row") && (t = s.addParams.addRowParams), o.jqGrid("restoreRow", e, t)) : d()
                                }
                            }
                        }), $(t + "_ilcancel").addClass(n)), !0 === s.restoreAfterSelect && o.on("jqGridSelectRow", function(e, t) {
                            if (0 < l.savedRow.length && !0 === l._inlinenav) {
                                var r = l.savedRow[0].id;
                                t !== r && "number" != typeof r && o.jqGrid("restoreRow", r, s.editParams)
                            }
                        }), o.on("jqGridInlineAfterRestoreRow jqGridInlineAfterSaveRow", function() {
                            o.jqGrid("showAddEditButtons", !1)
                        }), o.on("jqGridInlineEditRow", function(e, t) {
                            o.jqGrid("showAddEditButtons", !0, t)
                        })
                    }
                }
            })
        },
        showAddEditButtons: function(o) {
            return this.each(function() {
                if (this.grid) {
                    var e = this.p,
                        t = e.idSel,
                        r = getGuiStateStyles.call(this, "disabled"),
                        i = t + "_ilsave," + t + "_ilcancel" + (e.toppager ? "," + t + "_top_ilsave," + t + "_top_ilcancel" : ""),
                        a = t + "_iladd," + t + "_iledit" + (e.toppager ? "," + t + "_top_iladd," + t + "_top_iledit" : "");
                    $(o ? a : i).addClass(r), $(o ? i : a).removeClass(r)
                }
            })
        }
    });
    var $UiMultiselect = null != $.ui ? $.ui.multiselect : null,
        reorderSelectedColumns = function(r) {
            if (null != this.grid && null != this.grid.p) {
                var i, e, t, a, o, l = this,
                    n = this.grid.p,
                    s = this.gh,
                    d = this.selectedList,
                    c = this.inGroup,
                    u = d.find("li"),
                    p = u.length - 1,
                    f = function(e, t, r) {
                        var i, a, o = d.find("li");
                        for (void 0 === t && (t = r ? o.length - 1 : 0), i = t; r ? 0 <= i : i < o.length; r ? i-- : i++)
                            if ((a = $(o[i]).data("optionLink")) && e.call(o[i], parseInt(a.val(), 10), i)) return i
                    },
                    h = function() {
                        0 <= (e = $.inArray(n.colModel[r].name, l.newColOrder)) && l.newColOrder.splice(e, 1), u = d.find("li"), i = 0, f(function(e, t) {
                            if (e === r) {
                                for (p = t; 0 <= i && i < n.colModel.length && i !== r && (n.colModel[i].hidden || n.colModel[i].hidedlg) && (null == c || c[i] === c[r]);) i++;
                                return l.newColOrder.splice(i, 0, n.colModel[r].name), !0
                            }(i = $.inArray(n.colModel[e].name, l.newColOrder, i)) < 0 && (i = $.inArray(n.colModel[e].name, l.newColOrder)), i++
                        })
                    },
                    g = function(e) {
                        if (c[e] === c[r]) return $(this).after(u[p]), h(), !0
                    },
                    m = function(e) {
                        if (c[e] === c[r]) return $(this).before(u[p]), h(), !0
                    },
                    v = function(e) {
                        if (c[e] === c[r] && void 0 !== c[e]) return s[c[e]].startColumnName = n.colModel[e].name, !0
                    };
                if (h(), s && void 0 !== s[c[r]]) {
                    for (a = s[c[r]], e = 0; e < a.numberOfColumns; e++)
                        if (i = n.iColByName[a.startColumnName] + e, !n.colModel[i].hidden && !n.colModel[i].hidedlg) {
                            f(g, p - 1, !0), f(m, p + 1), f(v);
                            break
                        }
                } else if (s) {
                    if (u = d.find("li"), (e = f(function(e) {
                            if (e === r) return !0
                        })) + 1 >= u.length || e < 0) return;
                    if ((o = $(u[e + 1]).data("optionLink")) && void 0 !== (t = c[parseInt(o.val(), 10)]) && (o = $(u[e - 1]).data("optionLink")) && c[parseInt(o.val(), 10)] === t) {
                        var b = f(function(e) {
                            if (c[e] !== t) return !0
                        }, e + 1);
                        $(u[void 0 === b || b >= u.length ? u.length - 1 : b - 1]).after(u[p]), h()
                    }
                }
            }
        };
    if (jgrid.msie && 8 === jgrid.msiever() && ($.expr[":"].hidden = function(e) {
            return 0 === e.offsetWidth || 0 === e.offsetHeight || "none" === e.style.display
        }), jgrid._multiselect = !1, $UiMultiselect) {
        if ($UiMultiselect.prototype._setSelected) {
            var setSelected = $UiMultiselect.prototype._setSelected;
            $UiMultiselect.prototype._setSelected = function(e, t) {
                var r = setSelected.call(this, e, t),
                    i = this.element,
                    a = parseInt(e.data("optionLink").val(), 10);
                return t && this.selectedList && (reorderSelectedColumns.call(this, a), this.selectedList.find("li").each(function() {
                    $(this).data("optionLink") && $(this).data("optionLink").remove().appendTo(i)
                })), r
            }
        }
        $UiMultiselect.prototype.destroy && ($UiMultiselect.prototype.destroy = function() {
            this.element.show(), this.container.remove(), void 0 === $.Widget ? $.widget.prototype.destroy.apply(this, arguments) : $.Widget.prototype.destroy.apply(this, arguments)
        }), jgrid._multiselect = !0
    }

    function Aggregation(e, t, r) {
        if (!(this instanceof Aggregation)) return new Aggregation(e);
        this.aggregator = e, this.finilized = !1, this.context = t, this.pivotOptions = r
    }

    function ArrayOfFieldsets(e, t, r, i, a) {
        var o, l, n = i.length,
            s = this,
            d = function(e, t) {
                var r = e,
                    i = t;
                if (null == r && (r = ""), null == i && (i = ""), r = String(r), i = String(i), this.caseSensitive || (r = r.toUpperCase(), i = i.toUpperCase()), r === i) {
                    if (e === t) return 0;
                    if (void 0 === e) return -1;
                    if (void 0 === t) return 1;
                    if (null === e) return -1;
                    if (null === t) return 1
                }
                return r < i ? -1 : 1
            },
            c = function(e, t) {
                return (e = Number(e)) === (t = Number(t)) ? 0 : e < t ? -1 : 1
            },
            u = function(e, t) {
                return (e = Math.floor(Number(e))) === (t = Math.floor(Number(t))) ? 0 : e < t ? -1 : 1
            };
        for (s.items = [], s.indexesOfSourceData = [], s.trimByCollect = e, s.caseSensitive = t, s.skipSort = r, s.fieldLength = n, s.fieldNames = new Array(n), s.fieldSortDirection = new Array(n), s.fieldCompare = new Array(n), o = 0; o < n; o++) {
            switch (l = i[o], s.fieldNames[o] = l[a || "dataName"], l.sorttype) {
                case "integer":
                case "int":
                    s.fieldCompare[o] = u;
                    break;
                case "number":
                case "currency":
                case "float":
                    s.fieldCompare[o] = c;
                    break;
                default:
                    s.fieldCompare[o] = $.isFunction(l.compare) ? l.compare : d
            }
            s.fieldSortDirection[o] = "desc" === l.sortorder ? -1 : 1
        }
    }
    jgrid.extend({
        sortableColumns: function(s) {
            return this.each(function() {
                var o = this,
                    l = o.p,
                    e = jqID(l.id);
                if (l && l.sortable && $.isFunction($.fn.sortable)) {
                    var t = {
                        tolerance: "pointer",
                        axis: "x",
                        scrollSensitivity: "1",
                        items: ">th:not(:has(#jqgh_" + e + "_cb,#jqgh_" + e + "_rn,#jqgh_" + e + "_subgrid),:hidden)",
                        placeholder: {
                            element: function(e) {
                                return $(document.createElement(e[0].nodeName)).addClass(e[0].className + " ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]
                            },
                            update: function(e, t) {
                                t.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), t.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))
                            }
                        },
                        start: function() {
                            o.grid.hDiv.scrollLeft = o.grid.bDiv.scrollLeft
                        },
                        update: function(e, t) {
                            var r = $(">th", $(t.item).parent()),
                                i = l.id + "_",
                                a = [];
                            r.each(function() {
                                var e = $(">div", this).get(0).id.replace(/^jqgh_/, "").replace(i, ""),
                                    t = l.iColByName[e];
                                void 0 !== t && a.push(t)
                            }), $(o).jqGrid("remapColumns", a, !0, !0), $.isFunction(l.sortable.update) && l.sortable.update(a), setTimeout(function() {
                                l.disableClick = !1
                            }, 50)
                        }
                    };
                    if (l.sortable.options ? $.extend(t, l.sortable.options) : $.isFunction(l.sortable) && (l.sortable = {
                            update: l.sortable
                        }), t.start) {
                        var r = t.start;
                        t.start = function(e, t) {
                            n(), r.call(this, e, t)
                        }
                    } else t.start = n;
                    l.sortable.exclude && (t.items += ":not(" + l.sortable.exclude + ")");
                    var i = s.sortable(t),
                        a = i.data("sortable") || i.data("uiSortable") || i.data("ui-sortable");
                    null != a && (a.floating = !0)
                }

                function n() {
                    l.disableClick = !0
                }
            })
        },
        columnChooser: function(o) {
            var t, l, e, r, i, n, a, s = this,
                d = s[0],
                c = d.p,
                u = c.colModel,
                p = u.length,
                f = c.colNames,
                h = function(e) {
                    return $UiMultiselect && $UiMultiselect.prototype && e.data($UiMultiselect.prototype.widgetFullName || $UiMultiselect.prototype.widgetName) || e.data("ui-multiselect") || e.data("multiselect")
                };
            if (!$("#colchooser_" + jqID(c.id)).length) {
                if (t = $('

'), l = $("select", t), o = $.extend({
                        width: 400,
                        height: 240,
                        classname: null,
                        done: function(e) {
                            e && s.jqGrid("remapColumns", e, !0)
                        },
                        msel: "multiselect",
                        dlog: "dialog",
                        dialog_opts: {
                            minWidth: 470,
                            dialogClass: "ui-jqdialog"
                        },
                        dlog_opts: function(e) {
                            var t = {};
                            return t[e.bSubmit] = function() {
                                e.apply_perm(), e.cleanup(!1)
                            }, t[e.bCancel] = function() {
                                e.cleanup(!0)
                            }, $.extend(!0, {
                                buttons: t,
                                close: function() {
                                    e.cleanup(!0)
                                },
                                modal: e.modal || !1,
                                resizable: e.resizable || !0,
                                width: e.width + 70,
                                resize: function() {
                                    var e = h(l),
                                        t = e.container.closest(".ui-dialog-content");
                                    0 < t.length && "object" == typeof t[0].style ? t[0].style.width = "" : t.css("width", ""), e.selectedList.height(Math.max(e.selectedContainer.height() - e.selectedActions.outerHeight() - 1, 1)), e.availableList.height(Math.max(e.availableContainer.height() - e.availableActions.outerHeight() - 1, 1))
                                }
                            }, e.dialog_opts || {})
                        },
                        apply_perm: function() {
                            var e, t, r = new Array(c.colModel.length),
                                i = {
                                    notSkipFrozen: void 0 !== o.notSkipFrozen && o.notSkipFrozen,
                                    skipSetGridWidth: !0,
                                    skipSetGroupHeaders: !0
                                };
                            for (e = 0; e < c.colModel.length; e++) r[e] = c.iColByName[n.newColOrder[e]];
                            if ($("option", l).each(function() {
                                    $(this).is(":selected") ? s.jqGrid("showCol", u[this.value].name, i) : s.jqGrid("hideCol", u[this.value].name, i)
                                }), o.done && o.done.call(s, r), c.groupHeader && ("object" == typeof c.groupHeader || $.isFunction(c.groupHeader)))
                                if (s.jqGrid("destroyGroupHeader", !1), c.groupHeader.groupHeaders = n.gh, null != c.pivotOptions && null != c.pivotOptions.colHeaders && 1 < c.pivotOptions.colHeaders.length)
                                    for (t = c.pivotOptions.colHeaders, e = 0; e < t.length; e++) t[e] && t[e].groupHeaders.length && s.jqGrid("setGroupHeaders", t[e]);
                                else s.jqGrid("setGroupHeaders", c.groupHeader);
                            var a = c.autowidth || void 0 !== c.widthOrg && "auto" !== c.widthOrg && "100%" !== c.widthOrg ? c.width : c.tblwidth;
                            a !== c.width && s.jqGrid("setGridWidth", a, c.shrinkToFit)
                        },
                        cleanup: function(e) {
                            C(o.dlog, t, "destroy"), C(o.msel, l, "destroy"), t.remove(), e && o.done && o.done.call(s)
                        },
                        msel_opts: {}
                    }, s.jqGrid("getGridRes", "col"), jgrid.col, o || {}), $.ui && $UiMultiselect && $UiMultiselect.defaults) {
                    if (!jgrid._multiselect) return void(null != jgrid.defaults && $.isFunction(jgrid.defaults.fatalError) ? jgrid.defaults.fatalError : alert)("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");
                    o.msel_opts = $.extend($UiMultiselect.defaults, o.msel_opts)
                }
                o.caption && t.attr("title", o.caption), o.classname && (t.addClass(o.classname), l.addClass(o.classname)), o.width && ($(">div", t).css({
                    width: o.width,
                    margin: "0 auto"
                }), l.css("width", o.width)), o.height && ($(">div", t).css("height", o.height), l.css("height", o.height - 10)), l.empty();
                var g, m, v, b, w = null != c.groupHeader ? c.groupHeader.groupHeaders : 0,
                    y = {};
                if (w)
                    for (g = 0; g < w.length; g++)
                        for (b = w[g], m = 0; m < b.numberOfColumns; m++) v = c.iColByName[b.startColumnName] + m, y[v] = $.isFunction(o.buildItemText) ? o.buildItemText.call(s[0], {
                            iCol: v,
                            cm: u[v],
                            cmName: u[v].name,
                            colName: f[v],
                            groupTitleText: b.titleText
                        }) : $.jgrid.stripHtml(b.titleText) + ": " + $.jgrid.stripHtml("" === f[v] ? u[v].name : f[v]);
                for (v = 0; v < p; v++) void 0 === y[v] && (y[v] = $.isFunction(o.buildItemText) ? o.buildItemText.call(s[0], {
                    iCol: v,
                    cm: u[v],
                    cmName: u[v].name,
                    colName: f[v],
                    groupTitleText: null
                }) : $.jgrid.stripHtml(f[v]));
                if ($.each(u, function(e) {
                        this.hidedlg || l.append("" + y[e] + "")
                    }), e = $.isFunction(o.dlog_opts) ? o.dlog_opts.call(s, o) : o.dlog_opts, C(o.dlog, t, e), r = $.isFunction(o.msel_opts) ? o.msel_opts.call(s, o) : o.msel_opts, C(o.msel, l, r), (i = $("#colchooser_" + jqID(c.id))).css({
                        margin: "auto"
                    }), i.find(">div").css({
                        width: "100%",
                        height: "100%",
                        margin: "auto"
                    }), n = h(l)) {
                    var x, j;
                    if (n.grid = d, w)
                        for (n.gh = $.extend(!0, [], w), n.inGroup = new Array(c.colModel.length), x = 0; x < w.length; x++)
                            for (j = w[x], v = 0; v < j.numberOfColumns; v++) n.inGroup[c.iColByName[j.startColumnName] + v] = x;
                    n.newColOrder = $.map(u, function(e) {
                        return e.name
                    }), n.container.css({
                        width: "100%",
                        height: "100%",
                        margin: "auto"
                    }), n.selectedContainer.css({
                        width: 100 * n.options.dividerLocation + "%",
                        height: "100%",
                        margin: "auto",
                        boxSizing: "border-box"
                    }), n.availableContainer.css({
                        width: 100 - 100 * n.options.dividerLocation + "%",
                        height: "100%",
                        margin: "auto",
                        boxSizing: "border-box"
                    }), n.selectedList.css("height", "auto"), n.availableList.css("height", "auto"), a = Math.max(n.selectedList.height(), n.availableList.height()), a = Math.min(a, $(window).height()), n.selectedList.css("height", a), n.availableList.css("height", a), null != n.options && n.options.sortable && n.selectedList.on("sortupdate", function(e, t) {
                        reorderSelectedColumns.call(n, parseInt(t.item.data("optionLink").val(), 10)), t.item.css({
                            width: "",
                            height: ""
                        }), $.isFunction(o.sortUpdate) && o.sortUpdate.call(d, e, t)
                    }), $.isFunction(o.init) && o.init.call(d, n)
                }
            }

            function C(e, t) {
                e && ("string" == typeof e ? $.fn[e] && $.fn[e].apply(t, $.makeArray(arguments).slice(2)) : $.isFunction(e) && e.apply(t, $.makeArray(arguments).slice(2)))
            }
        },
        sortableRows: function(l) {
            return this.each(function() {
                var i = this,
                    a = i.grid,
                    o = i.p;
                a && (o.treeGrid || $.fn.sortable && ((l = $.extend({
                    cursor: "move",
                    axis: "y",
                    items: ">tbody>.jqgrow"
                }, l || {})).start && $.isFunction(l.start) ? (l._start_ = l.start, delete l.start) : l._start_ = !1, l.update && $.isFunction(l.update) ? (l._update_ = l.update, delete l.update) : l._update_ = !1, l.start = function(e, t) {
                    if ($(t.item).css("border-width", "0"), $("td", t.item).each(function(e) {
                            this.style.width = a.cols[e].style.width
                        }), o.subGrid) {
                        var r = $(t.item).attr("id");
                        try {
                            $(i).jqGrid("collapseSubGridRow", r)
                        } catch (e) {}
                    }
                    l._start_ && l._start_.apply(this, [e, t])
                }, l.update = function(e, t) {
                    $(t.item).css("border-width", ""), !0 === o.rownumbers && $("td.jqgrid-rownum", i.rows).each(function(e) {
                        $(this).html(e + 1 + (parseInt(o.page, 10) - 1) * parseInt(o.rowNum, 10))
                    }), l._update_ && l._update_.apply(this, [e, t])
                }, $(i).sortable(l)))
            })
        },
        gridDnD: function(i) {
            return this.each(function() {
                var e, t, g = this;
                if (g.grid && !g.p.treeGrid && $.fn.draggable && $.fn.droppable) {
                    if (void 0 === $("#jqgrid_dnd")[0] && $("body").append("
"), "string" != typeof i || "updateDnD" !== i || !0 !== g.p.jqgdnd) {
                        if ((i = $.extend({
                                drag: function(a) {
                                    return $.extend({
                                        start: function(e, t) {
                                            var r, i;
                                            if (g.p.subGrid) {
                                                i = $(t.helper).attr("id");
                                                try {
                                                    $(g).jqGrid("collapseSubGridRow", i)
                                                } catch (e) {}
                                            }
                                            for (r = 0; r < $.data(g, "dnd").connectWith.length; r++) 0 === $($.data(g, "dnd").connectWith[r]).jqGrid("getGridParam", "reccount") && $($.data(g, "dnd").connectWith[r]).jqGrid("addRowData", "jqg_empty_row", {});
                                            t.helper.addClass("ui-state-highlight"), $("td", t.helper).each(function(e) {
                                                this.style.width = g.grid.headers[e].width + "px"
                                            }), a.onstart && $.isFunction(a.onstart) && a.onstart.call($(g), e, t)
                                        },
                                        stop: function(e, t) {
                                            var r, i;
                                            for (t.helper.dropped && !a.dragcopy && (void 0 === (i = $(t.helper).attr("id")) && (i = $(this).attr("id")), $(g).jqGrid("delRowData", i)), r = 0; r < $.data(g, "dnd").connectWith.length; r++) $($.data(g, "dnd").connectWith[r]).jqGrid("delRowData", "jqg_empty_row");
                                            a.onstop && $.isFunction(a.onstop) && a.onstop.call($(g), e, t)
                                        }
                                    }, a.drag_opts || {})
                                },
                                drop: function(h) {
                                    return $.extend({
                                        accept: function(e) {
                                            if (!$(e).hasClass("jqgrow")) return e;
                                            var t = $(e).closest("table.ui-grid-btable");
                                            if (0 < t.length && void 0 !== $.data(t[0], "dnd")) {
                                                var r = $.data(t[0], "dnd").connectWith;
                                                return -1 !== $.inArray("#" + jqID(this.id), r)
                                            }
                                            return !1
                                        },
                                        drop: function(e, t) {
                                            if ($(t.draggable).hasClass("jqgrow")) {
                                                var r, i = $(t.draggable).attr("id"),
                                                    a = t.draggable.parent().parent(),
                                                    o = a.jqGrid("getRowData", i);
                                                if (!h.dropbyname) {
                                                    var l, n, s, d, c = {},
                                                        u = a.jqGrid("getGridParam", "colModel"),
                                                        p = $("#" + jqID(this.id)).jqGrid("getGridParam", "colModel");
                                                    try {
                                                        for (n = l = 0; l < u.length && n < p.length; l++)
                                                            if ("cb" !== (s = u[l].name) && "rn" !== s && "subgrid" !== s) {
                                                                for (; n < p.length; n++)
                                                                    if ("cb" !== (d = p[n].name) && "rn" !== d && "subgrid" !== d) {
                                                                        c[d] = o[s];
                                                                        break
                                                                    }
                                                                n++
                                                            }
                                                        o = c
                                                    } catch (e) {}
                                                }
                                                if (t.helper.dropped = !0, h.beforedrop && $.isFunction(h.beforedrop)) {
                                                    var f = h.beforedrop.call(this, e, t, o, $("#" + jqID(g.p.id)), $(this));
                                                    null != f && "object" == typeof f && (o = f)
                                                }
                                                if (t.helper.dropped) h.autoid && ($.isFunction(h.autoid) ? r = h.autoid.call(this, o, {
                                                    rowid: i,
                                                    ev: e,
                                                    ui: t
                                                }) : (r = Math.ceil(1e3 * Math.random()), r = h.autoidprefix + r)), $("#" + jqID(this.id)).jqGrid("addRowData", r, o, h.droppos), o[g.p.localReader.id] = r;
                                                h.ondrop && $.isFunction(h.ondrop) && h.ondrop.call(this, e, t, o)
                                            }
                                        }
                                    }, h.drop_opts || {})
                                },
                                onstart: null,
                                onstop: null,
                                beforedrop: null,
                                ondrop: null,
                                drop_opts: {},
                                drag_opts: {
                                    revert: "invalid",
                                    helper: "clone",
                                    cursor: "move",
                                    appendTo: "#jqgrid_dnd",
                                    zIndex: 5e3
                                },
                                dragcopy: !1,
                                dropbyname: !1,
                                droppos: "first",
                                autoid: !0,
                                autoidprefix: "dnd_"
                            }, i || {})).connectWith)
                            for (i.connectWith = i.connectWith.split(","), i.connectWith = $.map(i.connectWith, function(e) {
                                    return $.trim(e)
                                }), $.data(g, "dnd", i), 0 === g.p.reccount || g.p.jqgdnd || r(), g.p.jqgdnd = !0, e = 0; e < i.connectWith.length; e++) t = i.connectWith[e], $(t).droppable($.isFunction(i.drop) ? i.drop.call($(g), i) : i.drop)
                    } else r()
                }

                function r() {
                    var e = $.data(g, "dnd");
                    $("tr.jqgrow:not(.ui-draggable)", g).draggable($.isFunction(e.drag) ? e.drag.call($(g), e) : e.drag)
                }
            })
        },
        gridResize: function(d) {
            return this.each(function() {
                var r, i = this,
                    a = i.grid,
                    o = i.p,
                    l = o.gView + ">.ui-grid-bdiv",
                    n = !1,
                    s = o.height;
                if (a && $.fn.resizable) {
                    if ((d = $.extend({}, d || {})).alsoResize ? (d._alsoResize_ = d.alsoResize, delete d.alsoResize) : d._alsoResize_ = !1, d.stop && $.isFunction(d.stop) ? (d._stop_ = d.stop, delete d.stop) : d._stop_ = !1, d.stop = function(e, t) {
                            $(i).jqGrid("setGridWidth", t.size.width, d.shrinkToFit), $(o.gView + ">.ui-grid-titlebar").css("width", ""), n ? ($(r).each(function() {
                                $(this).css("height", "")
                            }), "auto" !== s && "100%" !== s || $(a.bDiv).css("height", s)) : $(i).jqGrid("setGridParam", {
                                height: $(l).height()
                            }), i.fixScrollOffsetAndhBoxPadding && i.fixScrollOffsetAndhBoxPadding(), d._stop_ && d._stop_.call(i, e, t)
                        }, r = l, "auto" !== s && "100%" !== s || void 0 !== d.handles || (d.handles = "e,w"), d.handles) {
                        var e = $.map(String(d.handles).split(","), function(e) {
                            return $.trim(e)
                        });
                        2 === e.length && ("e" === e[0] && "w" === e[1] || "e" === e[1] && "w" === e[1]) && (r = o.gView + ">div:not(.frozen-div)", n = !0, o.pager && (r += "," + o.pager))
                    }
                    d._alsoResize_ ? d.alsoResize = r + "," + d._alsoResize_ : d.alsoResize = r, delete d._alsoResize_, $(o.gBox).resizable(d)
                }
            })
        }
    }), Aggregation.prototype.calc = function(e, t, r, i, a) {
        var o = this;
        if (void 0 !== e) switch (o.result = o.result || 0, e = parseFloat(e), o.aggregator) {
            case "sum":
                o.result += e;
                break;
            case "count":
                o.result++;
                break;
            case "avg":
                o.finilized ? (o.count = o.count || 0, o.result = (o.result * o.count + e) / (o.count + 1)) : (o.result += e, o.count = o.count || 0), o.count++;
                break;
            case "min":
                o.result = Math.min(o.result, e);
                break;
            case "max":
                o.result = Math.max(o.result, e);
                break;
            default:
                $.isFunction(o.aggregator) && (o.result = o.aggregator.call(o.context, {
                    previousResult: o.result,
                    value: e,
                    fieldName: t,
                    item: r,
                    iItem: i,
                    items: a
                }))
        }
    }, Aggregation.prototype.getResult = function(e, t, r) {
        var i = this;
        (void 0 !== i.result || r) && (r && void 0 !== i.result && (i.result = 0, i.count = 0), void 0 === i.result || i.finilized || "avg" !== i.aggregator || (i.result = i.result / i.count, i.finilized = !0), e[t] = i.result)
    }, ArrayOfFieldsets.prototype.compareVectorsEx = function(e, t) {
        var r, i, a = this.fieldLength;
        for (r = 0; r < a; r++)
            if (0 !== (i = this.fieldCompare[r](e[r], t[r]))) return {
                index: r,
                result: i
            };
        return {
            index: -1,
            result: 0
        }
    }, ArrayOfFieldsets.prototype.getIndexOfDifferences = function(e, t) {
        return null === t || null === e ? 0 : this.compareVectorsEx(e, t).index
    }, ArrayOfFieldsets.prototype.compareVectors = function(e, t) {
        var r = this.compareVectorsEx(e, t);
        return 0 < (0 <= r.index ? this.fieldSortDirection[r.index] : 1) ? r.result : -r.result
    }, ArrayOfFieldsets.prototype.getItem = function(e) {
        return this.items[e]
    }, ArrayOfFieldsets.prototype.getIndexLength = function() {
        return this.items.length
    }, ArrayOfFieldsets.prototype.getIndexesOfSourceData = function(e) {
        return this.indexesOfSourceData[e]
    }, ArrayOfFieldsets.prototype.createDataIndex = function(e) {
        var t, r, i, a, o, l, n, s, d, c = e.length,
            u = this.fieldLength,
            p = this.fieldNames,
            f = this.indexesOfSourceData,
            h = this.items;
        for (t = 0; t < c; t++) {
            for (n = e[t], r = new Array(u), a = 0; a < u; a++) void 0 !== (i = n[p[a]]) && ("string" == typeof i && this.trimByCollect && (i = $.trim(i)), r[a] = i);
            if (s = 0, (d = h.length - 1) < 0) h.push(r), f.push([t]);
            else if (0 !== (o = this.compareVectors(r, h[d])))
                if (1 === o || this.skipSort) h.push(r), f.push([t]);
                else if (1 !== (o = this.compareVectors(h[0], r)))
                if (0 !== o)
                    for (;;) {
                        if (d - s < 2) {
                            h.splice(d, 0, r), f.splice(d, 0, [t]);
                            break
                        }
                        if (l = Math.floor((s + d) / 2), 0 === (o = this.compareVectors(h[l], r))) {
                            f[l].push(t);
                            break
                        }
                        1 === o ? d = l : s = l
                    } else f[0].push(t);
                else h.unshift(r), f.unshift([t]);
            else f[d].push(t)
        }
    }, jgrid.extend({
        pivotSetup: function(c, r) {
            var e, t, i, a, n, o, l, s, d, u, p, f, h, g, m, v, b, w, y, x, j, C, D, S, q, F, R, _, I, G = this[0],
                O = $.isArray,
                k = {},
                N = {
                    groupField: [],
                    groupSummary: [],
                    groupSummaryPos: []
                },
                E = {
                    grouping: !0,
                    groupingView: N
                },
                A = $.extend({
                    totals: !1,
                    useColSpanStyle: !1,
                    trimByCollect: !0,
                    skipSortByX: !1,
                    skipSortByY: !1,
                    caseSensitive: !1,
                    footerTotals: !1,
                    groupSummary: !0,
                    groupSummaryPos: "header",
                    frozenStaticCols: !1,
                    defaultFormatting: !0,
                    data: c
                }, r || {}),
                T = c.length,
                M = A.xDimension,
                B = A.yDimension,
                P = A.aggregates,
                z = A.totalText || A.totals || A.rowTotals || A.totalHeader,
                L = O(M) ? M.length : 0,
                V = O(B) ? B.length : 0,
                H = O(P) ? P.length : 0,
                W = V - (1 === H ? 1 : 0),
                U = [],
                Y = [],
                X = [],
                Q = [],
                J = ["pivotInfos"],
                Z = new Array(H),
                K = new Array(V),
                ee = function(e, t, r) {
                    var i = new ArrayOfFieldsets(A.trimByCollect, A.caseSensitive, t, e);
                    return $.isFunction(r) && (i.compareVectorsEx = r), i.createDataIndex(c), i
                },
                te = function(e, t, r, i, a) {
                    var o, l, n;
                    switch (e) {
                        case 1:
                            o = B[i].totalText || "{0} {1} {2}", l = "y" + a + "t" + i;
                            break;
                        case 2:
                            o = A.totalText || "{0}", l = "t";
                            break;
                        default:
                            o = 1 < H ? t.label || "{0}" : $.isFunction(B[i].label) ? B[i].label : _.getItem(a)[i], l = "y" + a
                    }
                    return delete(n = $.extend({}, t, {
                        name: l + (1 < H ? "a" + r : ""),
                        label: $.isFunction(o) ? o.call(G, 2 === e ? {
                            aggregate: t,
                            iAggregate: r,
                            pivotOptions: A
                        } : 1 === e ? {
                            yIndex: _.getItem(a),
                            aggregate: t,
                            iAggregate: r,
                            yLevel: i,
                            pivotOptions: A
                        } : {
                            yData: _.getItem(a)[i],
                            yIndex: _.getItem(a),
                            yLevel: i,
                            pivotOptions: A
                        }) : jgrid.template.apply(G, 2 === e ? [String(o), t.aggregator, t.member, r] : [String(o), t.aggregator, t.member, _.getItem(a)[i], i])
                    })).member, delete n.aggregator, n
                },
                re = function(e, t, r) {
                    var i, a;
                    for (i = 0; i < H; i++) void 0 === (a = P[i]).template && void 0 === a.formatter && A.defaultFormatting && (a.template = "count" === a.aggregator ? "integer" : "number"), X.push(te(e, a, i, t, r))
                },
                ie = function(e, t, r) {
                    var i, a, o, l;
                    for (i = W - 1; t <= i; i--)
                        if (Y[i]) {
                            for (a = 0; a <= i; a++)(q = U[a].groupHeaders)[q.length - 1].numberOfColumns += H;
                            for (o = (n = B[i]).totalHeader, l = n.headerOnTop, a = i + 1; a <= W - 1; a++) U[a].groupHeaders.push({
                                titleText: l && a === i + 1 || !l && a === W - 1 ? $.isFunction(o) ? o.call(G, r, i) : jgrid.template.call(G, String(o || ""), r[i], i) : "",
                                startColumnName: "y" + (e - 1) + "t" + i + (1 === H ? "" : "a0"),
                                numberOfColumns: H
                            })
                        }
                },
                ae = function(e) {
                    var t = new Aggregation("count" === P[e].aggregator ? "sum" : P[e].aggregator, G, r);
                    return t.groupInfo = {
                        iRows: [],
                        rows: [],
                        ys: [],
                        iYs: []
                    }, t
                },
                oe = function() {
                    var e, t;
                    for (e = W - 1; 0 <= e; e--)
                        if (Y[e])
                            for (null == K[e] && (K[e] = new Array(H)), t = 0; t < H; t++) K[e][t] = ae(t)
                },
                le = function(e, t, r, i) {
                    var a, o, l, n = _.getIndexOfDifferences(t, r);
                    if (null !== r)
                        for (n = Math.max(n, 0), a = W - 1; n <= a; a--) o = "y" + e + "t" + a + (1 < H ? "a" + i : ""), Y[a] && void 0 === D[o] && ((l = K[a][i]).getResult(D, o), D.pivotInfos[o] = {
                            colType: 1,
                            iA: i,
                            a: P[i],
                            level: a,
                            iRows: l.groupInfo.iRows,
                            rows: l.groupInfo.rows,
                            ys: l.groupInfo.ys,
                            iYs: l.groupInfo.iYs
                        }, t !== r && (K[a][i] = ae(i)))
                },
                ne = function(e, t, r, i, a, o, l) {
                    var n, s, d;
                    if (e !== t)
                        for (n = W - 1; 0 <= n; n--) Y[n] && ((s = K[n][i]).calc(a[r.member], r.member, a, o, c), d = s.groupInfo, $.inArray(l, d.iYs) < 0 && (d.iYs.push(l), d.ys.push(e)), $.inArray(o, d.iRows) < 0 && (d.iRows.push(o), d.rows.push(a)))
                };
            if (0 === L || 0 === H) throw "xDimension or aggregates options are not set!";
            for (R = ee(M, A.skipSortByX, A.compareVectorsByX), _ = ee(B, A.skipSortByY, A.compareVectorsByY), r.xIndex = R, r.yIndex = _, t = 0; t < L; t++) o = {
                name: "x" + t,
                label: null != (a = M[t]).label ? $.isFunction(a.label) ? a.label.call(G, a, t, A) : a.label : a.dataName,
                frozen: A.frozenStaticCols
            }, t < L - 1 && !a.skipGrouping && !a.additionalProperty && (N.groupField.push(o.name), N.groupSummary.push(A.groupSummary), N.groupSummaryPos.push(A.groupSummaryPos)), delete(o = $.extend(o, a)).dataName, delete o.footerText, a.additionalProperty ? J.push(o.name) : (X.push(o), E.sortname = o.name);
            for (L < 2 && (E.grouping = !1), N.hideFirstGroupCol = !0, t = 0; t < V; t++) n = B[t], Y.push(!!(n.totals || n.rowTotals || n.totalText || n.totalHeader));
            for (S = _.getItem(0), re(0, V - 1, 0), I = _.getIndexLength(), w = 1; w < I; w++) {
                for (y = _.getItem(w), t = _.getIndexOfDifferences(y, S), i = W - 1; t <= i; i--) Y[i] && re(1, i, w - 1);
                S = y, re(0, V - 1, w)
            }
            for (t = W - 1; 0 <= t; t--) Y[t] && re(1, t, I - 1);
            for (z && re(2), S = _.getItem(0), i = 0; i < W; i++) U.push({
                useColSpanStyle: A.useColSpanStyle,
                groupHeaders: [{
                    titleText: $.isFunction(B[i].label) ? B[i].label.call(G, {
                        yData: S[i],
                        yIndex: S,
                        yLevel: i,
                        pivotOptions: A
                    }) : S[i],
                    startColumnName: 1 === H ? "y0" : "y0a0",
                    numberOfColumns: H
                }]
            });
            for (w = 1; w < I; w++) {
                for (y = _.getItem(w), ie(w, t = _.getIndexOfDifferences(y, S), S), i = W - 1; t <= i; i--) U[i].groupHeaders.push({
                    titleText: $.isFunction(B[i].label) ? B[i].label.call(G, {
                        yData: y[i],
                        yIndex: y,
                        yLevel: i,
                        pivotOptions: A
                    }) : y[i],
                    startColumnName: "y" + w + (1 === H ? "" : "a0"),
                    numberOfColumns: H
                });
                for (i = 0; i < t; i++)(q = U[i].groupHeaders)[q.length - 1].numberOfColumns += H;
                S = y
            }
            if (ie(I, 0, S), z)
                for (t = 0; t < W; t++) U[t].groupHeaders.push({
                    titleText: t < W - 1 ? "" : A.totalHeader || "",
                    startColumnName: "t" + (1 === H ? "" : "a0"),
                    numberOfColumns: H
                });
            for (v = R.getIndexLength(), d = 0; d < v; d++) {
                for (u = R.getItem(d), D = {
                        pivotInfos: p = {
                            iX: d,
                            x: u
                        }
                    }, t = 0; t < L; t++) D["x" + t] = u[t];
                if (b = R.getIndexesOfSourceData(d), z)
                    for (i = 0; i < H; i++) Z[i] = ae(i);
                for (S = null, oe(), w = 0; w < I; w++) {
                    for (y = _.getItem(w), x = _.getIndexesOfSourceData(w), i = 0; i < H; i++) {
                        for (null !== S && le(w - 1, y, S, i), j = [], t = 0; t < x.length; t++) F = x[t], 0 <= $.inArray(F, b) && j.push(F);
                        if (0 < j.length) {
                            for (f = new Array(j.length), h = new Aggregation((C = P[i]).aggregator, G, r), l = 0; l < j.length; l++) t = j[l], e = c[t], f[l] = e, h.calc(e[C.member], C.member, e, t, c), z && ((g = Z[i]).calc(e[C.member], C.member, e, t, c), m = g.groupInfo, $.inArray(t, m.iYs) < 0 && (m.iYs.push(w), m.ys.push(y)), $.inArray(t, m.iRows) < 0 && (m.iRows.push(t), m.rows.push(e))), ne(y, S, C, i, e, t, w);
                            s = "y" + w + (1 === H ? "" : "a" + i), h.getResult(D, s), p[s] = {
                                colType: 0,
                                iY: w,
                                y: y,
                                iA: i,
                                a: C,
                                iRows: j,
                                rows: f
                            }
                        }
                    }
                    S = y
                }
                if (null !== S)
                    for (i = 0; i < H; i++) le(I - 1, S, S, i);
                if (z)
                    for (i = 0; i < H; i++) s = "t" + (1 === H ? "" : "a" + i), (g = Z[i]).getResult(D, s), m = g.groupInfo, p[s] = {
                        colType: 2,
                        iA: i,
                        a: P[i],
                        iRows: m.iRows,
                        rows: m.rows,
                        iYs: m.iYs,
                        ys: m.ys
                    };
                Q.push(D)
            }
            if (A.footerTotals || A.colTotals) {
                for (T = Q.length, t = 0; t < L; t++) k["x" + t] = M[t].footerText || "";
                for (t = L; t < X.length; t++) {
                    for (s = X[t].name, h = new Aggregation(A.footerAggregator || "sum", G, r), l = 0; l < T; l++) D = Q[l], h.calc(D[s], s, D, l, Q);
                    h.getResult(k, s)
                }
            }
            return r.colHeaders = U, {
                colModel: X,
                additionalProperties: J,
                options: r,
                rows: Q,
                groupOptions: E,
                groupHeaders: U,
                summary: k
            }
        },
        jqPivot: function(d, c, u, r) {
            return this.each(function() {
                var l = this,
                    n = $(l),
                    s = $.fn.jqGrid;

                function t() {
                    var e, t = s.pivotSetup.call(n, d, c),
                        r = t.groupHeaders,
                        i = 0 < function(e) {
                            var t, r = 0;
                            for (t in e) e.hasOwnProperty(t) && r++;
                            return r
                        }(t.summary),
                        a = t.groupOptions.groupingView,
                        o = jgrid.from.call(l, t.rows);
                    if (!c.skipSortByX)
                        for (e = 0; e < a.groupField.length; e++) o.orderBy(a.groupField[e], null != u && u.groupingView && null != u.groupingView.groupOrder && "desc" === u.groupingView.groupOrder[e] ? "d" : "a", "text", "");
                    if (c.data = d, s.call(n, $.extend(!0, {
                            datastr: $.extend(o.select(), i ? {
                                userdata: t.summary
                            } : {}),
                            datatype: "jsonstring",
                            footerrow: i,
                            userDataOnFooter: i,
                            colModel: t.colModel,
                            additionalProperties: t.additionalProperties,
                            pivotOptions: t.options,
                            viewrecords: !0,
                            sortname: c.xDimension[0].dataName
                        }, t.groupOptions, u || {})), r.length)
                        for (e = 0; e < r.length; e++) r[e] && r[e].groupHeaders.length && s.setGroupHeaders.call(n, r[e]);
                    c.frozenStaticCols && s.setFrozenColumns.call(n)
                }
                "string" == typeof d ? $.ajax($.extend({
                    url: d,
                    dataType: "json",
                    success: function(e) {
                        d = jgrid.getAccessor(e, r && r.reader ? r.reader : "rows"), t()
                    }
                }, r || {})) : t()
            })
        }
    });
    var subGridFeedback = function() {
            var e = $.makeArray(arguments);
            return e[0] = "subGrid" + e[0].charAt(0).toUpperCase() + e[0].substring(1), e.unshift(""), e.unshift(""), e.unshift(this.p), jgrid.feedback.apply(this, e)
        },
        collapseOrExpand = function(t, r) {
            return this.each(function() {
                if (this.grid && null != t && !0 === this.p.subGrid) {
                    var e = $(this).jqGrid("getInd", t, !0);
                    $(e).find(">td." + r).trigger("click")
                }
            })
        };
    jgrid.extend({
        setSubGrid: function() {
            return this.each(function() {
                var e, t = this.p,
                    r = $(this),
                    i = t.subGridModel[0],
                    a = function(e) {
                        return r.jqGrid("getIconRes", e)
                    };
                if (t.subGridOptions = $.extend({
                        commonIconClass: a("subgrid.common"),
                        plusicon: a("subgrid.plus"),
                        minusicon: a("subgrid.minus"),
                        openicon: "rtl" === t.direction ? a("subgrid.openRtl") : a("subgrid.openLtr"),
                        expandOnLoad: !1,
                        delayOnLoad: 50,
                        selectOnExpand: !1,
                        selectOnCollapse: !1,
                        reloadOnExpand: !0
                    }, t.subGridOptions || {}), t.colNames.unshift(""), t.colModel.unshift({
                        name: "subgrid",
                        width: jgrid.cell_width ? t.subGridWidth + t.cellLayout : t.subGridWidth,
                        labelClasses: "jqgh_subgrid",
                        sortable: !1,
                        resizable: !1,
                        hidedlg: !0,
                        search: !1,
                        fixed: !0,
                        frozen: !0
                    }), i)
                    for (i.align = $.extend([], i.align || []), e = 0; e < i.name.length; e++) i.align[e] = i.align[e] || "left"
            })
        },
        addSubGridCell: function(e, t, r, i) {
            var a = this[0],
                o = a.p.subGridOptions,
                l = !$.isFunction(o.hasSubgrid) || o.hasSubgrid.call(a, {
                    rowid: r,
                    iRow: t,
                    iCol: e,
                    data: i
                });
            return null == a.p ? "" : "" + (l ? "
" : " ") + ""
        },
        addSubGrid: function(y, l) {
            return this.each(function() {
                var e, t, r, s = this,
                    d = s.p,
                    c = d.subGridModel[0],
                    u = function(e, t) {
                        return base.getGuiStyles.call(s, "subgrid." + e, t || "")
                    },
                    p = u("thSubgrid", "ui-th-subgrid ui-th-column ui-th-" + d.direction),
                    f = u("rowSubTable", "ui-subtblcell"),
                    n = u("row", "ui-subgrid ui-row-" + d.direction),
                    h = u("tdWithIcon", "subgrid-cell"),
                    g = u("tdData", "subgrid-data"),
                    m = function(e, t, r) {
                        var i = c.align[r],
                            a = $("").html(t);
                        e.append(a)
                    },
                    v = function(e, i) {
                        var a = d.xmlReader.subgrid;
                        $(a.root + " " + a.row, e).each(function() {
                            var e, t, r = $("");
                            if (!0 === a.repeatitems) $(a.cell, this).each(function(e) {
                                m(r, $(this).text() || " ", e)
                            });
                            else if (e = c.mapping || c.name)
                                for (t = 0; t < e.length; t++) m(r, jgrid.getXmlData(this, e[t]) || " ", t);
                            i.append(r)
                        })
                    },
                    b = function(e, t) {
                        var r, i, a, o, l, n = d.jsonReader.subgrid,
                            s = jgrid.getAccessor(e, n.root);
                        if (null != s)
                            for (i = 0; i < s.length; i++) {
                                if (l = s[i], r = $(""), !0 === n.repeatitems)
                                    for (n.cell && (l = l[n.cell]), a = 0; a < l.length; a++) m(r, l[a] || " ", a);
                                else if ((o = c.mapping || c.name).length)
                                    for (a = 0; a < o.length; a++) m(r, jgrid.getAccessor(l, o[a]) || " ", a);
                                t.append(r)
                            }
                    },
                    w = function(e, t, r) {
                        var i, a, o = u("legacyTable", "ui-grid-legacy-subgrid" + (!0 === d.altRows && $(s).jqGrid("isBootstrapGuiStyle") ? " table-striped" : "")),
                            l = $(""),
                            n = $("");
                        for (s.grid.endReq.call(s), a = 0; a < c.name.length; a++) i = $("").html(c.name[a]).width(c.width[a]), n.append(i);
                        return n.appendTo(l[0].tHead), r(e, $(l[0].tBodies[0])), $("#" + jqID(d.id + "_" + t)).append(l), !1
                    },
                    i = function() {
                        var e, t = $(this).parent("tr")[0],
                            r = t.nextSibling,
                            i = t.id,
                            a = d.id + "_" + i,
                            o = function(e) {
                                return jgrid.mergeCssClasses(d.subGridOptions.commonIconClass, d.subGridOptions[e])
                            },
                            l = 1;
                        if ($.each(d.colModel, function() {
                                !0 !== this.hidden && "rn" !== this.name && "cb" !== this.name || l++
                            }), $(this).hasClass("sgcollapsed")) {
                            if (!0 === d.subGridOptions.reloadOnExpand || !1 === d.subGridOptions.reloadOnExpand && !$(r).hasClass("ui-subgrid")) {
                                if (e = 1 <= y ? " " : "", !subGridFeedback.call(s, "beforeExpand", a, i)) return;
                                $(t).after("" + e + "
"), $(s).triggerHandler("jqGridSubGridRowExpanded", [a, i]), $.isFunction(d.subGridRowExpanded) ? d.subGridRowExpanded.call(s, a, i) : function(e) {
                                    var t, r, i = $(e).attr("id"),
                                        a = {
                                            nd_: (new Date).getTime()
                                        };
                                    if (a[d.prmNames.subgridid] = i, !c) return;
                                    if (c.params)
                                        for (r = 0; r < c.params.length; r++) void 0 !== (t = d.iColByName[c.params[r]]) && (a[d.colModel[t].name] = $(e.cells[t]).text().replace(/\ \;/gi, ""));
                                    if (!s.grid.hDiv.loading) switch (s.grid.beginReq.call(s), d.subgridtype || (d.subgridtype = d.datatype), $.isFunction(d.subgridtype) ? d.subgridtype.call(s, a) : d.subgridtype = d.subgridtype.toLowerCase(), d.subgridtype) {
                                        case "xml":
                                        case "json":
                                            $.ajax($.extend({
                                                type: d.mtype,
                                                url: $.isFunction(d.subGridUrl) ? d.subGridUrl.call(s, a) : d.subGridUrl,
                                                dataType: d.subgridtype,
                                                context: i,
                                                data: jgrid.serializeFeedback.call(s, d.serializeSubGridData, "jqGridSerializeSubGridData", a),
                                                success: function(e) {
                                                    w(e, this, "xml" === d.subgridtype ? v : b)
                                                },
                                                error: function(e, t, r) {
                                                    var i = void 0 === d.loadSubgridError ? d.loadError : d.loadSubgridError;
                                                    s.grid.endReq.call(s), $.isFunction(i) && i.call(s, e, t, r), d.subGridOptions.noEmptySubgridOnError || w(null, this, "xml" === d.subgridtype ? v : b)
                                                }
                                            }, jgrid.ajaxOptions, d.ajaxSubgridOptions || {}))
                                    }
                                }(t)
                            } else $(r).show();
                            $(this).html("
").removeClass("sgcollapsed").addClass("sgexpanded"), d.subGridOptions.selectOnExpand && $(s).jqGrid("setSelection", i)
                        } else if ($(this).hasClass("sgexpanded")) {
                            if (!subGridFeedback.call(s, "beforeCollapse", a, i)) return;
                            !0 === d.subGridOptions.reloadOnExpand ? $(r).remove(".ui-subgrid") : $(r).hasClass("ui-subgrid") && $(r).hide(), $(this).html("
").removeClass("sgexpanded").addClass("sgcollapsed"), d.subGridOptions.selectOnCollapse && $(s).jqGrid("setSelection", i)
                        }
                        return !1
                    },
                    a = 1;
                if (s.grid) {
                    for (e = s.rows.length, void 0 !== l && 0 < l && (e = (a = l) + 1); a < e;) t = s.rows[a], $(t).hasClass("jqgrow") && (r = $(t.cells[y])).hasClass("ui-sgcollapsed") && (d.scroll && r.off("click"), r.on("click", i)), a++;
                    if (!0 === d.subGridOptions.expandOnLoad) {
                        var o = d.iColByName.subgrid;
                        $(s.rows).filter(".jqgrow").each(function(e, t) {
                            $(t.cells[o]).filter(".sgcollapsed").children(".sgbutton-div").children(".sgbutton").click()
                        })
                    }
                    s.subGridXml = function(e, t) {
                        return w(e, t, v)
                    }, s.subGridJson = function(e, t) {
                        return w(e, t, b)
                    }
                }
            })
        },
        expandSubGridRow: function(e) {
            return collapseOrExpand.call(this, e, "sgcollapsed")
        },
        collapseSubGridRow: function(e) {
            return collapseOrExpand.call(this, e, "sgexpanded")
        },
        toggleSubGridRow: function(e) {
            return collapseOrExpand.call(this, e, "ui-sgcollapsed")
        }
    }), window.tableToGrid = function(e, h) {
        $(e).each(function() {
            var e, t, r, i, a, o, l, n, s = $(this),
                d = [],
                c = [],
                u = [],
                p = [],
                f = [];
            if (!this.grid) {
                for (s.width("99%"), e = s.width(), t = $("tr td:first-child input[type=checkbox]:first", s), r = $("tr td:first-child input[type=radio]:first", s), a = !(i = 0 < t.length) && 0 < r.length, o = i || a, $("th", s).each(function() {
                        0 === d.length && o ? (d.push({
                            name: "__selection__",
                            index: "__selection__",
                            width: 0,
                            hidden: !0
                        }), c.push("__selection__")) : (d.push({
                            name: $(this).attr("id") || $.trim($.jgrid.stripHtml($(this).html())).split(" ").join("_"),
                            index: $(this).attr("id") || $.trim($.jgrid.stripHtml($(this).html())).split(" ").join("_"),
                            width: $(this).width() || 150
                        }), c.push($(this).html()))
                    }), $("tbody > tr", s).each(function() {
                        var r = {},
                            i = 0;
                        $("td", $(this)).each(function() {
                            if (0 === i && o) {
                                var e = $("input", $(this)),
                                    t = e.attr("value");
                                p.push(t || u.length), e.is(":checked") && f.push(t), r[d[i].name] = e.attr("value")
                            } else r[d[i].name] = $(this).html();
                            i++
                        }), 0 < i && u.push(r)
                    }), s.empty(), s.jqGrid($.extend({
                        datatype: "local",
                        width: e,
                        colNames: c,
                        colModel: d,
                        multiselect: i
                    }, h || {})), l = 0; l < u.length; l++) n = null, 0 < p.length && (n = p[l]) && n.replace && (n = encodeURIComponent(n).replace(/[.\-%]/g, "_")), null === n && (n = $.jgrid.randId()), s.jqGrid("addRowData", n, u[l]);
                for (l = 0; l < f.length; l++) s.jqGrid("setSelection", f[l])
            }
        })
    };
    var treeGridFeedback = function() {
            var e = $.makeArray(arguments);
            return e[0] = "treeGrid" + e[0].charAt(0).toUpperCase() + e[0].substring(1), e.unshift(""), e.unshift(""), e.unshift(this.p), jgrid.feedback.apply(this, e)
        },
        getNodeIcons = function(e, t) {
            var r = t[e.treeReader.icon_field],
                i = e.treeIcons,
                a = i.plus + " tree-plus",
                o = i.minus + " tree-minus";
            return r && "string" == typeof r && 2 === (r = r.split(",")).length && (o = r[0], a = r[1]), {
                expanded: o,
                collapsed: a,
                common: i.commonIconClass
            }
        };
    jgrid.extend({
        setTreeNode: function() {
            return this.each(function() {
                var n = $(this),
                    s = this.p;
                if (this.grid && s.treeGrid) {
                    var d = s.treeReader.expanded_field,
                        c = s.treeReader.leaf_field;
                    n.off("jqGridBeforeSelectRow.setTreeNode"), n.on("jqGridBeforeSelectRow.setTreeNode", function(e, r, t) {
                        if (null != t) {
                            var i = $(t.target),
                                a = i.closest("tr.jqgrow>td"),
                                o = a.parent(),
                                l = function() {
                                    var e = s.data[s._index[stripPref(s.idPrefix, r)]],
                                        t = e[d] ? "collapse" : "expand";
                                    e[c] || (base[t + "Row"].call(n, e, o), base[t + "Node"].call(n, e, o))
                                };
                            return i.is("div.treeclick") ? l() : s.ExpandColClick && 0 < a.length && 0 < i.closest("span.cell-wrapper", a).length && l(), !0
                        }
                    })
                }
            })
        },
        setTreeGrid: function() {
            return this.each(function() {
                var e, t, r, i = this.p,
                    a = [],
                    o = ["leaf_field", "expanded_field", "loaded"];
                if (i.treeGrid) {
                    for (t in i.treedatatype || $.extend(this.p, {
                            treedatatype: i.datatype
                        }), i.subGrid = !1, i.altRows = !1, i.pgbuttons = !1, i.pginput = !1, i.gridview = !0, null === i.rowTotal && (i.rowNum = i.maxRowNum), i.rowList = [], i.treeIcons.plus = "rtl" === i.direction ? i.treeIcons.plusRtl : i.treeIcons.plusLtr, "nested" === i.treeGridModel ? i.treeReader = $.extend({
                            level_field: "level",
                            left_field: "lft",
                            right_field: "rgt",
                            leaf_field: "isLeaf",
                            expanded_field: "expanded",
                            loaded: "loaded",
                            icon_field: "icon"
                        }, i.treeReader) : "adjacency" === i.treeGridModel && (i.treeReader = $.extend({
                            level_field: "level",
                            parent_id_field: "parent",
                            leaf_field: "isLeaf",
                            expanded_field: "expanded",
                            loaded: "loaded",
                            icon_field: "icon"
                        }, i.treeReader)), i.colModel)
                        if (i.colModel.hasOwnProperty(t))
                            for (r in e = i.colModel[t].name, i.treeReader) i.treeReader.hasOwnProperty(r) && i.treeReader[r] === e && a.push(e);
                    $.each(i.treeReader, function(e) {
                        var t = String(this);
                        t && -1 === $.inArray(t, a) && (0 <= $.inArray(e, o) ? i.additionalProperties.push({
                            name: t,
                            search: !1,
                            convert: function(e) {
                                return !0 === e || "true" === String(e).toLowerCase() || "1" === String(e) || e
                            }
                        }) : i.additionalProperties.push(t))
                    })
                }
            })
        },
        expandRow: function(o) {
            this.each(function() {
                var t = $(this),
                    r = this.p;
                if (this.grid && r.treeGrid) {
                    var i = r.treeReader.expanded_field,
                        e = o[r.localReader.id];
                    if (treeGridFeedback.call(this, "beforeExpandRow", {
                            rowid: e,
                            item: o
                        })) {
                        var a = base.getNodeChildren.call(t, o);
                        $(a).each(function() {
                            var e = r.idPrefix + getAccessor(this, r.localReader.id);
                            $(base.getGridRowById.call(t, e)).css("display", ""), this[i] && base.expandRow.call(t, this)
                        }), treeGridFeedback.call(this, "afterExpandRow", {
                            rowid: e,
                            item: o
                        })
                    }
                }
            })
        },
        collapseRow: function(o) {
            this.each(function() {
                var t = $(this),
                    r = this.p;
                if (this.grid && r.treeGrid) {
                    var i = r.treeReader.expanded_field,
                        e = o[r.localReader.id];
                    if (treeGridFeedback.call(this, "beforeCollapseRow", {
                            rowid: e,
                            item: o
                        })) {
                        var a = base.getNodeChildren.call(t, o);
                        $(a).each(function() {
                            var e = r.idPrefix + getAccessor(this, r.localReader.id);
                            $(base.getGridRowById.call(t, e)).css("display", "none"), this[i] && base.collapseRow.call(t, this)
                        }), treeGridFeedback.call(this, "afterCollapseRow", {
                            rowid: e,
                            item: o
                        })
                    }
                }
            })
        },
        getRootNodes: function() {
            var i = [];
            return this.each(function() {
                var e = this.p;
                if (this.grid && e.treeGrid) switch (e.treeGridModel) {
                    case "nested":
                        var t = e.treeReader.level_field;
                        $(e.data).each(function() {
                            parseInt(this[t], 10) === parseInt(e.tree_root_level, 10) && i.push(this)
                        });
                        break;
                    case "adjacency":
                        var r = e.treeReader.parent_id_field;
                        $(e.data).each(function() {
                            null !== this[r] && "null" !== String(this[r]).toLowerCase() || i.push(this)
                        })
                }
            }), i
        },
        getNodeDepth: function(r) {
            var i = null;
            return this.each(function() {
                var e = this.p;
                if (this.grid && e.treeGrid) switch (e.treeGridModel) {
                    case "nested":
                        var t = e.treeReader.level_field;
                        i = parseInt(r[t], 10) - parseInt(e.tree_root_level, 10);
                        break;
                    case "adjacency":
                        i = base.getNodeAncestors.call($(this), r).length
                }
            }), i
        },
        getNodeParent: function(e) {
            var t = this[0];
            if (!t || !t.grid || null == t.p || !t.p.treeGrid || null == e) return null;
            var r = t.p,
                i = r.treeReader,
                a = e[i.parent_id_field];
            if ("nested" === r.treeGridModel) {
                var o = null,
                    l = i.left_field,
                    n = i.right_field,
                    s = i.level_field,
                    d = parseInt(e[l], 10),
                    c = parseInt(e[n], 10),
                    u = parseInt(e[s], 10);
                return $(r.data).each(function() {
                    if (parseInt(this[s], 10) === u - 1 && parseInt(this[l], 10) < d && parseInt(this[n], 10) > c) return o = this, !1
                }), o
            }
            if (null === a || "null" === a) return null;
            var p = r._index[a];
            return void 0 !== p ? r.data[p] : null
        },
        getNodeChildren: function(d) {
            var c = [];
            return this.each(function() {
                var e = this.p;
                if (this.grid && e.treeGrid) switch (e.treeGridModel) {
                    case "nested":
                        var t = e.treeReader.left_field,
                            r = e.treeReader.right_field,
                            i = e.treeReader.level_field,
                            a = parseInt(d[t], 10),
                            o = parseInt(d[r], 10),
                            l = parseInt(d[i], 10);
                        $(e.data).each(function() {
                            parseInt(this[i], 10) === l + 1 && parseInt(this[t], 10) > a && parseInt(this[r], 10) < o && c.push(this)
                        });
                        break;
                    case "adjacency":
                        var n = e.treeReader.parent_id_field,
                            s = e.localReader.id;
                        $(e.data).each(function() {
                            String(this[n]) === String(d[s]) && c.push(this)
                        })
                }
            }), c
        },
        getFullTreeNode: function(c) {
            var u = [];
            return this.each(function() {
                var t, e = this.p;
                if (this.grid && e.treeGrid) switch (e.treeGridModel) {
                    case "nested":
                        var r = e.treeReader.left_field,
                            i = e.treeReader.right_field,
                            a = e.treeReader.level_field,
                            o = parseInt(c[r], 10),
                            l = parseInt(c[i], 10),
                            n = parseInt(c[a], 10);
                        $(e.data).each(function() {
                            parseInt(this[a], 10) >= n && parseInt(this[r], 10) >= o && parseInt(this[r], 10) <= l && u.push(this)
                        });
                        break;
                    case "adjacency":
                        if (c) {
                            u.push(c);
                            var s = e.treeReader.parent_id_field,
                                d = e.localReader.id;
                            $(e.data).each(function() {
                                var e;
                                for (t = u.length, e = 0; e < t; e++)
                                    if (String(u[e][d]) === String(this[s])) {
                                        u.push(this);
                                        break
                                    }
                            })
                        }
                }
            }), u
        },
        getNodeAncestors: function(i) {
            var a = [];
            return this.each(function() {
                var e = $(this),
                    t = base.getNodeParent;
                if (this.grid && this.p.treeGrid)
                    for (var r = t.call(e, i); r;) a.push(r), r = t.call(e, r)
            }), a
        },
        isVisibleNode: function(i) {
            var a = !0;
            return this.each(function() {
                var e = this.p;
                if (this.grid && e.treeGrid) {
                    var t = base.getNodeAncestors.call($(this), i),
                        r = e.treeReader.expanded_field;
                    $(t).each(function() {
                        if (!(a = a && this[r])) return !1
                    })
                }
            }), a
        },
        isNodeLoaded: function(i) {
            var a;
            return this.each(function() {
                var e = this.p;
                if (this.grid && e.treeGrid) {
                    var t = e.treeReader.leaf_field,
                        r = e.treeReader.loaded;
                    a = void 0 !== i && (void 0 !== i[r] ? i[r] : !!(i[t] || 0 < base.getNodeChildren.call($(this), i).length))
                }
            }), a
        },
        expandNode: function(l) {
            return this.each(function() {
                var e, t, r, i = this,
                    a = i.p;
                if (i.grid && a.treeGrid) {
                    var o = a.treeReader;
                    if (!l[o.expanded_field]) {
                        if (e = getAccessor(l, a.localReader.id), !treeGridFeedback.call(i, "beforeExpandNode", {
                                rowid: e,
                                item: l
                            })) return;
                        t = $("#" + a.idPrefix + jqID(e), i.grid.bDiv)[0], l[o.expanded_field] = !0, r = getNodeIcons(a, l), $("div.treeclick", t).removeClass(r.collapsed).addClass(r.common).addClass(r.expanded), "local" === a.treedatatype || base.isNodeLoaded.call($(i), a.data[a._index[e]]) || i.grid.hDiv.loading || (a.treeANode = t.rowIndex, a.datatype = a.treedatatype, base.setGridParam.call($(i), {
                            postData: "nested" === a.treeGridModel ? {
                                nodeid: e,
                                n_level: l[o.level_field],
                                n_left: l[o.left_field],
                                n_right: l[o.right_field]
                            } : {
                                nodeid: e,
                                n_level: l[o.level_field],
                                parentid: l[o.parent_id_field]
                            }
                        }), $(i).trigger("reloadGrid"), l[o.loaded] = !0, base.setGridParam.call($(i), {
                            postData: "nested" === a.treeGridModel ? {
                                nodeid: "",
                                n_level: "",
                                n_left: "",
                                n_right: ""
                            } : {
                                nodeid: "",
                                n_level: "",
                                parentid: ""
                            }
                        })), treeGridFeedback.call(i, "afterExpandNode", {
                            rowid: e,
                            item: l
                        })
                    }
                }
            })
        },
        collapseNode: function(a) {
            return this.each(function() {
                var e, t = this.p;
                if (this.grid && t.treeGrid) {
                    var r = t.treeReader.expanded_field;
                    if (a[r]) {
                        var i = getAccessor(a, t.localReader.id);
                        if (!treeGridFeedback.call(this, "beforeCollapseNode", {
                                rowid: i,
                                item: a
                            })) return;
                        a[r] = !1, e = getNodeIcons(t, a), $("#" + t.idPrefix + jqID(i), this.grid.bDiv).find("div.treeclick").removeClass(e.expanded).addClass(e.common).addClass(e.collapsed), (!0 === t.unloadNodeOnCollapse || $.isFunction(t.unloadNodeOnCollapse) && t.unloadNodeOnCollapse.call(this, a)) && (a[t.treeReader.loaded] = !1, $(this).jqGrid("delTreeNode", i, !0)), treeGridFeedback.call(this, "afterCollapseNode", {
                            rowid: i,
                            item: a
                        })
                    }
                }
            })
        },
        SortTree: function(c, u, p, f) {
            return this.each(function() {
                var r = this,
                    i = r.p,
                    a = $(r);
                if (r.grid && i.treeGrid) {
                    var e, t, o, l = [],
                        n = base.getRootNodes.call(a),
                        s = jgrid.from.call(r, n);
                    s.orderBy(c, u, p, f);
                    var d = s.select();
                    for (e = 0, t = d.length; e < t; e++) o = d[e], l.push(o), base.collectChildrenSortTree.call(a, l, o, c, u, p, f);
                    $.each(l, function(e) {
                        var t = getAccessor(this, i.localReader.id);
                        $(r.rows[e]).after(a.find(">tbody>tr#" + jqID(t)))
                    })
                }
            })
        },
        collectChildrenSortTree: function(n, s, d, c, u, p) {
            return this.each(function() {
                var e = $(this);
                if (this.grid && this.p.treeGrid) {
                    var t, r, i, a = base.getNodeChildren.call(e, s),
                        o = jgrid.from.call(this, a);
                    o.orderBy(d, c, u, p);
                    var l = o.select();
                    for (t = 0, r = l.length; t < r; t++) i = l[t], n.push(i), base.collectChildrenSortTree.call(e, n, i, d, c, u, p)
                }
            })
        },
        setTreeRow: function(e, t) {
            var r = !1;
            return this.each(function() {
                this.grid && this.p.treeGrid && (r = base.setRowData.call($(this), e, t))
            }), r
        },
        delTreeNode: function(p, f) {
            return this.each(function() {
                var e, t, r, i, a, o = this.p,
                    l = o.localReader.id,
                    n = $(this),
                    s = o.treeReader.left_field,
                    d = o.treeReader.right_field;
                if (this.grid && o.treeGrid) {
                    var c = o._index[p];
                    if (void 0 !== c) {
                        t = (e = parseInt(o.data[c][d], 10)) - parseInt(o.data[c][s], 10) + 1;
                        var u = base.getFullTreeNode.call(n, o.data[c]);
                        if (0 < u.length)
                            for (a = 0; a < u.length; a++) f && p === u[a][l] || base.delRowData.call(n, u[a][l]);
                        if ("nested" === o.treeGridModel) {
                            if ((r = jgrid.from.call(this, o.data).greater(s, e, {
                                    stype: "integer"
                                }).select()).length)
                                for (i in r) r.hasOwnProperty(i) && (r[i][s] = parseInt(r[i][s], 10) - t);
                            if ((r = jgrid.from.call(this, o.data).greater(d, e, {
                                    stype: "integer"
                                }).select()).length)
                                for (i in r) r.hasOwnProperty(i) && (r[i][d] = parseInt(r[i][d], 10) - t)
                        }
                    }
                }
            })
        },
        addChildNode: function(q, F, R, _) {
            return this.each(function() {
                if (R) {
                    var e, t, r, i, a, o, l, n = this.p,
                        s = $(this),
                        d = base.getInd,
                        c = n.treeIcons.minus + " tree-minus",
                        u = F,
                        p = n.treeReader.expanded_field,
                        f = n.treeReader.leaf_field,
                        h = n.treeReader.level_field,
                        g = n.treeReader.parent_id_field,
                        m = n.treeReader.left_field,
                        v = n.treeReader.right_field,
                        b = n.treeReader.loaded;
                    void 0 === _ && (_ = !1), null == q && (q = jgrid.randId());
                    var w, y, x = d.call(s, F);
                    if (o = !1, null == F || "" === F) u = F = null, e = "last", i = n.tree_root_level;
                    else {
                        e = "after", t = n._index[F], r = n.data[t], F = r[n.localReader.id], a = d.call(s, F), i = parseInt(r[h], 10) + 1;
                        var j, C, D, S = base.getFullTreeNode.call(s, r);
                        if (S.length)
                            for (j = 0; j < S.length; j++) D = S[j][n.localReader.id], a < (C = d.call(s, D)) && (a = C, u = D);
                        r[f] && (o = !0, r[p] = !0, $(this.rows[x]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(n.treeIcons.leaf + " tree-leaf").addClass(n.treeIcons.commonIconClass).addClass(c), n.data[t][f] = !1, r[b] = !0)
                    }
                    if (void 0 === R[p] && (R[p] = !1), void 0 === R[b] && (R[b] = !1), R[h] = i, void 0 === R[f] && (R[f] = !0), "adjacency" === n.treeGridModel && (R[g] = F), "nested" === n.treeGridModel)
                        if (null !== F) {
                            if (l = parseInt(r[v], 10), (w = jgrid.from.call(this, n.data).greaterOrEquals(v, l, {
                                    stype: "integer"
                                }).select()).length)
                                for (y in w) w.hasOwnProperty(y) && (w[y][m] = w[y][m] > l ? parseInt(w[y][m], 10) + 2 : w[y][m], w[y][v] = w[y][v] >= l ? parseInt(w[y][v], 10) + 2 : w[y][v]);
                            R[m] = l, R[v] = l + 1
                        } else {
                            if (l = parseInt(base.getCol.call(s, v, !1, "max"), 10), (w = jgrid.from.call(this, n.data).greater(m, l, {
                                    stype: "integer"
                                }).select()).length)
                                for (y in w) w.hasOwnProperty(y) && (w[y][m] = parseInt(w[y][m], 10) + 2);
                            if ((w = jgrid.from.call(this, n.data).greater(v, l, {
                                    stype: "integer"
                                }).select()).length)
                                for (y in w) w.hasOwnProperty(y) && (w[y][v] = parseInt(w[y][v], 10) + 2);
                            R[m] = l + 1, R[v] = l + 2
                        }(null === F || base.isNodeLoaded.call(s, r) || o) && base.addRowData.call(s, q, R, e, u), r && !r[p] && _ && $(this.rows[x]).find("div.treeclick").click()
                }
            })
        }
    });
    var namespace = ".jqGrid",
        mouseDown = "mousedown",
        mouseMove = "mousemove",
        mouseUp = "mouseup",
        getMouseCoordinates = function(e) {
            var t = e.originalEvent.targetTouches;
            return t ? {
                x: (t = t[0]).pageX,
                y: t.pageY
            } : {
                x: e.pageX,
                y: e.pageY
            }
        },
        jqDnR = {
            drag: function(e) {
                var t = e.data,
                    r = t.e,
                    i = t.dnr,
                    a = t.ar,
                    o = t.dnrAr,
                    l = getMouseCoordinates(e);
                return "move" === i.k ? r.css({
                    left: i.X + l.x - i.pX,
                    top: i.Y + l.y - i.pY
                }) : (r.css({
                    width: Math.max(l.x - i.pX + i.W, 0),
                    height: Math.max(l.y - i.pY + i.H, 0)
                }), o && a.css({
                    width: Math.max(l.x - o.pX + o.W, 0),
                    height: Math.max(l.y - o.pY + o.H, 0)
                })), !1
            },
            stop: function() {
                $(document).off(mouseMove, jqDnR.drag).off(mouseUp, jqDnR.stop)
            }
        },
        init = function(e, t, r, f) {
            return e.each(function() {
                (t = t ? $(t, e) : e).on(mouseDown, {
                    e: e,
                    k: r
                }, function(e) {
                    var t, r, i, a, o, l, n = e.data,
                        s = {},
                        d = function(e, t) {
                            return parseInt(e.css(t), 10) || !1
                        },
                        c = function(e) {
                            return d(r, e)
                        },
                        u = function(e) {
                            return d(a, e)
                        },
                        p = getMouseCoordinates(e);
                    if (!$(e.target).hasClass("ui-jqdialog-titlebar-close") && !$(e.target).parent().hasClass("ui-jqdialog-titlebar-close")) {
                        if (r = n.e, a = !!f && $(f), "relative" !== r.css("position")) try {
                            r.position(s)
                        } catch (e) {}
                        if (i = {
                                X: s.left || c("left") || 0,
                                Y: s.top || c("top") || 0,
                                W: c("width") || r[0].scrollWidth || 0,
                                H: c("height") || r[0].scrollHeight || 0,
                                pX: p.x,
                                pY: p.y,
                                k: n.k
                            }, o = !(!a || "move" === n.k) && {
                                X: s.left || u("left") || 0,
                                Y: s.top || u("top") || 0,
                                W: a[0].offsetWidth || u("width") || 0,
                                H: a[0].offsetHeight || u("height") || 0,
                                pX: p.x,
                                pY: p.y,
                                k: n.k
                            }, 0 < (t = r.find("input.hasDatepicker")).length) try {
                            t.datepicker("hide")
                        } catch (e) {}
                        return l = {
                            e: r,
                            dnr: i,
                            ar: a,
                            dnrAr: o
                        }, $(document).on(mouseMove, l, jqDnR.drag), $(document).on(mouseUp, l, jqDnR.stop), !1
                    }
                })
            })
        };
    window.PointerEvent ? (mouseDown += namespace + " pointerdown" + namespace, mouseMove += namespace + " pointermove" + namespace, mouseUp += namespace + " pointerup" + namespace) : window.MSPointerEvent ? (mouseDown += namespace + " mspointerdown" + namespace, mouseMove += namespace + " mspointermove" + namespace, mouseUp += namespace + " mspointerup") : (mouseDown += namespace + " touchstart" + namespace, mouseMove += namespace + " touchmove" + namespace, mouseUp += namespace + " touchend" + namespace), $.jqDnR = jqDnR, $.fn.jqDrag = function(e) {
        return init(this, e, "move")
    }, $.fn.jqResize = function(e, t) {
        return init(this, e, "resize", t)
    };
    var jqmHashLength = 0,
        jqmHash, createdModals = [],
        setFocusOnFirstVisibleInput = function(e) {
            try {
                $(":input:visible", e.w).first().focus()
            } catch (e) {}
        },
        setFocus = function(e) {
            setFocusOnFirstVisibleInput(e)
        },
        keyOrMouseEventHandler = function(e) {
            var t = jqmHash[createdModals[createdModals.length - 1]],
                r = !$(e.target).parents(".jqmID" + t.s)[0],
                i = $(e.target).offset(),
                a = void 0 !== e.pageX ? e.pageX : i.left,
                o = void 0 !== e.pageY ? e.pageY : i.top,
                l = function() {
                    var r = !1;
                    return $(".jqmID" + t.s).each(function() {
                        var e = $(this),
                            t = e.offset();
                        if (t.top <= o && o <= t.top + e.height() && t.left <= a && a <= t.left + e.width()) return !(r = !0)
                    }), r
                };
            return !("mousedown" === e.type || !l()) || ("mousedown" === e.type && r && (l() && (r = !1), r && !$(e.target).is(":input") && setFocusOnFirstVisibleInput(t)), !r)
        },
        bindOrUnbindEvents = function(e) {
            $(document)[e]("keypress keydown mousedown", keyOrMouseEventHandler)
        },
        registerHideOrShow = function(e, t, r) {
            return e.each(function() {
                var e = this._jqm;
                $(t).each(function() {
                    this[r] || (this[r] = [], $(this).click(function() {
                        var e, t, r, i = ["jqmShow", "jqmHide"];
                        for (e = 0; e < i.length; e++)
                            for (r in this[t = i[e]]) this[t].hasOwnProperty(r) && jqmHash[this[t][r]] && jqmHash[this[t][r]].w[t](this);
                        return !1
                    })), this[r].push(e)
                })
            })
        };
    $.fn.jqm = function(e) {
        var t = {
            overlay: 50,
            closeoverlay: !1,
            overlayClass: "jqmOverlay",
            closeClass: "jqmClose",
            trigger: ".jqModal",
            ajax: !1,
            ajaxText: "",
            target: !1,
            modal: !1,
            toTop: !1,
            onShow: !1,
            onHide: !1,
            onLoad: !1
        };
        return this.each(function() {
            if (this._jqm) return jqmHash[this._jqm].c = $.extend({}, jqmHash[this._jqm].c, e), jqmHash[this._jqm].c;
            jqmHashLength++, this._jqm = jqmHashLength, jqmHash[jqmHashLength] = {
                c: $.extend(t, $.jqm.params, e),
                a: !1,
                w: $(this).addClass("jqmID" + jqmHashLength),
                s: jqmHashLength
            }, t.trigger && $(this).jqmAddTrigger(t.trigger)
        })
    }, $.fn.jqmAddClose = function(e) {
        return registerHideOrShow(this, e, "jqmHide")
    }, $.fn.jqmAddTrigger = function(e) {
        return registerHideOrShow(this, e, "jqmShow")
    }, $.fn.jqmShow = function(e) {
        return this.each(function() {
            $.jqm.open(this._jqm, e)
        })
    }, $.fn.jqmHide = function(e) {
        return this.each(function() {
            $.jqm.close(this._jqm, e)
        })
    }, $.jqm = {
        hash: {},
        open: function(e, t) {
            var r, i, a, o, l, n = jqmHash[e],
                s = n.c,
                d = n.w.parent().offset(),
                c = "." + s.closeClass,
                u = parseInt(n.w.css("z-index"), 10);
            return u = 0 < u ? u : 3e3, r = $("
").css({
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                "z-index": u - 1,
                opacity: s.overlay / 100
            }), n.a || (n.t = t, n.a = !0, n.w.css("z-index", u), $(n.w[0].ownerDocument).data("ui-dialog-overlays") && n.w.addClass("ui-dialog"), s.modal ? (createdModals[0] || setTimeout(function() {
                bindOrUnbindEvents("bind")
            }, 1), createdModals.push(e)) : 0 < s.overlay ? s.closeoverlay && n.w.jqmAddClose(r) : r = !1, n.o = !!r && r.addClass(s.overlayClass).prependTo("body"), s.ajax ? (i = s.target || n.w, a = s.ajax, i = "string" == typeof i ? $(i, n.w) : $(i), a = "@" === a.substr(0, 1) ? $(t).attr(a.substring(1)) : a, i.html(s.ajaxText).load(a, function() {
                s.onLoad && s.onLoad.call(this, n), c && n.w.jqmAddClose($(c, n.w)), setFocus(n)
            })) : c && n.w.jqmAddClose($(c, n.w)), s.toTop && n.o && (d = n.w.parent().offset(), o = parseFloat(n.w.css("left") || 0), l = parseFloat(n.w.css("top") || 0), n.w.before('').insertAfter(n.o), n.w.css({
                top: d.top + l,
                left: d.left + o
            })), s.onShow ? s.onShow(n) : n.w.show(), setFocus(n)), !1
        },
        close: function(e) {
            var t = jqmHash[e];
            return t.a && (t.a = !1, createdModals[0] && (createdModals.pop(), createdModals[0] || bindOrUnbindEvents("unbind")), t.c.toTop && t.o && $("#jqmP" + t.w[0]._jqm).after(t.w).remove(), t.c.onHide ? t.c.onHide(t) : (t.w.hide(), t.o && t.o.remove())), !1
        },
        params: {}
    }, jqmHash = $.jqm.hash, $.fmatter = $.fmatter || {};
    var fmatter = $.fmatter,
        getOptionByName = function(e, t) {
            var r = e.formatoptions || {};
            return r.hasOwnProperty(t) ? r[t] : (e.editoptions || {})[t]
        },
        encodeAttr = function(e) {
            return String(e).replace(/\'/g, "'")
        },
        parseCheckboxOptions = function(e) {
            var t, r, i = e.colModel || e.cm,
                a = !1 !== i.title ? " title='" + encodeAttr(e.colName || i.name) + "'" : "",
                o = function(e) {
                    return getOptionByName(i, e)
                },
                l = o("checkedClass"),
                n = o("uncheckedClass"),
                s = o("value"),
                d = "string" == typeof s && s.split(":")[0] || "Yes",
                c = "string" == typeof s && s.split(":")[1] || "No",
                u = function(e) {
                    return ""
                },
                p = o("disabled");
            void 0 === p && (p = jgrid.formatter.checkbox.disabled);
            var f = base.getIconRes.call(this, "checkbox.checked"),
                h = base.getIconRes.call(this, "checkbox.checkedClasses"),
                g = base.getIconRes.call(this, "checkbox.unchecked");
            return !0 === p && (l || n || f || g) ? (t = u(l || f), r = u(n || g), l = h || (l || f)) : (t = "", r = ""), {
                checkedClasses: l,
                checked: t,
                unchecked: r,
                yes: d,
                no: c
            }
        },
        yesObject = {
            1: 1,
            x: 1,
            true: 1,
            yes: 1,
            y: 1,
            on: 1
        },
        noObject = {
            0: 1,
            false: 1,
            no: 1,
            n: 1,
            off: 1
        };
    $.extend(!0, jgrid, {
        formatter: {
            date: {
                parseRe: /[#%\\\/:_;.,\t\s\-]/,
                masks: {
                    ISO8601Long: "Y-m-d H:i:s",
                    ISO8601Short: "Y-m-d",
                    SortableDateTime: "Y-m-d\\TH:i:s",
                    UniversalSortableDateTime: "Y-m-d H:i:sO"
                },
                reformatAfterEdit: !0,
                userLocalTime: !1
            },
            baseLinkUrl: "",
            showAction: "",
            target: "",
            checkbox: {
                disabled: !0,
                defaultValue: !1
            },
            idName: "id"
        },
        cmTemplate: {
            integerStr: {
                formatter: "integer",
                align: "right",
                sorttype: "integer",
                searchoptions: {
                    sopt: ["eq", "ne", "lt", "le", "gt", "ge"]
                }
            },
            integer: {
                formatter: "integer",
                align: "right",
                sorttype: "integer",
                convertOnSave: function(e) {
                    var t = e.newValue;
                    return isNaN(t) ? t : parseInt(t, 10)
                },
                searchoptions: {
                    sopt: ["eq", "ne", "lt", "le", "gt", "ge"]
                }
            },
            numberStr: {
                formatter: "number",
                align: "right",
                sorttype: "number",
                searchoptions: {
                    sopt: ["eq", "ne", "lt", "le", "gt", "ge"]
                }
            },
            number: {
                formatter: "number",
                align: "right",
                sorttype: "number",
                convertOnSave: function(e) {
                    var t = e.newValue;
                    return isNaN(t) ? t : parseFloat(t)
                },
                searchoptions: {
                    sopt: ["eq", "ne", "lt", "le", "gt", "ge"]
                }
            },
            booleanCheckbox: {
                align: "center",
                formatter: "checkbox",
                sorttype: "boolean",
                edittype: "checkbox",
                editoptions: {
                    value: "true:false",
                    defaultValue: "false"
                },
                convertOnSave: function(e) {
                    var t = e.newValue,
                        r = parseCheckboxOptions.call(this, e),
                        i = String(t).toLowerCase();
                    return yesObject[i] || i === r.yes.toLowerCase() ? t = !0 : (noObject[i] || i === r.no.toLowerCase()) && (t = !1), t
                },
                stype: "checkbox",
                searchoptions: {
                    sopt: ["eq"],
                    value: "true:false"
                }
            },
            actions: function() {
                return {
                    formatter: "actions",
                    width: (null != this.p && (base.isInCommonIconClass.call(this, "fa") || base.isInCommonIconClass.call(this, "glyphicon")) ? $(this).jqGrid("isBootstrapGuiStyle") ? 45 : 39 : 40) + (jgrid.cellWidth() ? 5 : 0),
                    align: "center",
                    label: "",
                    autoResizable: !1,
                    title: !1,
                    frozen: !0,
                    fixed: !0,
                    hidedlg: !0,
                    resizable: !1,
                    sortable: !1,
                    search: !1,
                    editable: !1,
                    viewable: !1
                }
            }
        }
    }), jgrid.cmTemplate.booleanCheckboxFa = jgrid.cmTemplate.booleanCheckbox, $.extend(fmatter, {
        isObject: function(e) {
            return e && ("object" == typeof e || $.isFunction(e)) || !1
        },
        isNumber: function(e) {
            return "number" == typeof e && isFinite(e)
        },
        isValue: function(e) {
            return this.isObject(e) || "string" == typeof e || this.isNumber(e) || "boolean" == typeof e
        },
        isEmpty: function(e) {
            return ("string" == typeof e || !this.isValue(e)) && (!this.isValue(e) || "" === (e = $.trim(e).replace(/ /gi, "").replace(/ /gi, "")))
        },
        NumberFormat: function(e, t) {
            var r = fmatter.isNumber;
            if (r(e) || (e *= 1), r(e)) {
                var i, a = e < 0,
                    o = String(e),
                    l = t.decimalSeparator || ".";
                if (r(t.decimalPlaces)) {
                    var n = t.decimalPlaces;
                    if (i = (o = String(Number(Math.round(e + "e" + n) + "e-" + n))).lastIndexOf("."), 0 < n)
                        for (i < 0 ? i = (o += l).length - 1 : "." !== l && (o = o.replace(".", l)); o.length - 1 - i < n;) o += "0"
                }
                if (t.thousandsSeparator) {
                    var s = t.thousandsSeparator;
                    i = -1 < (i = o.lastIndexOf(l)) ? i : o.length;
                    var d, c = void 0 === t.decimalSeparator ? "" : o.substring(i),
                        u = -1;
                    for (d = i; 0 < d; d--) ++u % 3 == 0 && d !== i && (!a || 1 < d) && (c = s + c), c = o.charAt(d - 1) + c;
                    o = c
                }
                return o
            }
            return e
        }
    });
    var $FnFmatter = function(e, t, r, i, a) {
        var o = t;
        r = $.extend({}, getGridRes.call($(this), "formatter"), r);
        try {
            o = $.fn.fmatter[e].call(this, t, r, i, a)
        } catch (e) {}
        return o
    };
    $.fn.fmatter = $FnFmatter, $FnFmatter.getCellBuilder = function(e, t, r) {
        var i = null != $.fn.fmatter[e] ? $.fn.fmatter[e].getCellBuilder : null;
        return $.isFunction(i) ? i.call(this, $.extend({}, getGridRes.call($(this), "formatter"), t), r) : null
    }, $FnFmatter.defaultFormat = function(e, t) {
        return fmatter.isValue(e) && "" !== e ? e : t.defaultValue || " "
    };
    var defaultFormat = $FnFmatter.defaultFormat,
        formatCheckboxValue = function(e, t, r) {
            if (void 0 === e || fmatter.isEmpty(e)) {
                var i = getOptionByName(r, "defaultValue");
                void 0 === i && (i = t.no), e = i
            }
            return e = String(e).toLowerCase(), yesObject[e] || e === t.yes.toLowerCase() ? t.checked : t.unchecked
        };
    $FnFmatter.email = function(e, t) {
        return fmatter.isEmpty(e) ? defaultFormat(e, t) : "" + e + ""
    }, $FnFmatter.checkbox = function(e, t) {
        var r = parseCheckboxOptions.call(this, t);
        return formatCheckboxValue(e, r, t.colModel)
    }, $FnFmatter.checkbox.getCellBuilder = function(e) {
        var t, r = e.colModel;
        return e.colName = e.colName || this.p.colNames[e.pos], t = parseCheckboxOptions.call(this, e),
            function(e) {
                return formatCheckboxValue(e, t, r)
            }
    }, $FnFmatter.checkbox.unformat = function(e, t, r) {
        var i = parseCheckboxOptions.call(this, t),
            a = $(r);
        return (i.checkedClasses ? jgrid.hasAllClasses(a.children("i,svg"), i.checkedClasses) : a.children("input").is(":checked")) ? i.yes : i.no
    }, $FnFmatter.checkboxFontAwesome4 = $FnFmatter.checkbox, $FnFmatter.checkboxFontAwesome4.getCellBuilder = $FnFmatter.checkbox.getCellBuilder, $FnFmatter.checkboxFontAwesome4.unformat = $FnFmatter.checkbox.unformat, $FnFmatter.link = function(e, t) {
        var r = t.colModel,
            i = "",
            a = {
                target: t.target
            };
        return null != r && (a = $.extend({}, a, r.formatoptions || {})), a.target && (i = "target=" + a.target), fmatter.isEmpty(e) ? defaultFormat(e, a) : "" + e + ""
    }, $FnFmatter.showlink = function(t, r, i) {
        var e, a, o, l = this,
            n = r.colModel,
            s = {
                baseLinkUrl: r.baseLinkUrl,
                showAction: r.showAction,
                addParam: r.addParam || "",
                target: r.target,
                idName: r.idName,
                hrefDefaultValue: "#"
            },
            d = "",
            c = function(e) {
                return $.isFunction(e) ? e.call(l, {
                    cellValue: t,
                    rowid: r.rowId,
                    rowData: i,
                    options: s
                }) : e || ""
            };
        return null != n && (s = $.extend({}, s, n.formatoptions || {})), s.target && (d = "target=" + c(s.target)), e = c(s.baseLinkUrl) + c(s.showAction), a = s.idName ? encodeURIComponent(c(s.idName)) + "=" + encodeURIComponent(c(s.rowId) || r.rowId) : "", "object" == typeof(o = c(s.addParam)) && null !== o && (o = ("" !== a ? "&" : "") + $.param(o)), "" === (e += a || o ? "?" + a + o : "") && (e = c(s.hrefDefaultValue)), "string" == typeof t || fmatter.isNumber(t) || $.isFunction(s.cellValue) ? "" + ($.isFunction(s.cellValue) ? c(s.cellValue) : t) + "" : defaultFormat(t, s)
    }, $FnFmatter.showlink.getCellBuilder = function(e) {
        var c = {
                baseLinkUrl: e.baseLinkUrl,
                showAction: e.showAction,
                addParam: e.addParam || "",
                target: e.target,
                idName: e.idName,
                hrefDefaultValue: "#"
            },
            t = e.colModel;
        return null != t && (c = $.extend({}, c, t.formatoptions || {})),
            function(t, e, r) {
                var i, a, o, l = this,
                    n = e.rowId,
                    s = "",
                    d = function(e) {
                        return $.isFunction(e) ? e.call(l, {
                            cellValue: t,
                            rowid: n,
                            rowData: r,
                            options: c
                        }) : e || ""
                    };
                return c.target && (s = "target=" + d(c.target)), i = d(c.baseLinkUrl) + d(c.showAction), a = c.idName ? encodeURIComponent(d(c.idName)) + "=" + encodeURIComponent(d(n) || e.rowId) : "", "object" == typeof(o = d(c.addParam)) && null !== o && (o = ("" !== a ? "&" : "") + $.param(o)), "" === (i += a || o ? "?" + a + o : "") && (i = d(c.hrefDefaultValue)), "string" == typeof t || fmatter.isNumber(t) || $.isFunction(c.cellValue) ? "" + ($.isFunction(c.cellValue) ? d(c.cellValue) : t) + "" : defaultFormat(t, c)
            }
    }, $FnFmatter.showlink.pageFinalization = function(e) {
        var t, r, i, o = $(this),
            l = this.p,
            a = l.colModel[e],
            n = l.autoResizing.wrapperClassName,
            s = this.rows,
            d = s.length,
            c = function(e) {
                var t = $(this).closest("tr.jqgrow>td"),
                    r = t.parent(),
                    i = t[0].cellIndex,
                    a = l.colModel[i];
                if (0 < r.length) return a.formatoptions.onClick.call(o[0], {
                    iCol: i,
                    iRow: r[0].rowIndex,
                    rowid: r.attr("id"),
                    cm: a,
                    cmName: a.name,
                    cellValue: $(this).text(),
                    a: this,
                    event: e
                })
            };
        if (null != a.formatoptions && $.isFunction(a.formatoptions.onClick))
            for (t = 0; t < d; t++) r = s[t], $(r).hasClass("jqgrow") && (i = r.cells[e], a.autoResizable && null != i && $(i.firstChild).hasClass(n) && (i = i.firstChild), null != i && $(i.firstChild).on("click", c))
    };
    var insertPrefixAndSuffix = function(e, t) {
            return e = t.prefix ? t.prefix + e : e, t.suffix ? e + t.suffix : e
        },
        numberHelper = function(e, t, r) {
            var i = t.colModel,
                a = $.extend({}, t[r]);
            return null != i && (a = $.extend({}, a, i.formatoptions || {})), fmatter.isEmpty(e) ? insertPrefixAndSuffix(a.defaultValue, a) : insertPrefixAndSuffix(fmatter.NumberFormat(e, a), a)
        };
    $FnFmatter.integer = function(e, t) {
        return numberHelper(e, t, "integer")
    }, $FnFmatter.number = function(e, t) {
        return numberHelper(e, t, "number")
    }, $FnFmatter.currency = function(e, t) {
        return numberHelper(e, t, "currency")
    };
    var numberCellBuilder = function(e, t) {
        var r = e.colModel,
            i = $.extend({}, e[t]);
        null != r && (i = $.extend({}, i, r.formatoptions || {}));
        var a = fmatter.NumberFormat,
            o = i.defaultValue ? insertPrefixAndSuffix(i.defaultValue, i) : "";
        return function(e) {
            return fmatter.isEmpty(e) ? o : insertPrefixAndSuffix(a(e, i), i)
        }
    };
    $FnFmatter.integer.getCellBuilder = function(e) {
        return numberCellBuilder(e, "integer")
    }, $FnFmatter.number.getCellBuilder = function(e) {
        return numberCellBuilder(e, "number")
    }, $FnFmatter.currency.getCellBuilder = function(e) {
        return numberCellBuilder(e, "currency")
    }, $FnFmatter.date = function(e, t, r, i) {
        var a = t.colModel,
            o = $.extend({}, t.date);
        return null != a && (o = $.extend({}, o, a.formatoptions || {})), o.reformatAfterEdit || "edit" !== i ? fmatter.isEmpty(e) ? defaultFormat(e, o) : jgrid.parseDate.call(this, o.srcformat, e, o.newformat, o) : defaultFormat(e, o)
    }, $FnFmatter.date.getCellBuilder = function(e, t) {
        var r = $.extend({}, e.date);
        null != e.colModel && (r = $.extend({}, r, e.colModel.formatoptions || {}));
        var i = jgrid.parseDate,
            a = r.srcformat,
            o = r.newformat;
        return r.reformatAfterEdit || "edit" !== t ? function(e) {
            return fmatter.isEmpty(e) ? defaultFormat(e, r) : i.call(this, a, e, o, r)
        } : function(e) {
            return defaultFormat(e, r)
        }
    }, $FnFmatter.select = function(e, t) {
        var r, i = [],
            a = t.colModel,
            o = $.extend({}, a.editoptions || {}, a.formatoptions || {}),
            l = "function" == typeof o.value ? o.value() : o.value,
            n = o.separator || ":",
            s = o.delimiter || ";";
        if (l) {
            var d, c = !0 === o.multiple,
                u = [],
                p = function(e, t) {
                    if (0 < t) return e
                };
            if (c && (u = $.map(String(e).split(","), function(e) {
                    return $.trim(e)
                })), "string" == typeof l) {
                var f, h, g = l.split(s);
                for (f = 0; f < g.length; f++)
                    if (2 < (d = g[f].split(n)).length && (d[1] = $.map(d, p).join(n)), h = $.trim(d[0]), o.defaultValue === h && (r = d[1]), c) - 1 < $.inArray(h, u) && i.push(d[1]);
                    else if (h === $.trim(e)) {
                    i = [d[1]];
                    break
                }
            } else fmatter.isObject(l) && (r = l[o.defaultValue], i = c ? $.map(u, function(e) {
                return l[e]
            }) : [void 0 === l[e] ? "" : l[e]])
        }
        return "" !== (e = i.join(", ")) ? e : void 0 !== o.defaultValue ? r : defaultFormat(e, o)
    }, $FnFmatter.select.getCellBuilder = function(e) {
        var a, t, r, i, o = e.colModel,
            l = $FnFmatter.defaultFormat,
            n = $.extend({}, o.editoptions || {}, o.formatoptions || {}),
            s = "function" == typeof n.value ? n.value() : n.value,
            d = n.separator || ":",
            c = n.delimiter || ";",
            u = void 0 !== n.defaultValue,
            p = !0 === n.multiple,
            f = {},
            h = function(e, t) {
                if (0 < t) return e
            };
        if ("string" == typeof s)
            for (i = (r = s.split(c)).length - 1; 0 <= i; i--) 2 < (t = r[i].split(d)).length && (t[1] = $.map(t, h).join(d)), f[$.trim(t[0])] = t[1];
        else {
            if (!fmatter.isObject(s)) return function(e) {
                return e ? String(e) : l(e, n)
            };
            f = s
        }
        return u && (a = f[n.defaultValue]), p ? function(e) {
            var t, r = [],
                i = $.map(String(e).split(","), function(e) {
                    return $.trim(e)
                });
            for (t = 0; t < i.length; t++) e = i[t], f.hasOwnProperty(e) && r.push(f[e]);
            return "" !== (e = r.join(", ")) ? e : u ? a : l(e, n)
        } : function(e) {
            var t = f[String(e)];
            return "" !== t && void 0 !== t ? t : u ? a : l(e, n)
        }
    }, $FnFmatter.rowactions = function(e, t) {
        var r, i, a, o, l = $(this).closest("tr.jqgrow>td"),
            n = l.parent(),
            s = n.attr("id"),
            d = $(this).closest("table.ui-grid-btable").attr("id").replace(/_frozen([^_]*)$/, "$1"),
            c = $("#" + jgrid.jqID(d)),
            u = c[0],
            p = u.p,
            f = jgrid.getRelativeRect.call(u, n).top,
            h = p.colModel[l[0].cellIndex],
            g = $.extend(!0, {
                extraparam: {}
            }, jgrid.actionsNav || {}, p.actionsNavOptions || {}, h.formatoptions || {});
        switch (void 0 !== p.editOptions && (g.editOptions = $.extend(!0, g.editOptions || {}, p.editOptions)), void 0 !== p.delOptions && (g.delOptions = p.delOptions), n.hasClass("jqgrid-new-row") && (g.extraparam[p.prmNames.oper] = p.prmNames.addoper), o = {
            keys: g.keys,
            oneditfunc: g.onEdit,
            successfunc: g.onSuccess,
            url: g.url,
            extraparam: g.extraparam,
            aftersavefunc: g.afterSave,
            errorfunc: g.onError,
            afterrestorefunc: g.afterRestore,
            restoreAfterError: g.restoreAfterError,
            mtype: g.mtype
        }, !p.multiselect && s !== p.selrow || p.multiselect && $.inArray(s, p.selarrrow) < 0 ? c.jqGrid("setSelection", s, !0, e) : jgrid.fullBoolFeedback.call(u, "onSelectRow", "jqGridSelectRow", s, !0, e), t) {
            case "edit":
                c.jqGrid("editRow", s, o);
                break;
            case "save":
                c.jqGrid("saveRow", s, o);
                break;
            case "cancel":
                c.jqGrid("restoreRow", s, g.afterRestore);
                break;
            case "del":
                g.delOptions = g.delOptions || {}, void 0 === g.delOptions.top && (g.delOptions.top = f), c.jqGrid("delGridRow", s, g.delOptions);
                break;
            case "formedit":
                g.editOptions = g.editOptions || {}, void 0 === g.editOptions.top && (g.editOptions.top = f, g.editOptions.recreateForm = !0), c.jqGrid("editGridRow", s, g.editOptions);
                break;
            default:
                if (null != g.custom && 0 < g.custom.length)
                    for (i = g.custom.length, r = 0; r < i; r++)(a = g.custom[r]).action === t && $.isFunction(a.onClick) && a.onClick.call(u, {
                        rowid: s,
                        event: e,
                        action: t,
                        options: a
                    })
        }
        return e.stopPropagation && e.stopPropagation(), !1
    }, $FnFmatter.actions = function(e, t, r, i) {
        var a, o, l, n = t.rowId,
            s = "",
            d = $(this),
            c = {},
            u = getGridRes.call(d, "edit") || {},
            p = $.extend({
                editbutton: !0,
                delbutton: !0,
                editformbutton: !1,
                commonIconClass: "ui-icon",
                editicon: "ui-icon-pencil",
                delicon: "ui-icon-trash",
                saveicon: "ui-icon-disk",
                cancelicon: "ui-icon-cancel",
                savetitle: u.bSubmit || "",
                canceltitle: u.bCancel || ""
            }, getGridRes.call(d, "nav") || {}, jgrid.nav || {}, this.p.navOptions || {}, getGridRes.call(d, "actionsNav") || {}, jgrid.actionsNav || {}, this.p.actionsNavOptions || {}, (t.colModel || {}).formatoptions || {}),
            f = [{
                action: "edit",
                actionName: "formedit",
                display: p.editformbutton
            }, {
                action: "edit",
                display: !p.editformbutton && p.editbutton
            }, {
                action: "del",
                idPrefix: "Delete",
                display: p.delbutton
            }, {
                action: "save",
                display: p.editformbutton || p.editbutton,
                hidden: !0
            }, {
                action: "cancel",
                display: p.editformbutton || p.editbutton,
                hidden: !0
            }],
            h = function(e) {
                var t, r = e.action,
                    i = e.actionName || r,
                    a = void 0 !== e.idPrefix ? e.idPrefix : r.charAt(0).toUpperCase() + r.substring(1);
                return ""
            },
            g = null != p.custom ? p.custom.length - 1 : -1;
        if (void 0 === n || fmatter.isEmpty(n)) return "";
        if ($.isFunction(p.isDisplayButtons)) try {
            c = p.isDisplayButtons.call(this, p, r, i) || {}
        } catch (e) {}
        for (; 0 <= g;) f["first" === (l = p.custom[g--]).position ? "unshift" : "push"](l);
        for (a = 0, g = f.length; a < g; a++) !1 !== (o = $.extend({}, f[a], c[f[a].action] || {})).display && (s += h(o));
        return "
" + s + "
"
    }, $FnFmatter.actions.pageFinalization = function(e) {
        var t, r, i, s, d = $(this),
            c = this.p,
            a = c.colModel[e],
            o = c.autoResizing.wrapperClassName,
            l = d.jqGrid("getGuiStyles", "states.hover"),
            n = this.rows,
            u = this.grid.fbRows,
            p = n.length,
            f = (s = a.name, function(e, t) {
                var r, i, a = 0,
                    o = c.colModel,
                    l = o.length,
                    n = c.iColByName[s];
                for (i = 0; i < l && !0 === o[i].frozen; i++) a = i;
                null != t && null != t.cells && (r = $(t.cells[n]).children(".ui-grid-actions"), o[n].frozen && c.frozenColumns && n <= a && (r = r.add($(d[0].grid.fbRows[t.rowIndex].cells[n]).children(".ui-grid-actions"))), e ? (r.find(">.ui-inline-edit,>.ui-inline-del").show(), r.find(">.ui-inline-save,>.ui-inline-cancel").hide()) : (r.find(">.ui-inline-edit,>.ui-inline-del").hide(), r.find(">.ui-inline-save,>.ui-inline-cancel").show()))
            }),
            h = function(e, t) {
                var r = d.jqGrid("getGridRowById", t);
                return f(!0, r), !1
            },
            g = function(e, t) {
                var r = d.jqGrid("getGridRowById", t);
                return f(!1, r), !1
            },
            m = function(e) {
                1 === $(e.target).closest("div.ui-pg-div").data("jqhovering") && $(this).addClass(l)
            },
            v = function(e) {
                1 === $(e.target).closest("div.ui-pg-div").data("jqhovering") && $(this).removeClass(l)
            },
            b = function(e) {
                return $FnFmatter.rowactions.call(this, e, $(e.target).closest("div.ui-pg-div").data("jqactionname"))
            },
            w = function(e, t) {
                t && null != e && $(e.firstChild).hasClass(o) && (e = e.firstChild), null != e && ($(e.firstChild).on("click", b), $(e.firstChild).children("div.ui-pg-div").on("mouseover", m).on("mouseout", v))
            },
            y = (i = a.name, function(e, t) {
                var r = c.iColByName[i];
                w(t.tr.cells[r], c.colModel[r].autoResizable)
            });
        for (null != a.formatoptions && a.formatoptions.editformbutton || (d.off("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter", h), d.on("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter", h), d.off("jqGridInlineEditRow.jqGridFormatter", g), d.on("jqGridInlineEditRow.jqGridFormatter", g), d.off("jqGridAfterAddRow.jqGridFormatter", y), d.on("jqGridAfterAddRow.jqGridFormatter", y)), t = 0; t < p; t++) r = n[t], $(r).hasClass("jqgrow") && (w(r.cells[e], a.autoResizable), null != u && null != u[t] && w(u[t].cells[e], a.autoResizable))
    }, $.unformat = function(e, t, r, i) {
        var a, o = t.colModel,
            l = o.formatter,
            n = this.p,
            s = o.formatoptions || {},
            d = o.unformat || $FnFmatter[l] && $FnFmatter[l].unformat;
        if (e instanceof jQuery && 0 < e.length && (e = e[0]), n.treeGrid && null != e && $(e.firstChild).hasClass("tree-wrap") && ($(e.lastChild).hasClass("cell-wrapper") || $(e.lastChild).hasClass("cell-wrapperleaf")) && (e = e.lastChild), o.autoResizable && null != e && $(e.firstChild).hasClass(n.autoResizing.wrapperClassName) && (e = e.firstChild), void 0 !== d && $.isFunction(d)) a = d.call(this, $(e).text(), t, e);
        else if (void 0 !== l && "string" == typeof l) {
            var c = $(this),
                u = function(e, t) {
                    return void 0 !== s[t] ? s[t] : getGridRes.call(c, "formatter." + e + "." + t)
                },
                p = function(e, t) {
                    var r = u(e, "thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g, "\\$1");
                    return t.replace(new RegExp(r, "g"), "")
                };
            switch (l) {
                case "integer":
                    a = p("integer", $(e).text());
                    break;
                case "number":
                    a = p("number", $(e).text()).replace(u("number", "decimalSeparator"), ".");
                    break;
                case "currency":
                    a = $(e).text();
                    var f = u("currency", "prefix"),
                        h = u("currency", "suffix");
                    f && f.length && (a = a.substr(f.length)), h && h.length && (a = a.substr(0, a.length - h.length)), a = p("number", a).replace(u("number", "decimalSeparator"), ".");
                    break;
                case "checkbox":
                    a = $FnFmatter.checkbox.unformat(e, t, e);
                    break;
                case "select":
                    a = $.unformat.select(e, t, r, i);
                    break;
                case "actions":
                    return "";
                default:
                    a = $(e).text()
            }
        }
        return a = void 0 !== a ? a : !0 === i ? $(e).text() : jgrid.htmlDecode($(e).html())
    }, $.unformat.select = function(e, t, r, i) {
        var a = [],
            o = $(e).text(),
            l = t.colModel;
        if (!0 === i) return o;
        var n = $.extend({}, l.editoptions || {}, l.formatoptions || {}),
            s = void 0 === n.separator ? ":" : n.separator,
            d = void 0 === n.delimiter ? ";" : n.delimiter;
        if (n.value) {
            var c, u = "function" == typeof n.value ? n.value() : n.value,
                p = !0 === n.multiple,
                f = [],
                h = function(e, t) {
                    if (0 < t) return e
                };
            if (p && (f = o.split(","), f = $.map(f, function(e) {
                    return $.trim(e)
                })), "string" == typeof u) {
                var g, m = u.split(d),
                    v = 0;
                for (g = 0; g < m.length; g++)
                    if (2 < (c = m[g].split(s)).length && (c[1] = $.map(c, h).join(s)), p) - 1 < $.inArray($.trim(c[1]), f) && (a[v] = c[0], v++);
                    else if ($.trim(c[1]) === $.trim(o)) {
                    a[0] = c[0];
                    break
                }
            } else(fmatter.isObject(u) || $.isArray(u)) && (p || (f[0] = o), a = $.map(f, function(r) {
                var i;
                if ($.each(u, function(e, t) {
                        if (t === r) return i = e, !1
                    }), void 0 !== i) return i
            }));
            return a.join(", ")
        }
        return o || ""
    }, $.unformat.date = function(e, t) {
        var r = $.extend(!0, {}, getGridRes.call($(this), "formatter.date"), jgrid.formatter.date || {}, t.formatoptions || {});
        return fmatter.isEmpty(e) ? "" : jgrid.parseDate.call(this, r.newformat, e, r.srcformat, r)
    }
});