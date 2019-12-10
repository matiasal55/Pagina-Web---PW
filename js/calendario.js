$(document).ready(function() {

    $('#calendar').fullCalendar({
      defaultDate: '2020-03-09',
//        defaultDate: moment().format("YYYY-MM-DD"),
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Curso HTML - Inicio',
            url:'cursos/Curso-HTML.html',
          start: '2020-03-09T13:00:00'
        },
          {
          title: 'Curso Java - Inicio',
            url:'cursos/Curso-Java.html',
          start: '2020-03-11T13:00:00'
        },
          {
          title: 'Curso Arduino - Inicio',
            url:'cursos/Curso-Arduino.html',
          start: '2020-03-13T13:00:00'
        },
          {
          title: 'Curso Excel - Inicio',
            url:'cursos/Curso-Excel.html',
          start: '2020-03-17T09:00:00'
        },
          {
          title: 'Curso Word - Inicio',
            url:'cursos/Curso-Word.html',
          start: '2020-03-17T15:00:00'
        },
          {
          title: 'Curso Illustrator - Inicio',
            url:'cursos/Curso-Illustrator.html',
          start: '2020-03-19T09:00:00'
        },
          {
          title: 'Curso Photoshop - Inicio',
            url:'cursos/Curso-photoshop.html',
          start: '2020-03-19T15:00:00'
        },
        /*{
          title: 'Long Event',
          start: '2019-01-07',
          end: '2019-01-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2019-01-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2019-01-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2019-01-11',
          end: '2019-01-13'
        },
        {
          title: 'Meeting',
          start: '2019-01-12T10:30:00',
          end: '2019-01-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2019-01-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-01-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2019-01-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2019-01-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2019-01-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-01-28'
        },
          {
          title: 'Curso HTML',
          url: 'http://google.com/',
          start: '2019-12-28'
        }*/
      ]
    });

  });
