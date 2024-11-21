# Minicron

A simple utility for scheduling functions at fixed intervals (seconds, minutes, hours, days) using `setInterval()`.

## Installation

Include the module in your project:

```
npm install minicron
```

## API

All methods return a `Timer` object that `clearInterval` can use as ID to cancel the cron execution.

### `const cronID = cron.seconds(amount, fn, ...args)`
Run a function every `amount` seconds.

```js
cron.seconds(5, () => {
  console.log('Runs every 5 seconds');
});
```

### `const cronID = cron.minutes(amount, fn, ...args)`
Run a function every `amount` minutes.

```js
cron.minutes(2, () => {
  console.log('Runs every 2 minutes');
});
```

### `const cronID =  cron.hours(amount, fn, ...args)`
Run a function every `amount` hours.

```js
cron.hours(1, () => {
  console.log('Runs every 1 hour');
});
```

### `const cronID = cron.days(amount, fn, ...args)`
Run a function every `amount` days.

```js
cron.days(1, () => {
  console.log('Runs every 1 day');
});
```

## Example

```js
const cron = require('minicron');

cron.seconds(10, () => console.log('Every 10 seconds'));
cron.minutes(1, () => console.log('Every minute'));
cron.hours(1, () => console.log('Every hour'));
cron.days(1, () => console.log('Every day'));
```

## Notes

- The methods use `setInterval()` and will run indefinitely.
- You can manually stop the intervals using `clearInterval(cronID)` if needed.

## License

Apache-2.0
