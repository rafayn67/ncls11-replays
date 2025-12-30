(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/NCL/NCLS11/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://odfnasavfwviywqjwgwn.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZm5hc2F2Znd2aXl3cWp3Z3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTA0MTksImV4cCI6MjA3OTkyNjQxOX0.nR7O8E-9jG_HaPUo5CCAv5KfIAyvuGLkM16lHUXboeo"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/NCL/NCLS11/app/admin/UploadReplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const UploadReplay = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [division, setDivision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [week, setWeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.min(Math.max(Math.floor((new Date().getTime() - new Date("2025-11-24").getTime()) / (1000 * 60 * 60 * 24 * 7)) + 1, 1), 9));
    const [matchup, setMatchup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [matchups, setMatchups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMatchup, setSelectedMatchup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadReplay.useEffect": ()=>{
            const loadMatchups = {
                "UploadReplay.useEffect.loadMatchups": async ()=>{
                    const { data: matchupData, error: matchupError } = await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("matchups").select("team1, team2").eq("division", division).eq("week", week);
                    if (matchupError || !matchupData) {
                        console.warn("No matchups found or error:", matchupError);
                        setMatchups([]);
                        setSelectedMatchup(null);
                        return;
                    }
                    // 2️⃣ Fetch all teams for the division to get abbreviations
                    const { data: teamsData, error: teamsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("teams").select("name, abv").eq("division", division);
                    if (teamsError || !teamsData) {
                        console.warn("No teams found or error:", teamsError);
                        setMatchups([]);
                        setSelectedMatchup(null);
                        return;
                    }
                    // 3️⃣ Attach abbreviations to each matchup
                    const matchupWithAbv = matchupData.map({
                        "UploadReplay.useEffect.loadMatchups.matchupWithAbv": (m)=>({
                                ...m,
                                team1_abv: teamsData.find({
                                    "UploadReplay.useEffect.loadMatchups.matchupWithAbv": (t)=>t.name === m.team1
                                }["UploadReplay.useEffect.loadMatchups.matchupWithAbv"])?.abv || "",
                                team2_abv: teamsData.find({
                                    "UploadReplay.useEffect.loadMatchups.matchupWithAbv": (t)=>t.name === m.team2
                                }["UploadReplay.useEffect.loadMatchups.matchupWithAbv"])?.abv || ""
                            })
                    }["UploadReplay.useEffect.loadMatchups.matchupWithAbv"]);
                    setMatchups(matchupWithAbv);
                    setSelectedMatchup(matchupWithAbv[0] || null);
                }
            }["UploadReplay.useEffect.loadMatchups"];
            loadMatchups();
        }
    }["UploadReplay.useEffect"], [
        division,
        week
    ]);
    const handleUpload = async ()=>{
        if (!file) return alert("Please select a replay file.");
        if (!selectedMatchup) return alert("Matchup not found."); // ✅ use selectedMatchup here
        const filename = `${selectedMatchup.team1_abv}vs${selectedMatchup.team2_abv}.html`;
        const path = `d${division}/w${week}/${filename}`;
        // Check if replay already exists (both orders)
        const { data: exists1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("replays").list(`d${division}/w${week}`, {
            search: filename
        });
        const { data: exists2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("replays").list(`d${division}/w${week}`, {
            search: `${selectedMatchup.team2_abv}vs${selectedMatchup.team1_abv}.html`
        });
        const alreadyExists = exists1 && exists1.length > 0 || exists2 && exists2.length > 0;
        if (alreadyExists) {
            const ok = confirm("A replay for this matchup already exists. Overwrite?");
            if (!ok) return;
            await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("replays").remove([
                path
            ]);
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("replays").upload(path, file, {
            cacheControl: "3600",
            upsert: false
        });
        if (error) return alert("Upload failed.");
        alert(alreadyExists ? "Replay overwritten successfully!" : "Replay uploaded successfully!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-900 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-6 text-center",
                        children: "Upload Replay"
                    }, void 0, false, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex-1 text-white font-semibold",
                                children: [
                                    "Division",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: division,
                                        onChange: (e)=>setDivision(Number(e.target.value)),
                                        className: "w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: d,
                                                children: [
                                                    "D",
                                                    d
                                                ]
                                            }, d, true, {
                                                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex-1 text-white font-semibold",
                                children: [
                                    "Week",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: week,
                                        onChange: (e)=>setWeek(Number(e.target.value)),
                                        className: "w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9
                                        ].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: w,
                                                children: w
                                            }, w, false, {
                                                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                                lineNumber: 121,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    matchups.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedMatchup ? `${selectedMatchup.team1}vs${selectedMatchup.team2}` : "",
                        onChange: (e)=>{
                            const [team1, team2] = e.target.value.split("vs");
                            const m = matchups.find((m)=>m.team1 === team1 && m.team2 === team2);
                            setSelectedMatchup(m || null);
                        },
                        className: "w-full mb-4 p-3 rounded-lg text-center text-gray-900 font-medium",
                        children: matchups.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: `${m.team1}vs${m.team2}`,
                                children: [
                                    m.team1,
                                    " vs ",
                                    m.team2
                                ]
                            }, idx, true, {
                                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                                lineNumber: 137,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 127,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 mb-4 text-center",
                        children: "Loading matchups..."
                    }, void 0, false, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 143,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: ".html",
                        onChange: (e)=>setFile(e.target.files?.[0] || null),
                        className: "flex justify-center mb-6 text-white font-bold"
                    }, void 0, false, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpload,
                        className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1",
                        children: "Upload Replay"
                    }, void 0, false, {
                        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 flex gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        localStorage.removeItem("staffLoggedIn");
                        router.push("/");
                    },
                    className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md",
                    children: "Sign Out"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/NCL/NCLS11/app/admin/UploadReplay.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UploadReplay, "U4MNe7rL0ZGbj5U8c3xeE8bxelY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadReplay;
const __TURBOPACK__default__export__ = UploadReplay;
var _c;
__turbopack_context__.k.register(_c, "UploadReplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/NCL/NCLS11/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$app$2f$admin$2f$UploadReplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/app/admin/UploadReplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/NCL/NCLS11/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UploadPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadPage.useEffect": ()=>{
            const stored = localStorage.getItem("staffLoggedIn");
            if (stored === "true") setLoggedIn(true);
        }
    }["UploadPage.useEffect"], []);
    const handleLogin = async ()=>{
        if (!password) return alert("Enter password");
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem("staffLoggedIn", "true");
            setLoggedIn(true);
            setPassword("");
        } else {
            alert("Wrong password");
        }
    };
    const handleLogout = ()=>{
        localStorage.removeItem("staffLoggedIn");
        setLoggedIn(false);
    };
    if (!loggedIn) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md text-center border border-white/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-white mb-6",
                    children: "NCL Mod Login"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Enter staff password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    className: "w-full p-3 rounded-lg mb-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogin,
                    className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
            lineNumber: 44,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md",
                    children: "Sign Out"
                }, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$app$2f$admin$2f$UploadReplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/NCL/NCLS11/app/admin/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(UploadPage, "WvHkpWHJ8THCnDcc0ZHs+4Zm7lk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$NCL$2f$NCLS11$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadPage;
var _c;
__turbopack_context__.k.register(_c, "UploadPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=NCL_NCLS11_659e0312._.js.map