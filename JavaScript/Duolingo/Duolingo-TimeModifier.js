/*
 * Duolingo 限时挑战时长修改（QX 重写版）
 * 原作者：Takagivegeta（Loon 插件 lingoDuo-enchanced.plugin）
 * 来源：https://github.com/TAKAGIVEGETA/MyScripts/tree/main/lingoDuo
 * 功能：在限时挑战中自定义时长
 *
 * QX 无 Loon 的插件参数系统，原插件的 timer_mins 改为下方配置。
 */

// ================= QX 配置区 =================
const TIMER_MINS = 60; // 自定义挑战时长（分钟），原插件默认 60
// ===========================================

try {
    let obj = JSON.parse($response.body);
    let seconds = parseInt(TIMER_MINS) * 60;
    if (!isNaN(seconds) && seconds > 0 && obj.liveOpsChallenges)
        obj.liveOpsChallenges.forEach(challenge => {
            if (challenge.initialTime) challenge.initialTime = seconds;
            if (challenge.initialLevelTimes) challenge.initialLevelTimes = challenge.initialLevelTimes.map(() => seconds);
            if (challenge.initialSessionTimes) challenge.initialSessionTimes = challenge.initialSessionTimes.map(() => seconds);
        });
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({});
}
