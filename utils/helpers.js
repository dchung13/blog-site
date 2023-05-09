module.exports = {
    format_date: (date_created) => {
        return `${new Date(date_created).getMonth()}/${new Date(date_created).getDate()}/${
      new Date(date_created).getFullYear()}`;
    }
}