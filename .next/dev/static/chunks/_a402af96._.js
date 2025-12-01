(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseServer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupabaseServer",
    ()=>createSupabaseServer,
    "getReplayUrl",
    ()=>getReplayUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const createSupabaseServer = ()=>{
    const SUPABASE_URL = "https://odfnasavfwviywqjwgwn.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZm5hc2F2Znd2aXl3cWp3Z3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTA0MTksImV4cCI6MjA3OTkyNjQxOX0.nR7O8E-9jG_HaPUo5CCAv5KfIAyvuGLkM16lHUXboeo";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_ANON_KEY);
};
const getReplayUrl = async (filename)=>{
    const supabase = createSupabaseServer();
    const { data } = supabase.storage.from("replays").getPublicUrl(filename);
    return data.publicUrl;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ReplayEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReplayViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ReplayViewer({ battleLog }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReplayViewer.useEffect": ()=>{
            if (!containerRef.current) return;
            const scripts = [
                "https://play.pokemonshowdown.com/config.js",
                "https://code.jquery.com/jquery-3.7.0.min.js",
                "https://play.pokemonshowdown.com/js/battle.js",
                "https://play.pokemonshowdown.com/js/battle-log.js",
                "https://play.pokemonshowdown.com/js/battle-tooltips.js",
                "https://play.pokemonshowdown.com/js/battle-animations.js",
                "https://play.pokemonshowdown.com/js/replay-viewer.js",
                "https://play.pokemonshowdown.com/js/replay-embed.js"
            ];
            let i = 0;
            const loadNext = {
                "ReplayViewer.useEffect.loadNext": ()=>{
                    if (i >= scripts.length) {
                        // @ts-ignore
                        new window.ReplayEmbed(containerRef.current, {
                            log: battleLog
                        });
                        return;
                    }
                    const s = document.createElement("script");
                    s.src = scripts[i++];
                    s.onload = loadNext;
                    document.body.appendChild(s);
                }
            }["ReplayViewer.useEffect.loadNext"];
            loadNext();
            return ({
                "ReplayViewer.useEffect": ()=>{
                    // Remove dynamically inserted scripts
                    scripts.forEach({
                        "ReplayViewer.useEffect": (src)=>{
                            const el = document.querySelector(`script[src="${src}"]`);
                            if (el) el.remove();
                        }
                    }["ReplayViewer.useEffect"]);
                    // @ts-ignore
                    window.ReplayEmbed?.destroy?.();
                }
            })["ReplayViewer.useEffect"];
        }
    }["ReplayViewer.useEffect"], [
        battleLog
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: "600px"
        }
    }, void 0, false, {
        fileName: "[project]/components/ReplayEmbed.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ReplayViewer, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = ReplayViewer;
var _c;
__turbopack_context__.k.register(_c, "ReplayViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/division/[id]/week/[week]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeekPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseServer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReplayEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ReplayEmbed.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WeekPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const week = params.week;
    const [replays, setReplays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBattleLog, setSelectedBattleLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeekPage.useEffect": ()=>{
            const fetchReplays = {
                "WeekPage.useEffect.fetchReplays": async ()=>{
                    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSupabaseServer"])();
                    const { data } = await supabase.from("replays").select("id, team1, team2, file_url").eq("division", Number(id)).eq("week", Number(week));
                    setReplays(data || []);
                }
            }["WeekPage.useEffect.fetchReplays"];
            fetchReplays();
        }
    }["WeekPage.useEffect"], [
        id,
        week
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            padding: 40,
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "300px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Division ",
                            id,
                            " — Week ",
                            week
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    !replays.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No replays uploaded yet."
                    }, void 0, false, {
                        fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 29
                    }, this),
                    replays.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        r.team1,
                                        " vs ",
                                        r.team2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        marginTop: 4,
                                        padding: "4px 8px"
                                    },
                                    onClick: ()=>setSelectedBattleLog(r.file_url),
                                    children: "View Replay"
                                }, void 0, false, {
                                    fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, r.id, true, {
                            fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    border: "1px solid #ccc",
                    height: "600px"
                },
                children: selectedBattleLog ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ReplayEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    battleLog: selectedBattleLog
                }, void 0, false, {
                    fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        padding: 20
                    },
                    children: "Click a replay to view it here."
                }, void 0, false, {
                    fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/division/[id]/week/[week]/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(WeekPage, "7THo/a+8Suw1McpvqvRmz6cTQR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = WeekPage;
var _c;
__turbopack_context__.k.register(_c, "WeekPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a402af96._.js.map