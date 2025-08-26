// Dynamické generování statistik
window.worktimeStats = {
  calc: function(sessions, rate) {
    let today = new Date().toISOString().slice(0,10);
    let month = today.slice(0,7);
    let todaySessions = sessions.filter(s=>s.start.startsWith(today)) || [];
    let monthSessions = sessions.filter(s=>s.start.startsWith(month)) || [];
    let todayTotal = todaySessions.reduce((acc, s)=>acc+((new Date(s.end)-new Date(s.start))/60000),0);
    let todayBreaks = todaySessions.reduce((acc, s)=>acc+(s['break']||0),0);
    let todayEarnings = (todayTotal/60)*rate;
    let monthTotal = monthSessions.reduce((acc, s)=>acc+((new Date(s.end)-new Date(s.start))/60000),0);
    let monthEarnings = (monthTotal/60)*rate;
    return {
      today_total_min: todayTotal,
      today_sessions: todaySessions.length,
      today_breaks: todayBreaks,
      today_earnings: todayEarnings,
      month_earnings: monthEarnings,
    };
  }
};
