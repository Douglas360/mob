export const dateFormatWithHours = value =>
  value
    ? new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date(value))
    : '';
