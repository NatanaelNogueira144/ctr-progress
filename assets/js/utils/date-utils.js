const TIME_REGEX = /^(-?\d{1}):([0-5]\d{1})\.(\d{2})$/;

function formatTime(totalHundredths) {
  const absoluteValue = Math.abs(totalHundredths);
  const minutes = Math.floor(absoluteValue / 6000);
  const seconds = Math.floor((absoluteValue % 6000) / 100);
  const hundredths = Math.floor(absoluteValue % 100);

  const padZero = (number) => `${number < 10 ? '0' : ''}${number}`;

  const symbol = totalHundredths < 0 ? '-' : '';
  const m = minutes;
  const s = padZero(seconds);
  const h = padZero(hundredths);

  return `${symbol}${m}:${s}.${h}`;
}

function timeToHundredths(time) {
  const isNegative = time[0] === '-';
  const absolute = isNegative ? time.split("-")[1] : time;
  const [minPart, rest] = absolute.split(":");
  const [secPart, centPart] = rest.split(".");

  const minutes = Number(minPart);
  const seconds = Number(secPart);
  const centiseconds = Number(centPart);

  return (minutes * 60 * 100 + seconds * 100 + centiseconds) * (isNegative ? -1 : 1);
}

function parseTimeInput(time) {
  return TIME_REGEX.test(time) ? timeToHundredths(time) : 0;
}

function formatTimeMask(raw) {
  let value = raw.replace(/(?<!^)-|[^0-9-]/g, "");
  value = value.substring(0, 9);
  const minusOffset = value[0] === "-" ? 1 : 0;

  if (value.length > 1 + minusOffset) {
    value = value.replace(/^(-?\d{1})(\d)/, "$1:$2");
  }

  if (value.length > 3 + minusOffset) {
    value = value.replace(/^(-?\d{1}):[6-9](\d{1})/, "$1:5$2");
  }

  if (value.length > 4 + minusOffset) {
    value = value.replace(/^(-?\d{1}):([0-5]\d{1})(\d)/, "$1:$2.$3");
  }

  return value;
}

function formatOptionalTime(value, fallback = '-:--.--') {
  return value ? formatTime(value) : fallback;
}

function formatPace(pace) {
  return pace?.length ? pace.map(formatTime).join(' + ') : '-:--.-- + -:--.--';
}