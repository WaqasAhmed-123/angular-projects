import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.css']
})
export class CalendarTestComponent implements OnInit {

  currentEvents = signal<EventApi[]>([]);
  isDeleteClicked = false;
  isLoading = false;
  showWeekends = true;
  calendarOptions: CalendarOptions;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.LoadCalendar();
  }

  LoadCalendar()
  {
    this.calendarOptions =
    {
      plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
     },
      events: this.fetchEvents.bind(this),
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: (event: any)=>{
        if(this.isDeleteClicked)
        {
          this.isDeleteClicked = false;
          if (confirm('Are you sure you want to delete the event ' + event.event.title)) {
            this.isLoading =true;
            setTimeout(() => {
              event.event.remove();
              this.isLoading = false;
            }, 1000);
          }
        }
        else
        {
          alert(JSON.stringify(event.event));
        }
      },
      eventsSet: this.handleEvents.bind(this),
      eventChange: this.handleEventChange.bind(this)
    };
  }



  fetchEvents(info, successCallback): void
  {
    this.isLoading = true;
    const start = info.startStr;
    const end = info.endStr;
    console.log('Start Date:', start);
    console.log('End Date:', end);
    setTimeout(() => {
      this.isLoading = false;
      successCallback([
        {
          id: "1",
          title: 'Event 1',
          start: '2023-06-01',
          end: '2023-06-03',
          color: 'red'
        },
        {
          id: "2",
          title: 'Event 2',
          start: '2023-06-02',
          end: '2023-06-03',
          color: 'green'
        },
        {
          id: "3",
          title: 'Event 3',
          start: '2023-06-02',
          end: '2023-06-03',
          color: 'blue'
        },
        {
          id: "4",
          title: 'Event 4',
          start: '2023-06-02',
          end: '2023-06-03',
          color: 'green'
        },
        {
          id: "5",
          title: 'Event 5',
          start: '2023-06-05',
          end: '2023-06-06',
          color: 'blue'
        },
        {
          id: "6",
          title: 'Event 6',
          start: '2023-06-08',
          end: '2023-06-11',
          color: 'red'
        },
        {
          id: "7",
          title: 'Event 7',
          start: '2023-06-08',
          end: '2023-06-11',
          color: 'red'
        }
      ]);
    }, 1000);
  }

  toggleWeekends(): void {
    this.showWeekends = !this.showWeekends;
    this.calendarOptions.weekends = this.showWeekends;
  }

  handleEventChange(event)
  {
    alert(`Old Event# ${event.oldEvent.id}, ${event.oldEvent.title}, ${event.oldEvent.startStr}, ${event.oldEvent.endStr}\nNew Event# ${event.event.id}, ${event.event.title}, ${event.event.startStr}, ${event.event.endStr}`);
  }

  //triggered when date is clicked
  handleDateSelect(selectInfo: any) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    this.isLoading = true;
    setTimeout(() => {
      if (title) {
        calendarApi.addEvent({
          id: "9",
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        });
      }
      this.isLoading = false;
    }, 1000);

  }

  deleteEvent()
  {
    this.isDeleteClicked = true;
  }

  handleEvents(events: EventApi[])
  {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }


}
