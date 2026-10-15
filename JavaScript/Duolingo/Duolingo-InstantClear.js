/*
 * Duolingo 直接通关（QX 重写版）
 * 原作者：Takagivegeta（Loon 插件 lingoDuo-enchanced.plugin）
 * 来源：https://github.com/TAKAGIVEGETA/MyScripts/tree/main/lingoDuo
 * 功能：进入关卡直接通关（部分关卡）
 */

try {
  let obj = JSON.parse($response.body);
  const type = obj.type;
  const skipTypes = ["SIDE_QUEST_RAMP_UP_PRACTICE", "MATCH_PRACTICE"];
  if (type && !skipTypes.includes(type)) {
    const pools = [
        'challenges',
        'adaptiveChallenges',
        'adaptiveInterleavedChallenges',
        'mistakesReplacementChallenges'
    ];
    pools.forEach(pool => {
        if (obj[pool] && obj[pool].length > 0) obj[pool] = [];
    });
  }
  if (obj.elements && obj.elements.length > 0) obj.elements = [];
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});
}
