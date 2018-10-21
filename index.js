const yolog = (logMe, showAll) => {
  console.time('Logger');
  let jString = JSON.stringify(logMe, null, 2);
  const firstQuotePos = jString.indexOf('"');
  const varName = jString.slice(firstQuotePos + 1, jString.indexOf('"', firstQuotePos + 1));
  const firstQuoteColonPos = jString.indexOf('":') + 2;
  const lastCurlyPos = jString.lastIndexOf('}');
  jString = jString.slice(firstQuoteColonPos, lastCurlyPos);
  const raw = logMe[varName];
  console.log(' ');

  console.log(
    '\x1b[95m%s\x1b[0m',
    `${varName} ❯▶${typeof raw === 'string' ? '' : '\n'}`,
    showAll ? jString : raw
  );

  if (typeof showAll === 'undefined') { console.log(' ') };
  console.timeEnd('Logger');
};

module.exports = yolog;
