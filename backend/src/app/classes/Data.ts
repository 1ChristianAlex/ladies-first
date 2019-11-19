export default class DateParser {
  constructor(private DateValue: string) {}
  private DateFormater(date: Date) {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
  }
  public ParseDate() {
    const regexDate = new RegExp(/^[1-9]{4}\/[0-12]{2}\/[0-12]{2}$/, "ig");

    const dateString = regexDate.test(this.DateValue);

    if (dateString) {
      let date = new Date(this.DateValue);

      return this.DateFormater(date);
    } else {
      let [day, month, year] = this.DateValue.split("/");

      let date = new Date(`${year}/${month}/${day}`);

      let newDate = this.DateFormater(date);

      return newDate;
    }
  }
}
