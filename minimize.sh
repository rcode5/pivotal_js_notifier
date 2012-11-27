cat pjsn.js | jsmin | perl -nle 'print if !/^\s?$/' > pjsn.min.js
