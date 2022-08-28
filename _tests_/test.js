const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-08-22 01:06:03');
    expect(format_date(date)).toBe('8/22/2022');
});