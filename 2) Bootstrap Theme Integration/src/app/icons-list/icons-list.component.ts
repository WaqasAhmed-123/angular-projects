import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.css']
})
export class IconsListComponent {

  bootstrapIconClasses: any = [
    {
      "index": 1,
      "class": "bi bi-alarm"
    },
    {
      "index": 2,
      "class": "bi bi-align-bottom"
    },
    {
      "index": 3,
      "class": "bi bi-align-center"
    },
    {
      "index": 4,
      "class": "bi bi-align-end"
    },
    {
      "index": 5,
      "class": "bi bi-align-middle"
    },
    {
      "index": 6,
      "class": "bi bi-align-start"
    },
    {
      "index": 7,
      "class": "bi bi-align-top"
    },
    {
      "index": 8,
      "class": "bi bi-alt"
    },
    {
      "index": 9,
      "class": "bi bi-app-indicator"
    },
    {
      "index": 10,
      "class": "bi bi-app"
    },
    {
      "index": 11,
      "class": "bi bi-archive-fill"
    },
    {
      "index": 12,
      "class": "bi bi-archive"
    },
    {
      "index": 13,
      "class": "bi bi-arrow-90deg-down"
    },
    {
      "index": 14,
      "class": "bi bi-arrow-90deg-left"
    },
    {
      "index": 15,
      "class": "bi bi-arrow-90deg-right"
    },
    {
      "index": 16,
      "class": "bi bi-arrow-90deg-up"
    },
    {
      "index": 17,
      "class": "bi bi-arrow-bar-down"
    },
    {
      "index": 18,
      "class": "bi bi-arrow-bar-left"
    },
    {
      "index": 19,
      "class": "bi bi-arrow-bar-right"
    },
    {
      "index": 20,
      "class": "bi bi-arrow-bar-up"
    },
    {
      "index": 21,
      "class": "bi bi-arrow-clockwise"
    },
    {
      "index": 22,
      "class": "bi bi-arrow-counterclockwise"
    },
    {
      "index": 23,
      "class": "bi bi-arrow-down-circle-fill"
    },
    {
      "index": 24,
      "class": "bi bi-arrow-down-circle"
    },
    {
      "index": 25,
      "class": "bi bi-arrow-down-left-circle-fill"
    },
    {
      "index": 26,
      "class": "bi bi-arrow-down-left-circle"
    },
    {
      "index": 27,
      "class": "bi bi-arrow-down-left-square-fill"
    },
    {
      "index": 28,
      "class": "bi bi-arrow-down-left-square"
    },
    {
      "index": 29,
      "class": "bi bi-arrow-down-left"
    },
    {
      "index": 30,
      "class": "bi bi-arrow-down-right-circle-fill"
    },
    {
      "index": 31,
      "class": "bi bi-arrow-down-right-circle"
    },
    {
      "index": 32,
      "class": "bi bi-arrow-down-right-square-fill"
    },
    {
      "index": 33,
      "class": "bi bi-arrow-down-right-square"
    },
    {
      "index": 34,
      "class": "bi bi-arrow-down-right"
    },
    {
      "index": 35,
      "class": "bi bi-arrow-down-short"
    },
    {
      "index": 36,
      "class": "bi bi-arrow-down-square-fill"
    },
    {
      "index": 37,
      "class": "bi bi-arrow-down-square"
    },
    {
      "index": 38,
      "class": "bi bi-arrow-down-up"
    },
    {
      "index": 39,
      "class": "bi bi-arrow-down"
    },
    {
      "index": 40,
      "class": "bi bi-arrow-left-circle-fill"
    },
    {
      "index": 41,
      "class": "bi bi-arrow-left-circle"
    },
    {
      "index": 42,
      "class": "bi bi-arrow-left-right"
    },
    {
      "index": 43,
      "class": "bi bi-arrow-left-short"
    },
    {
      "index": 44,
      "class": "bi bi-arrow-left-square-fill"
    },
    {
      "index": 45,
      "class": "bi bi-arrow-left-square"
    },
    {
      "index": 46,
      "class": "bi bi-arrow-left"
    },
    {
      "index": 47,
      "class": "bi bi-arrow-repeat"
    },
    {
      "index": 48,
      "class": "bi bi-arrow-return-left"
    },
    {
      "index": 49,
      "class": "bi bi-arrow-return-right"
    },
    {
      "index": 50,
      "class": "bi bi-arrow-right-circle-fill"
    },
    {
      "index": 51,
      "class": "bi bi-arrow-right-circle"
    },
    {
      "index": 52,
      "class": "bi bi-arrow-right-short"
    },
    {
      "index": 53,
      "class": "bi bi-arrow-right-square-fill"
    },
    {
      "index": 54,
      "class": "bi bi-arrow-right-square"
    },
    {
      "index": 55,
      "class": "bi bi-arrow-right"
    },
    {
      "index": 56,
      "class": "bi bi-arrow-up-circle-fill"
    },
    {
      "index": 57,
      "class": "bi bi-arrow-up-circle"
    },
    {
      "index": 58,
      "class": "bi bi-arrow-up-left-circle-fill"
    },
    {
      "index": 59,
      "class": "bi bi-arrow-up-left-circle"
    },
    {
      "index": 60,
      "class": "bi bi-arrow-up-left-square-fill"
    },
    {
      "index": 61,
      "class": "bi bi-arrow-up-left-square"
    },
    {
      "index": 62,
      "class": "bi bi-arrow-up-left"
    },
    {
      "index": 63,
      "class": "bi bi-arrow-up-right-circle-fill"
    },
    {
      "index": 64,
      "class": "bi bi-arrow-up-right-circle"
    },
    {
      "index": 65,
      "class": "bi bi-arrow-up-right-square-fill"
    },
    {
      "index": 66,
      "class": "bi bi-arrow-up-right-square"
    },
    {
      "index": 67,
      "class": "bi bi-arrow-up-right"
    },
    {
      "index": 68,
      "class": "bi bi-arrow-up-short"
    },
    {
      "index": 69,
      "class": "bi bi-arrow-up-square-fill"
    },
    {
      "index": 70,
      "class": "bi bi-arrow-up-square"
    },
    {
      "index": 71,
      "class": "bi bi-arrow-up"
    },
    {
      "index": 72,
      "class": "bi bi-arrows-angle-contract"
    },
    {
      "index": 73,
      "class": "bi bi-arrows-angle-expand"
    },
    {
      "index": 74,
      "class": "bi bi-arrows-collapse"
    },
    {
      "index": 75,
      "class": "bi bi-arrows-expand"
    },
    {
      "index": 76,
      "class": "bi bi-arrows-fullscreen"
    },
    {
      "index": 77,
      "class": "bi bi-arrows-move"
    },
    {
      "index": 78,
      "class": "bi bi-aspect-ratio-fill"
    },
    {
      "index": 79,
      "class": "bi bi-aspect-ratio"
    },
    {
      "index": 80,
      "class": "bi bi-asterisk"
    },
    {
      "index": 81,
      "class": "bi bi-at"
    },
    {
      "index": 82,
      "class": "bi bi-award-fill"
    },
    {
      "index": 83,
      "class": "bi bi-award"
    },
    {
      "index": 84,
      "class": "bi bi-back"
    },
    {
      "index": 85,
      "class": "bi bi-backspace-fill"
    },
    {
      "index": 86,
      "class": "bi bi-backspace-reverse-fill"
    },
    {
      "index": 87,
      "class": "bi bi-backspace-reverse"
    },
    {
      "index": 88,
      "class": "bi bi-backspace"
    },
    {
      "index": 89,
      "class": "bi bi-badge-3d-fill"
    },
    {
      "index": 90,
      "class": "bi bi-badge-3d"
    },
    {
      "index": 91,
      "class": "bi bi-badge-4k-fill"
    },
    {
      "index": 92,
      "class": "bi bi-badge-4k"
    },
    {
      "index": 93,
      "class": "bi bi-badge-8k-fill"
    },
    {
      "index": 94,
      "class": "bi bi-badge-8k"
    },
    {
      "index": 95,
      "class": "bi bi-badge-ad-fill"
    },
    {
      "index": 96,
      "class": "bi bi-badge-ad"
    },
    {
      "index": 97,
      "class": "bi bi-badge-cc-fill"
    },
    {
      "index": 98,
      "class": "bi bi-badge-cc"
    },
    {
      "index": 99,
      "class": "bi bi-badge-hd-fill"
    },
    {
      "index": 100,
      "class": "bi bi-badge-hd"
    },
    {
      "index": 101,
      "class": "bi bi-badge-tm-fill"
    },
    {
      "index": 102,
      "class": "bi bi-badge-tm"
    },
    {
      "index": 103,
      "class": "bi bi-badge-vo-fill"
    },
    {
      "index": 104,
      "class": "bi bi-badge-vo"
    },
    {
      "index": 105,
      "class": "bi bi-badge-vr-fill"
    },
    {
      "index": 106,
      "class": "bi bi-badge-vr"
    },
    {
      "index": 107,
      "class": "bi bi-badge-wc-fill"
    },
    {
      "index": 108,
      "class": "bi bi-badge-wc"
    },
    {
      "index": 109,
      "class": "bi bi-badge-cc"
    },
    {
      "index": 110,
      "class": "bi bi-bag-check-fill"
    },
    {
      "index": 111,
      "class": "bi bi-bag-check"
    },
    {
      "index": 112,
      "class": "bi bi-bag-dash-fill"
    },
    {
      "index": 113,
      "class": "bi bi-bag-dash"
    },
    {
      "index": 114,
      "class": "bi bi-bag-fill"
    },
    {
      "index": 115,
      "class": "bi bi-bag-plus-fill"
    },
    {
      "index": 116,
      "class": "bi bi-bag-plus"
    },
    {
      "index": 117,
      "class": "bi bi-bag-x-fill"
    },
    {
      "index": 118,
      "class": "bi bi-bag-x"
    },
    {
      "index": 119,
      "class": "bi bi-bag"
    },
    {
      "index": 120,
      "class": "bi bi-bar-chart-fill"
    },
    {
      "index": 121,
      "class": "bi bi-bar-chart-line-fill"
    },
    {
      "index": 122,
      "class": "bi bi-bar-chart-line"
    },
    {
      "index": 123,
      "class": "bi bi-bar-chart-steps"
    },
    {
      "index": 124,
      "class": "bi bi-bar-chart"
    },
    {
      "index": 125,
      "class": "bi bi-basket-fill"
    },
    {
      "index": 126,
      "class": "bi bi-basket"
    },
    {
      "index": 127,
      "class": "bi bi-basket2-fill"
    },
    {
      "index": 128,
      "class": "bi bi-basket2"
    },
    {
      "index": 129,
      "class": "bi bi-battery-charging"
    },
    {
      "index": 130,
      "class": "bi bi-battery-full"
    },
    {
      "index": 131,
      "class": "bi bi-battery-half"
    },
    {
      "index": 132,
      "class": "bi bi-battery"
    },
    {
      "index": 133,
      "class": "bi bi-bell-fill"
    },
    {
      "index": 134,
      "class": "bi bi-bell-slash-fill"
    },
    {
      "index": 135,
      "class": "bi bi-bell-slash"
    },
    {
      "index": 136,
      "class": "bi bi-bell"
    },
    {
      "index": 137,
      "class": "bi bi-bezier"
    },
    {
      "index": 138,
      "class": "bi bi-bezier2"
    },
    {
      "index": 139,
      "class": "bi bi-bicycle"
    },
    {
      "index": 140,
      "class": "bi bi-binoculars-fill"
    },
    {
      "index": 141,
      "class": "bi bi-binoculars"
    },
    {
      "index": 142,
      "class": "bi bi-blockquote-left"
    },
    {
      "index": 143,
      "class": "bi bi-blockquote-right"
    },
    // {
    //   "index": 144,
    //   "class": "bi bi-blockquote-quote-right"
    // },
    // {
    //   "index": 145,
    //   "class": "bi bi-blockquote-reverse-left"
    // },
    // {
    //   "index": 146,
    //   "class": "bi bi-blockquote-reverse"
    // },
    {
      "index": 147,
      "class": "bi bi-blockquote-right"
    },
    // {
    //   "index": 148,
    //   "class": "bi bi-blockquote"
    // },
    {
      "index": 149,
      "class": "bi bi-book-fill"
    },
    {
      "index": 150,
      "class": "bi bi-book-half"
    },
    {
      "index": 151,
      "class": "bi bi-book"
    },
    {
      "index": 152,
      "class": "bi bi-bookmark-check-fill"
    },
    {
      "index": 153,
      "class": "bi bi-bookmark-check"
    },
    {
      "index": 154,
      "class": "bi bi-bookmark-dash-fill"
    },
    {
      "index": 155,
      "class": "bi bi-bookmark-dash"
    },
    {
      "index": 156,
      "class": "bi bi-bookmark-fill"
    },
    {
      "index": 157,
      "class": "bi bi-bookmark-heart-fill"
    },
    {
      "index": 158,
      "class": "bi bi-bookmark-heart"
    },
    {
      "index": 159,
      "class": "bi bi-bookmark-plus-fill"
    },
    {
      "index": 160,
      "class": "bi bi-bookmark-plus"
    },
    {
      "index": 161,
      "class": "bi bi-bookmark-star-fill"
    },
    {
      "index": 162,
      "class": "bi bi-bookmark-star"
    },
    {
      "index": 163,
      "class": "bi bi-bookmark-x-fill"
    },
    {
      "index": 164,
      "class": "bi bi-bookmark-x"
    },
    {
      "index": 165,
      "class": "bi bi-bookmark"
    },
    {
      "index": 166,
      "class": "bi bi-bookmarks-fill"
    },
    {
      "index": 167,
      "class": "bi bi-bookmarks"
    },
    {
      "index": 168,
      "class": "bi bi-bootstrap-fill"
    },
    {
      "index": 169,
      "class": "bi bi-bootstrap-reboot"
    },
    {
      "index": 170,
      "class": "bi bi-bootstrap"
    },
    {
      "index": 171,
      "class": "bi bi-border-all"
    },
    {
      "index": 172,
      "class": "bi bi-border-bottom"
    },
    {
      "index": 173,
      "class": "bi bi-border-center"
    },
    {
      "index": 174,
      "class": "bi bi-border-inner"
    },
    {
      "index": 175,
      "class": "bi bi-border-left"
    },
    {
      "index": 176,
      "class": "bi bi-border-middle"
    },
    {
      "index": 177,
      "class": "bi bi-border-outer"
    },
    {
      "index": 178,
      "class": "bi bi-border-right"
    },
    {
      "index": 179,
      "class": "bi bi-border-style"
    },
    {
      "index": 180,
      "class": "bi bi-border-top"
    },
    {
      "index": 181,
      "class": "bi bi-border-width"
    },
    {
      "index": 182,
      "class": "bi bi-border"
    },
    {
      "index": 183,
      "class": "bi bi-bounding-box-circles"
    },
    {
      "index": 184,
      "class": "bi bi-bounding-box"
    },
    {
      "index": 185,
      "class": "bi bi-box-arrow-down-left"
    },
    {
      "index": 186,
      "class": "bi bi-box-arrow-down-right"
    },
    {
      "index": 187,
      "class": "bi bi-box-arrow-down"
    },
    {
      "index": 188,
      "class": "bi bi-box-arrow-in-down-left"
    },
    {
      "index": 189,
      "class": "bi bi-box-arrow-in-down-right"
    },
    {
      "index": 190,
      "class": "bi bi-box-arrow-in-down"
    },
    {
      "index": 191,
      "class": "bi bi-box-arrow-in-left"
    },
    {
      "index": 192,
      "class": "bi bi-box-arrow-in-right"
    },
    {
      "index": 193,
      "class": "bi bi-box-arrow-in-up-left"
    },
    {
      "index": 194,
      "class": "bi bi-box-arrow-in-up-right"
    },
    {
      "index": 195,
      "class": "bi bi-box-arrow-in-up"
    },
    {
      "index": 196,
      "class": "bi bi-box-arrow-left"
    },
    {
      "index": 197,
      "class": "bi bi-box-arrow-right"
    },
    {
      "index": 198,
      "class": "bi bi-box-arrow-up-left"
    },
    {
      "index": 199,
      "class": "bi bi-box-arrow-up-right"
    },
    {
      "index": 200,
      "class": "bi bi-box-arrow-up"
    },
    {
      "index": 201,
      "class": "bi bi-box-seam"
    },
    {
      "index": 202,
      "class": "bi bi-box"
    },
    {
      "index": 203,
      "class": "bi bi-braces"
    },
    {
      "index": 204,
      "class": "bi bi-bricks"
    },
    {
      "index": 205,
      "class": "bi bi-briefcase-fill"
    },
    {
      "index": 206,
      "class": "bi bi-briefcase"
    },
    {
      "index": 207,
      "class": "bi bi-brightness-alt-high-fill"
    },
    {
      "index": 208,
      "class": "bi bi-brightness-alt-high"
    },
    {
      "index": 209,
      "class": "bi bi-brightness-alt-low-fill"
    },
    {
      "index": 210,
      "class": "bi bi-brightness-alt-low"
    },
    {
      "index": 211,
      "class": "bi bi-brightness-high-fill"
    },
    {
      "index": 212,
      "class": "bi bi-brightness-high"
    },
    {
      "index": 213,
      "class": "bi bi-brightness-low-fill"
    },
    {
      "index": 214,
      "class": "bi bi-brightness-low"
    },
    {
      "index": 215,
      "class": "bi bi-broadcast-pin"
    },
    {
      "index": 216,
      "class": "bi bi-broadcast"
    },
    {
      "index": 217,
      "class": "bi bi-brush-fill"
    },
    {
      "index": 218,
      "class": "bi bi-brush"
    },
    {
      "index": 219,
      "class": "bi bi-bucket-fill"
    },
    {
      "index": 220,
      "class": "bi bi-bucket"
    },
    {
      "index": 221,
      "class": "bi bi-bug-fill"
    },
    {
      "index": 222,
      "class": "bi bi-bug"
    },
    {
      "index": 223,
      "class": "bi bi-building"
    },
    {
      "index": 224,
      "class": "bi bi-bullseye"
    },
    {
      "index": 225,
      "class": "bi bi-calculator-fill"
    },
    {
      "index": 226,
      "class": "bi bi-calculator"
    },
    {
      "index": 227,
      "class": "bi bi-calendar-check-fill"
    },
    {
      "index": 228,
      "class": "bi bi-calendar-check"
    },
    {
      "index": 229,
      "class": "bi bi-calendar-date-fill"
    },
    {
      "index": 230,
      "class": "bi bi-calendar-date"
    },
    {
      "index": 231,
      "class": "bi bi-calendar-day-fill"
    },
    {
      "index": 232,
      "class": "bi bi-calendar-day"
    },
    {
      "index": 233,
      "class": "bi bi-calendar-event-fill"
    },
    {
      "index": 234,
      "class": "bi bi-calendar-event"
    },
    {
      "index": 235,
      "class": "bi bi-calendar-fill"
    },
    {
      "index": 236,
      "class": "bi bi-calendar-minus-fill"
    },
    {
      "index": 237,
      "class": "bi bi-calendar-minus"
    },
    {
      "index": 238,
      "class": "bi bi-calendar-month-fill"
    },
    {
      "index": 239,
      "class": "bi bi-calendar-month"
    },
    {
      "index": 240,
      "class": "bi bi-calendar-plus-fill"
    },
    {
      "index": 241,
      "class": "bi bi-calendar-plus"
    },
    {
      "index": 242,
      "class": "bi bi-calendar-range-fill"
    },
    {
      "index": 243,
      "class": "bi bi-calendar-range"
    },
    {
      "index": 244,
      "class": "bi bi-calendar-week-fill"
    },
    {
      "index": 245,
      "class": "bi bi-calendar-week"
    },
    {
      "index": 246,
      "class": "bi bi-calendar-x-fill"
    },
    {
      "index": 247,
      "class": "bi bi-calendar-x"
    },
    {
      "index": 248,
      "class": "bi bi-calendar"
    },
    {
      "index": 249,
      "class": "bi bi-calendar2-check-fill"
    },
    {
      "index": 250,
      "class": "bi bi-calendar2-check"
    },
    {
      "index": 251,
      "class": "bi bi-calendar2-date-fill"
    },
    {
      "index": 252,
      "class": "bi bi-calendar2-date"
    },
    {
      "index": 253,
      "class": "bi bi-calendar2-day-fill"
    },
    {
      "index": 254,
      "class": "bi bi-calendar2-day"
    },
    {
      "index": 255,
      "class": "bi bi-calendar2-event-fill"
    },
    {
      "index": 256,
      "class": "bi bi-calendar2-event"
    },
    {
      "index": 257,
      "class": "bi bi-calendar2-fill"
    },
    {
      "index": 258,
      "class": "bi bi-calendar2-minus-fill"
    },
    {
      "index": 259,
      "class": "bi bi-calendar2-minus"
    },
    {
      "index": 260,
      "class": "bi bi-calendar2-month-fill"
    },
    {
      "index": 261,
      "class": "bi bi-calendar2-month"
    },
    {
      "index": 262,
      "class": "bi bi-calendar2-plus-fill"
    },
    {
      "index": 263,
      "class": "bi bi-calendar2-plus"
    },
    {
      "index": 264,
      "class": "bi bi-calendar2-range-fill"
    },
    {
      "index": 265,
      "class": "bi bi-calendar2-range"
    },
    {
      "index": 266,
      "class": "bi bi-calendar2-week-fill"
    },
    {
      "index": 267,
      "class": "bi bi-calendar2-week"
    },
    {
      "index": 268,
      "class": "bi bi-calendar2-x-fill"
    },
    {
      "index": 269,
      "class": "bi bi-calendar2-x"
    },
    {
      "index": 270,
      "class": "bi bi-calendar2"
    },
    {
      "index": 271,
      "class": "bi bi-calendar3-event-fill"
    },
    {
      "index": 272,
      "class": "bi bi-calendar3-event"
    },
    {
      "index": 273,
      "class": "bi bi-calendar3-fill"
    },
    {
      "index": 274,
      "class": "bi bi-calendar3-range-fill"
    },
    {
      "index": 275,
      "class": "bi bi-calendar3-range"
    },
    {
      "index": 276,
      "class": "bi bi-calendar3-week-fill"
    },
    {
      "index": 277,
      "class": "bi bi-calendar3-week"
    },
    {
      "index": 278,
      "class": "bi bi-calendar3"
    },
    {
      "index": 279,
      "class": "bi bi-calendar4-event"
    },
    {
      "index": 280,
      "class": "bi bi-calendar4-range"
    },
    {
      "index": 281,
      "class": "bi bi-calendar4-week"
    },
    {
      "index": 282,
      "class": "bi bi-calendar4"
    },
    {
      "index": 283,
      "class": "bi bi-camera-fill"
    },
    {
      "index": 284,
      "class": "bi bi-camera-reels-fill"
    },
    {
      "index": 285,
      "class": "bi bi-camera-reels"
    },
    {
      "index": 286,
      "class": "bi bi-camera-video-fill"
    },
    {
      "index": 287,
      "class": "bi bi-camera-video-off-fill"
    },
    {
      "index": 288,
      "class": "bi bi-camera-video-off"
    },
    {
      "index": 289,
      "class": "bi bi-camera-video"
    },
    {
      "index": 290,
      "class": "bi bi-camera"
    },
    {
      "index": 291,
      "class": "bi bi-camera2"
    },
    {
      "index": 292,
      "class": "bi bi-capslock-fill"
    },
    {
      "index": 293,
      "class": "bi bi-capslock"
    },
    {
      "index": 294,
      "class": "bi bi-card-checklist"
    },
    {
      "index": 295,
      "class": "bi bi-card-heading"
    },
    {
      "index": 296,
      "class": "bi bi-card-image"
    },
    {
      "index": 297,
      "class": "bi bi-card-list"
    },
    {
      "index": 298,
      "class": "bi bi-card-text"
    },
    {
      "index": 299,
      "class": "bi bi-caret-down-fill"
    },
    {
      "index": 300,
      "class": "bi bi-caret-down-square-fill"
    },
    {
      "index": 301,
      "class": "bi bi-caret-down-square"
    },
    {
      "index": 302,
      "class": "bi bi-caret-down"
    },
    {
      "index": 303,
      "class": "bi bi-caret-left-fill"
    },
    {
      "index": 304,
      "class": "bi bi-caret-left-square-fill"
    },
    {
      "index": 305,
      "class": "bi bi-caret-left-square"
    },
    {
      "index": 306,
      "class": "bi bi-caret-left"
    },
    {
      "index": 307,
      "class": "bi bi-caret-right-fill"
    },
    {
      "index": 308,
      "class": "bi bi-caret-right-square-fill"
    },
    {
      "index": 309,
      "class": "bi bi-caret-right-square"
    },
    {
      "index": 310,
      "class": "bi bi-caret-right"
    },
    {
      "index": 311,
      "class": "bi bi-caret-up-fill"
    },
    {
      "index": 312,
      "class": "bi bi-caret-up-square-fill"
    },
    {
      "index": 313,
      "class": "bi bi-caret-up-square"
    },
    {
      "index": 314,
      "class": "bi bi-caret-up"
    },
    {
      "index": 315,
      "class": "bi bi-cart-check-fill"
    },
    {
      "index": 316,
      "class": "bi bi-cart-check"
    },
    {
      "index": 317,
      "class": "bi bi-cart-dash-fill"
    },
    {
      "index": 318,
      "class": "bi bi-cart-dash"
    },
    {
      "index": 319,
      "class": "bi bi-cart-fill"
    },
    {
      "index": 320,
      "class": "bi bi-cart-plus-fill"
    },
    {
      "index": 321,
      "class": "bi bi-cart-plus"
    },
    {
      "index": 322,
      "class": "bi bi-cart-x-fill"
    },
    {
      "index": 323,
      "class": "bi bi-cart-x"
    },
    {
      "index": 324,
      "class": "bi bi-cart"
    },
    {
      "index": 325,
      "class": "bi bi-cart2"
    },
    {
      "index": 326,
      "class": "bi bi-cart3"
    },
    {
      "index": 327,
      "class": "bi bi-cart4"
    },
    {
      "index": 328,
      "class": "bi bi-cash-stack"
    },
    {
      "index": 329,
      "class": "bi bi-cash"
    },
    {
      "index": 330,
      "class": "bi bi-cast"
    },
    {
      "index": 331,
      "class": "bi bi-chat-dots-fill"
    },
    {
      "index": 332,
      "class": "bi bi-chat-dots"
    },
    {
      "index": 333,
      "class": "bi bi-chat-fill"
    },
    {
      "index": 334,
      "class": "bi bi-chat-left-dots-fill"
    },
    {
      "index": 335,
      "class": "bi bi-chat-left-dots"
    },
    {
      "index": 336,
      "class": "bi bi-chat-left-fill"
    },
    {
      "index": 337,
      "class": "bi bi-chat-left-quote-fill"
    },
    {
      "index": 338,
      "class": "bi bi-chat-left-quote"
    },
    {
      "index": 339,
      "class": "bi bi-chat-left-text-fill"
    },
    {
      "index": 340,
      "class": "bi bi-chat-left-text"
    },
    {
      "index": 341,
      "class": "bi bi-chat-left"
    },
    {
      "index": 342,
      "class": "bi bi-chat-quote-fill"
    },
    {
      "index": 343,
      "class": "bi bi-chat-quote"
    },
    {
      "index": 344,
      "class": "bi bi-chat-right-dots-fill"
    },
    {
      "index": 345,
      "class": "bi bi-chat-right-dots"
    },
    {
      "index": 346,
      "class": "bi bi-chat-right-fill"
    },
    {
      "index": 347,
      "class": "bi bi-chat-right-quote-fill"
    },
    {
      "index": 348,
      "class": "bi bi-chat-right-quote"
    },
    {
      "index": 349,
      "class": "bi bi-chat-right-text-fill"
    },
    {
      "index": 350,
      "class": "bi bi-chat-right-text"
    },
    {
      "index": 351,
      "class": "bi bi-chat-right"
    },
    {
      "index": 352,
      "class": "bi bi-chat-square-dots-fill"
    },
    {
      "index": 353,
      "class": "bi bi-chat-square-dots"
    },
    {
      "index": 354,
      "class": "bi bi-chat-square-fill"
    },
    {
      "index": 355,
      "class": "bi bi-chat-square-quote-fill"
    },
    {
      "index": 356,
      "class": "bi bi-chat-square-quote"
    },
    {
      "index": 357,
      "class": "bi bi-chat-square-text-fill"
    },
    {
      "index": 358,
      "class": "bi bi-chat-square-text"
    },
    {
      "index": 359,
      "class": "bi bi-chat-square"
    },
    {
      "index": 360,
      "class": "bi bi-chat-text-fill"
    },
    {
      "index": 361,
      "class": "bi bi-chat-text"
    },
    {
      "index": 362,
      "class": "bi bi-chat"
    },
    {
      "index": 363,
      "class": "bi bi-check-all"
    },
    {
      "index": 364,
      "class": "bi bi-check-circle-fill"
    },
    {
      "index": 365,
      "class": "bi bi-check-circle"
    },
    {
      "index": 366,
      "class": "bi bi-check-lg"
    },
    {
      "index": 367,
      "class": "bi bi-check-square-fill"
    },
    {
      "index": 368,
      "class": "bi bi-check-square"
    },
    {
      "index": 369,
      "class": "bi bi-check"
    },
    {
      "index": 370,
      "class": "bi bi-check2-all"
    },
    {
      "index": 371,
      "class": "bi bi-check2-circle"
    },
    {
      "index": 372,
      "class": "bi bi-check2-square"
    },
    {
      "index": 373,
      "class": "bi bi-check2"
    },
    {
      "index": 374,
      "class": "bi bi-chevron-bar-contract"
    },
    {
      "index": 375,
      "class": "bi bi-chevron-bar-down"
    },
    {
      "index": 376,
      "class": "bi bi-chevron-bar-expand"
    },
    {
      "index": 377,
      "class": "bi bi-chevron-bar-left"
    },
    {
      "index": 378,
      "class": "bi bi-chevron-bar-right"
    },
    {
      "index": 379,
      "class": "bi bi-chevron-bar-up"
    },
    {
      "index": 380,
      "class": "bi bi-chevron-compact-down"
    },
    {
      "index": 381,
      "class": "bi bi-chevron-compact-left"
    },
    {
      "index": 382,
      "class": "bi bi-chevron-compact-right"
    },
    {
      "index": 383,
      "class": "bi bi-chevron-compact-up"
    },
    {
      "index": 384,
      "class": "bi bi-chevron-contract"
    },
    {
      "index": 385,
      "class": "bi bi-chevron-double-down"
    },
    {
      "index": 386,
      "class": "bi bi-chevron-double-left"
    },
    {
      "index": 387,
      "class": "bi bi-chevron-double-right"
    },
    {
      "index": 388,
      "class": "bi bi-chevron-double-up"
    },
    {
      "index": 389,
      "class": "bi bi-chevron-down"
    },
    {
      "index": 390,
      "class": "bi bi-chevron-expand"
    },
    {
      "index": 391,
      "class": "bi bi-chevron-left"
    },
    {
      "index": 392,
      "class": "bi bi-chevron-right"
    },
    {
      "index": 393,
      "class": "bi bi-chevron-up"
    },
    {
      "index": 394,
      "class": "bi bi-circle-fill"
    },
    {
      "index": 395,
      "class": "bi bi-circle-half"
    },
    {
      "index": 396,
      "class": "bi bi-circle-square"
    },
    {
      "index": 397,
      "class": "bi bi-circle"
    },
    {
      "index": 398,
      "class": "bi bi-clipboard-check"
    },
    {
      "index": 399,
      "class": "bi bi-clipboard-data"
    },
    {
      "index": 400,
      "class": "bi bi-clipboard-minus"
    },
    {
      "index": 401,
      "class": "bi bi-clipboard-plus"
    },
    {
      "index": 402,
      "class": "bi bi-clipboard-x"
    },
    {
      "index": 403,
      "class": "bi bi-clipboard"
    },
    {
      "index": 404,
      "class": "bi bi-clock-fill"
    },
    {
      "index": 405,
      "class": "bi bi-clock-history"
    },
    {
      "index": 406,
      "class": "bi bi-clock"
    },
    {
      "index": 407,
      "class": "bi bi-cloud-arrow-down-fill"
    },
    {
      "index": 408,
      "class": "bi bi-cloud-arrow-down"
    },
    {
      "index": 409,
      "class": "bi bi-cloud-arrow-up-fill"
    },
    {
      "index": 410,
      "class": "bi bi-cloud-arrow-up"
    },
    {
      "index": 411,
      "class": "bi bi-cloud-check-fill"
    },
    {
      "index": 412,
      "class": "bi bi-cloud-check"
    },
    {
      "index": 413,
      "class": "bi bi-cloud-download-fill"
    },
    {
      "index": 414,
      "class": "bi bi-cloud-download"
    },
    {
      "index": 415,
      "class": "bi bi-cloud-drizzle-fill"
    },
    {
      "index": 416,
      "class": "bi bi-cloud-drizzle"
    },
    {
      "index": 417,
      "class": "bi bi-cloud-fill"
    },
    {
      "index": 418,
      "class": "bi bi-cloud-fog-fill"
    },
    {
      "index": 419,
      "class": "bi bi-cloud-fog"
    },
    {
      "index": 420,
      "class": "bi bi-cloud-fog2-fill"
    },
    {
      "index": 421,
      "class": "bi bi-cloud-fog2"
    },
    {
      "index": 422,
      "class": "bi bi-cloud-hail-fill"
    },
    {
      "index": 423,
      "class": "bi bi-cloud-hail"
    },
    {
      "index": 424,
      "class": "bi bi-cloud-haze-fill"
    },
    {
      "index": 425,
      "class": "bi bi-cloud-haze"
    },
    {
      "index": 426,
      "class": "bi bi-cloud-haze2-fill"
    },
    {
      "index": 427,
      "class": "bi bi-cloud-haze2"
    },
    {
      "index": 428,
      "class": "bi bi-cloud-lightning-fill"
    },
    {
      "index": 429,
      "class": "bi bi-cloud-lightning-rain-fill"
    },
    {
      "index": 430,
      "class": "bi bi-cloud-lightning-rain"
    },
    {
      "index": 431,
      "class": "bi bi-cloud-lightning"
    },
    {
      "index": 432,
      "class": "bi bi-cloud-minus-fill"
    },
    {
      "index": 433,
      "class": "bi bi-cloud-minus"
    },
    {
      "index": 434,
      "class": "bi bi-cloud-moon-fill"
    },
    {
      "index": 435,
      "class": "bi bi-cloud-moon"
    },
    {
      "index": 436,
      "class": "bi bi-cloud-plus-fill"
    },
    {
      "index": 437,
      "class": "bi bi-cloud-plus"
    },
    {
      "index": 438,
      "class": "bi bi-cloud-rain-fill"
    },
    {
      "index": 439,
      "class": "bi bi-cloud-rain-heavy-fill"
    },
    {
      "index": 440,
      "class": "bi bi-cloud-rain-heavy"
    },
    {
      "index": 441,
      "class": "bi bi-cloud-rain"
    },
    {
      "index": 442,
      "class": "bi bi-cloud-slash-fill"
    },
    {
      "index": 443,
      "class": "bi bi-cloud-slash"
    },
    {
      "index": 444,
      "class": "bi bi-cloud-sleet-fill"
    },
    {
      "index": 445,
      "class": "bi bi-cloud-sleet"
    },
    {
      "index": 446,
      "class": "bi bi-cloud-snow-fill"
    },
    {
      "index": 447,
      "class": "bi bi-cloud-snow"
    },
    {
      "index": 448,
      "class": "bi bi-cloud-sun-fill"
    },
    {
      "index": 449,
      "class": "bi bi-cloud-sun"
    },
    {
      "index": 450,
      "class": "bi bi-cloud-upload-fill"
    },
    {
      "index": 451,
      "class": "bi bi-cloud-upload"
    },
    {
      "index": 452,
      "class": "bi bi-cloud"
    },
    {
      "index": 453,
      "class": "bi bi-clouds-fill"
    },
    {
      "index": 454,
      "class": "bi bi-clouds"
    },
    {
      "index": 455,
      "class": "bi bi-cloudy-fill"
    },
    {
      "index": 456,
      "class": "bi bi-cloudy"
    },
    {
      "index": 457,
      "class": "bi bi-code-slash"
    },
    {
      "index": 458,
      "class": "bi bi-code-square"
    },
    {
      "index": 459,
      "class": "bi bi-code"
    },
    {
      "index": 460,
      "class": "bi bi-collection-fill"
    },
    {
      "index": 461,
      "class": "bi bi-collection-play-fill"
    },
    {
      "index": 462,
      "class": "bi bi-collection-play"
    },
    {
      "index": 463,
      "class": "bi bi-collection"
    },
    {
      "index": 464,
      "class": "bi bi-columns-gap"
    },
    {
      "index": 465,
      "class": "bi bi-columns"
    },
    {
      "index": 466,
      "class": "bi bi-command"
    },
    {
      "index": 467,
      "class": "bi bi-compass-fill"
    },
    {
      "index": 468,
      "class": "bi bi-compass"
    },
    {
      "index": 469,
      "class": "bi bi-cone-striped"
    },
    {
      "index": 470,
      "class": "bi bi-cone"
    },
    {
      "index": 471,
      "class": "bi bi-controller"
    },
    {
      "index": 472,
      "class": "bi bi-cpu-fill"
    },
    {
      "index": 473,
      "class": "bi bi-cpu"
    },
    {
      "index": 474,
      "class": "bi bi-credit-card-2-back-fill"
    },
    {
      "index": 475,
      "class": "bi bi-credit-card-2-back"
    },
    {
      "index": 476,
      "class": "bi bi-credit-card-2-front-fill"
    },
    {
      "index": 477,
      "class": "bi bi-credit-card-2-front"
    },
    {
      "index": 478,
      "class": "bi bi-credit-card-fill"
    },
    {
      "index": 479,
      "class": "bi bi-credit-card"
    },
    {
      "index": 480,
      "class": "bi bi-crop"
    },
    {
      "index": 481,
      "class": "bi bi-cup-straw"
    },
    {
      "index": 482,
      "class": "bi bi-cup"
    },
    {
      "index": 483,
      "class": "bi bi-cursor-fill"
    },
    {
      "index": 484,
      "class": "bi bi-cursor-text"
    },
    {
      "index": 485,
      "class": "bi bi-cursor"
    },
    {
      "index": 486,
      "class": "bi bi-dash-circle-dotted"
    },
    {
      "index": 487,
      "class": "bi bi-dash-circle-fill"
    },
    {
      "index": 488,
      "class": "bi bi-dash-circle"
    },
    {
      "index": 489,
      "class": "bi bi-dash-lg"
    },
    {
      "index": 490,
      "class": "bi bi-dash-square-dotted"
    },
    {
      "index": 491,
      "class": "bi bi-dash-square-fill"
    },
    {
      "index": 492,
      "class": "bi bi-dash-square"
    },
    {
      "index": 493,
      "class": "bi bi-dash"
    },
    {
      "index": 494,
      "class": "bi bi-diagram-2-fill"
    },
    {
      "index": 495,
      "class": "bi bi-diagram-2"
    },
    {
      "index": 496,
      "class": "bi bi-diagram-3-fill"
    },
    {
      "index": 497,
      "class": "bi bi-diagram-3"
    },
    {
      "index": 498,
      "class": "bi bi-diamond-fill"
    },
    {
      "index": 499,
      "class": "bi bi-diamond-half"
    },
    {
      "index": 500,
      "class": "bi bi-diamond"
    },
    {
      "index": 501,
      "class": "bi bi-dice-1-fill"
    },
    {
      "index": 502,
      "class": "bi bi-dice-1"
    },
    {
      "index": 503,
      "class": "bi bi-dice-2-fill"
    },
    {
      "index": 504,
      "class": "bi bi-dice-2"
    },
    {
      "index": 505,
      "class": "bi bi-dice-3-fill"
    },
    {
      "index": 506,
      "class": "bi bi-dice-3"
    },
    {
      "index": 507,
      "class": "bi bi-dice-4-fill"
    },
    {
      "index": 508,
      "class": "bi bi-dice-4"
    },
    {
      "index": 509,
      "class": "bi bi-dice-5-fill"
    },
    {
      "index": 510,
      "class": "bi bi-dice-5"
    },
    {
      "index": 511,
      "class": "bi bi-dice-6-fill"
    },
    {
      "index": 512,
      "class": "bi bi-dice-6"
    },
    {
      "index": 513,
      "class": "bi bi-disc-fill"
    },
    {
      "index": 514,
      "class": "bi bi-disc"
    },
    {
      "index": 515,
      "class": "bi bi-discord"
    },
    {
      "index": 516,
      "class": "bi bi-display-fill"
    },
    {
      "index": 517,
      "class": "bi bi-display"
    },
    {
      "index": 518,
      "class": "bi bi-distribute-horizontal"
    },
    {
      "index": 519,
      "class": "bi bi-distribute-vertical"
    },
    {
      "index": 520,
      "class": "bi bi-door-closed-fill"
    },
    {
      "index": 521,
      "class": "bi bi-door-closed"
    },
    {
      "index": 522,
      "class": "bi bi-door-open-fill"
    },
    {
      "index": 523,
      "class": "bi bi-door-open"
    },
    {
      "index": 524,
      "class": "bi bi-dot"
    },
    {
      "index": 525,
      "class": "bi bi-download"
    },
    {
      "index": 526,
      "class": "bi bi-droplet-fill"
    },
    {
      "index": 527,
      "class": "bi bi-droplet-half"
    },
    {
      "index": 528,
      "class": "bi bi-droplet"
    },
    {
      "index": 529,
      "class": "bi bi-earbuds"
    },
    {
      "index": 530,
      "class": "bi bi-easel-fill"
    },
    {
      "index": 531,
      "class": "bi bi-easel"
    },
    {
      "index": 532,
      "class": "bi bi-egg-fill"
    },
    {
      "index": 533,
      "class": "bi bi-egg-fried"
    },
    {
      "index": 534,
      "class": "bi bi-egg"
    },
    {
      "index": 535,
      "class": "bi bi-eject-fill"
    },
    {
      "index": 536,
      "class": "bi bi-eject"
    },
    {
      "index": 537,
      "class": "bi bi-emoji-angry-fill"
    },
    {
      "index": 538,
      "class": "bi bi-emoji-angry"
    },
    {
      "index": 539,
      "class": "bi bi-emoji-dizzy-fill"
    },
    {
      "index": 540,
      "class": "bi bi-emoji-dizzy"
    },
    {
      "index": 541,
      "class": "bi bi-emoji-expressionless-fill"
    },
    {
      "index": 542,
      "class": "bi bi-emoji-expressionless"
    },
    {
      "index": 543,
      "class": "bi bi-emoji-frown-fill"
    },
    {
      "index": 544,
      "class": "bi bi-emoji-frown"
    },
    {
      "index": 545,
      "class": "bi bi-emoji-heart-eyes-fill"
    },
    {
      "index": 546,
      "class": "bi bi-emoji-heart-eyes"
    },
    {
      "index": 547,
      "class": "bi bi-emoji-laughing-fill"
    },
    {
      "index": 548,
      "class": "bi bi-emoji-laughing"
    },
    {
      "index": 549,
      "class": "bi bi-emoji-neutral-fill"
    },
    {
      "index": 550,
      "class": "bi bi-emoji-neutral"
    },
    {
      "index": 551,
      "class": "bi bi-emoji-smile-fill"
    },
    {
      "index": 552,
      "class": "bi bi-emoji-smile-upside-down-fill"
    },
    {
      "index": 553,
      "class": "bi bi-emoji-smile-upside-down"
    },
    {
      "index": 554,
      "class": "bi bi-emoji-smile"
    },
    {
      "index": 555,
      "class": "bi bi-emoji-sunglasses-fill"
    },
    {
      "index": 556,
      "class": "bi bi-emoji-sunglasses"
    },
    {
      "index": 557,
      "class": "bi bi-emoji-wink-fill"
    },
    {
      "index": 558,
      "class": "bi bi-emoji-wink"
    },
    {
      "index": 559,
      "class": "bi bi-envelope-fill"
    },
    {
      "index": 560,
      "class": "bi bi-envelope-open-fill"
    },
    {
      "index": 561,
      "class": "bi bi-envelope-open"
    },
    {
      "index": 562,
      "class": "bi bi-envelope"
    },
    {
      "index": 563,
      "class": "bi bi-eraser-fill"
    },
    {
      "index": 564,
      "class": "bi bi-eraser"
    },
    {
      "index": 565,
      "class": "bi bi-exclamation-circle-fill"
    },
    {
      "index": 566,
      "class": "bi bi-exclamation-circle"
    },
    {
      "index": 567,
      "class": "bi bi-exclamation-diamond-fill"
    },
    {
      "index": 568,
      "class": "bi bi-exclamation-diamond"
    },
    {
      "index": 569,
      "class": "bi bi-exclamation-octagon-fill"
    },
    {
      "index": 570,
      "class": "bi bi-exclamation-octagon"
    },
    {
      "index": 571,
      "class": "bi bi-exclamation-square-fill"
    },
    {
      "index": 572,
      "class": "bi bi-exclamation-square"
    },
    {
      "index": 573,
      "class": "bi bi-exclamation-triangle-fill"
    },
    {
      "index": 574,
      "class": "bi bi-exclamation-triangle"
    },
    {
      "index": 575,
      "class": "bi bi-exclamation"
    },
    {
      "index": 576,
      "class": "bi bi-exclude"
    },
    {
      "index": 577,
      "class": "bi bi-eye-fill"
    },
    {
      "index": 578,
      "class": "bi bi-eye-slash-fill"
    },
    {
      "index": 579,
      "class": "bi bi-eye-slash"
    },
    {
      "index": 580,
      "class": "bi bi-eye"
    },
    {
      "index": 581,
      "class": "bi bi-eyedropper"
    },
    {
      "index": 582,
      "class": "bi bi-eyeglasses"
    },
    {
      "index": 583,
      "class": "bi bi-facebook"
    },
    {
      "index": 584,
      "class": "bi bi-file-arrow-down-fill"
    },
    {
      "index": 585,
      "class": "bi bi-file-arrow-down"
    },
    {
      "index": 586,
      "class": "bi bi-file-arrow-up-fill"
    },
    {
      "index": 587,
      "class": "bi bi-file-arrow-up"
    },
    {
      "index": 588,
      "class": "bi bi-file-bar-graph-fill"
    },
    {
      "index": 589,
      "class": "bi bi-file-bar-graph"
    },
    {
      "index": 590,
      "class": "bi bi-file-binary-fill"
    },
    {
      "index": 591,
      "class": "bi bi-file-binary"
    },
    {
      "index": 592,
      "class": "bi bi-file-break-fill"
    },
    {
      "index": 593,
      "class": "bi bi-file-break"
    },
    {
      "index": 594,
      "class": "bi bi-file-check-fill"
    },
    {
      "index": 595,
      "class": "bi bi-file-check"
    },
    {
      "index": 596,
      "class": "bi bi-file-code-fill"
    },
    {
      "index": 597,
      "class": "bi bi-file-code"
    },
    {
      "index": 598,
      "class": "bi bi-file-diff-fill"
    },
    {
      "index": 599,
      "class": "bi bi-file-diff"
    },
    {
      "index": 600,
      "class": "bi bi-file-earmark-arrow-down-fill"
    },
    {
      "index": 601,
      "class": "bi bi-file-earmark-arrow-down"
    },
    {
      "index": 602,
      "class": "bi bi-file-earmark-arrow-up-fill"
    },
    {
      "index": 603,
      "class": "bi bi-file-earmark-arrow-up"
    },
    {
      "index": 604,
      "class": "bi bi-file-earmark-bar-graph-fill"
    },
    {
      "index": 605,
      "class": "bi bi-file-earmark-bar-graph"
    },
    {
      "index": 606,
      "class": "bi bi-file-earmark-binary-fill"
    },
    {
      "index": 607,
      "class": "bi bi-file-earmark-binary"
    },
    {
      "index": 608,
      "class": "bi bi-file-earmark-break-fill"
    },
    {
      "index": 609,
      "class": "bi bi-file-earmark-break"
    },
    {
      "index": 610,
      "class": "bi bi-file-earmark-check-fill"
    },
    {
      "index": 611,
      "class": "bi bi-file-earmark-check"
    },
    {
      "index": 612,
      "class": "bi bi-file-earmark-code-fill"
    },
    {
      "index": 613,
      "class": "bi bi-file-earmark-code"
    },
    {
      "index": 614,
      "class": "bi bi-file-earmark-diff-fill"
    },
    {
      "index": 615,
      "class": "bi bi-file-earmark-diff"
    },
    {
      "index": 616,
      "class": "bi bi-file-earmark-fill"
    },
    {
      "index": 617,
      "class": "bi bi-file-earmark"
    },
    {
      "index": 618,
      "class": "bi bi-file-earmark-excel-fill"
    },
    {
      "index": 619,
      "class": "bi bi-file-earmark-excel"
    },
    {
      "index": 620,
      "class": "bi bi-file-earmark-fill"
    },
    {
      "index": 621,
      "class": "bi bi-file-earmark-font-fill"
    },
    {
      "index": 622,
      "class": "bi bi-file-earmark-font"
    },
    {
      "index": 623,
      "class": "bi bi-file-earmark-image-fill"
    },
    {
      "index": 624,
      "class": "bi bi-file-earmark-image"
    },
    {
      "index": 625,
      "class": "bi bi-file-earmark-lock-fill"
    },
    {
      "index": 626,
      "class": "bi bi-file-earmark-lock"
    },
    {
      "index": 627,
      "class": "bi bi-file-earmark-lock2-fill"
    },
    {
      "index": 628,
      "class": "bi bi-file-earmark-lock2"
    },
    {
      "index": 629,
      "class": "bi bi-file-earmark-medical-fill"
    },
    {
      "index": 630,
      "class": "bi bi-file-earmark-medical"
    },
    {
      "index": 631,
      "class": "bi bi-file-earmark-minus-fill"
    },
    {
      "index": 632,
      "class": "bi bi-file-earmark-minus"
    },
    {
      "index": 633,
      "class": "bi bi-file-earmark-music-fill"
    },
    {
      "index": 634,
      "class": "bi bi-file-earmark-music"
    },
    {
      "index": 635,
      "class": "bi bi-file-earmark-person-fill"
    },
    {
      "index": 636,
      "class": "bi bi-file-earmark-person"
    },
    {
      "index": 637,
      "class": "bi bi-file-earmark-play-fill"
    },
    {
      "index": 638,
      "class": "bi bi-file-earmark-play"
    },
    {
      "index": 639,
      "class": "bi bi-file-earmark-plus-fill"
    },
    {
      "index": 640,
      "class": "bi bi-file-earmark-plus"
    },
    {
      "index": 641,
      "class": "bi bi-file-earmark-post-fill"
    },
    {
      "index": 642,
      "class": "bi bi-file-earmark-post"
    },
    {
      "index": 643,
      "class": "bi bi-file-earmark-ppt-fill"
    },
    {
      "index": 644,
      "class": "bi bi-file-earmark-ppt"
    },
    {
      "index": 645,
      "class": "bi bi-file-earmark-richtext-fill"
    },
    {
      "index": 646,
      "class": "bi bi-file-earmark-richtext"
    },
    {
      "index": 647,
      "class": "bi bi-file-earmark-ruled-fill"
    },
    {
      "index": 648,
      "class": "bi bi-file-earmark-ruled"
    },
    {
      "index": 649,
      "class": "bi bi-file-earmark-slides-fill"
    },
    {
      "index": 650,
      "class": "bi bi-file-earmark-slides"
    },
    {
      "index": 651,
      "class": "bi bi-file-earmark-spreadsheet-fill"
    },
    {
      "index": 652,
      "class": "bi bi-file-earmark-spreadsheet"
    },
    {
      "index": 653,
      "class": "bi bi-file-earmark-text-fill"
    },
    {
      "index": 654,
      "class": "bi bi-file-earmark-text"
    },
    {
      "index": 655,
      "class": "bi bi-file-earmark-word-fill"
    },
    {
      "index": 656,
      "class": "bi bi-file-earmark-word"
    },
    {
      "index": 657,
      "class": "bi bi-file-earmark-x-fill"
    },
    {
      "index": 658,
      "class": "bi bi-file-earmark-x"
    },
    {
      "index": 659,
      "class": "bi bi-file-earmark"
    },
    {
      "index": 660,
      "class": "bi bi-file-excel-fill"
    },
    {
      "index": 661,
      "class": "bi bi-file-excel"
    },
    {
      "index": 662,
      "class": "bi bi-file-fill"
    },
    {
      "index": 663,
      "class": "bi bi-file-font-fill"
    },
    {
      "index": 664,
      "class": "bi bi-file-font"
    },
    {
      "index": 665,
      "class": "bi bi-file-image-fill"
    },
    {
      "index": 666,
      "class": "bi bi-file-image"
    },
    {
      "index": 667,
      "class": "bi bi-file-lock-fill"
    },
    {
      "index": 668,
      "class": "bi bi-file-lock"
    },
    {
      "index": 669,
      "class": "bi bi-file-lock2-fill"
    },
    {
      "index": 670,
      "class": "bi bi-file-lock2"
    },
    {
      "index": 671,
      "class": "bi bi-file-medical-fill"
    },
    {
      "index": 672,
      "class": "bi bi-file-medical"
    },
    {
      "index": 673,
      "class": "bi bi-file-minus-fill"
    },
    {
      "index": 674,
      "class": "bi bi-file-minus"
    },
    {
      "index": 675,
      "class": "bi bi-file-music-fill"
    },
    {
      "index": 676,
      "class": "bi bi-file-music"
    },
    {
      "index": 677,
      "class": "bi bi-file-person-fill"
    },
    {
      "index": 678,
      "class": "bi bi-file-person"
    },
    {
      "index": 679,
      "class": "bi bi-file-play-fill"
    },
    {
      "index": 680,
      "class": "bi bi-file-play"
    },
    {
      "index": 681,
      "class": "bi bi-file-plus-fill"
    },
    {
      "index": 682,
      "class": "bi bi-file-plus"
    },
    {
      "index": 683,
      "class": "bi bi-file-post-fill"
    },
    {
      "index": 684,
      "class": "bi bi-file-post"
    },
    {
      "index": 685,
      "class": "bi bi-file-ppt-fill"
    },
    {
      "index": 686,
      "class": "bi bi-file-ppt"
    },
    {
      "index": 687,
      "class": "bi bi-file-richtext-fill"
    },
    {
      "index": 688,
      "class": "bi bi-file-richtext"
    },
    {
      "index": 689,
      "class": "bi bi-file-ruled-fill"
    },
    {
      "index": 690,
      "class": "bi bi-file-ruled"
    },
    {
      "index": 691,
      "class": "bi bi-file-slides-fill"
    },
    {
      "index": 692,
      "class": "bi bi-file-slides"
    },
    {
      "index": 693,
      "class": "bi bi-file-spreadsheet-fill"
    },
    {
      "index": 694,
      "class": "bi bi-file-spreadsheet"
    },
    {
      "index": 695,
      "class": "bi bi-file-text-fill"
    },
    {
      "index": 696,
      "class": "bi bi-file-text"
    },
    {
      "index": 697,
      "class": "bi bi-file-word-fill"
    },
    {
      "index": 698,
      "class": "bi bi-file-word"
    },
    {
      "index": 699,
      "class": "bi bi-file-x-fill"
    },
    {
      "index": 700,
      "class": "bi bi-file-x"
    },
    {
      "index": 701,
      "class": "bi bi-file-zip-fill"
    },
    {
      "index": 702,
      "class": "bi bi-file-zip"
    },
    {
      "index": 703,
      "class": "bi bi-file"
    },
    {
      "index": 704,
      "class": "bi bi-files-alt"
    },
    {
      "index": 705,
      "class": "bi bi-files"
    },
    {
      "index": 706,
      "class": "bi bi-film"
    },
    {
      "index": 707,
      "class": "bi bi-filter-circle-fill"
    },
    {
      "index": 708,
      "class": "bi bi-filter-circle"
    },
    {
      "index": 709,
      "class": "bi bi-filter-left"
    },
    {
      "index": 710,
      "class": "bi bi-filter-right"
    },
    {
      "index": 711,
      "class": "bi bi-filter-square-fill"
    },
    {
      "index": 712,
      "class": "bi bi-filter-square"
    },
    {
      "index": 713,
      "class": "bi bi-filter"
    },
    {
      "index": 714,
      "class": "bi bi-flag-fill"
    },
    {
      "index": 715,
      "class": "bi bi-flag"
    },
    {
      "index": 716,
      "class": "bi bi-flower1"
    },
    {
      "index": 717,
      "class": "bi bi-flower2"
    },
    {
      "index": 718,
      "class": "bi bi-flower3"
    },
    {
      "index": 719,
      "class": "bi bi-folder-check"
    },
    {
      "index": 720,
      "class": "bi bi-folder-fill"
    },
    {
      "index": 721,
      "class": "bi bi-folder-minus"
    },
    {
      "index": 722,
      "class": "bi bi-folder-plus"
    },
    {
      "index": 723,
      "class": "bi bi-folder-symlink-fill"
    },
    {
      "index": 724,
      "class": "bi bi-folder-symlink"
    },
    {
      "index": 725,
      "class": "bi bi-folder-x"
    },
    {
      "index": 726,
      "class": "bi bi-folder"
    },
    {
      "index": 727,
      "class": "bi bi-folder2-open"
    },
    {
      "index": 728,
      "class": "bi bi-folder2"
    },
    {
      "index": 729,
      "class": "bi bi-fonts"
    },
    {
      "index": 730,
      "class": "bi bi-forward-fill"
    },
    {
      "index": 731,
      "class": "bi bi-forward"
    },
    {
      "index": 732,
      "class": "bi bi-front"
    },
    {
      "index": 733,
      "class": "bi bi-fullscreen-exit"
    },
    {
      "index": 734,
      "class": "bi bi-fullscreen"
    },
    {
      "index": 735,
      "class": "bi bi-funnel-fill"
    },
    {
      "index": 736,
      "class": "bi bi-funnel"
    },
    {
      "index": 737,
      "class": "bi bi-gear-fill"
    },
    {
      "index": 738,
      "class": "bi bi-gear-wide-connected"
    },
    {
      "index": 739,
      "class": "bi bi-gear-wide"
    },
    {
      "index": 740,
      "class": "bi bi-gear"
    },
    {
      "index": 741,
      "class": "bi bi-gem"
    },
    {
      "index": 742,
      "class": "bi bi-gender-ambiguous"
    },
    {
      "index": 743,
      "class": "bi bi-gender-female"
    },
    {
      "index": 744,
      "class": "bi bi-gender-male"
    },
    {
      "index": 745,
      "class": "bi bi-gender-trans"
    },
    {
      "index": 746,
      "class": "bi bi-geo-alt-fill"
    },
    {
      "index": 747,
      "class": "bi bi-geo-alt"
    },
    {
      "index": 748,
      "class": "bi bi-geo-fill"
    },
    {
      "index": 749,
      "class": "bi bi-geo"
    },
    {
      "index": 750,
      "class": "bi bi-gift-fill"
    },
    {
      "index": 751,
      "class": "bi bi-gift"
    },
    {
      "index": 752,
      "class": "bi bi-github"
    },
    {
      "index": 753,
      "class": "bi bi-globe"
    },
    {
      "index": 754,
      "class": "bi bi-globe2"
    },
    {
      "index": 755,
      "class": "bi bi-google"
    },
    {
      "index": 756,
      "class": "bi bi-graph-down"
    },
    {
      "index": 757,
      "class": "bi bi-graph-up"
    },
    {
      "index": 758,
      "class": "bi bi-grid-1x2-fill"
    },
    {
      "index": 759,
      "class": "bi bi-grid-1x2"
    },
    {
      "index": 760,
      "class": "bi bi-grid-3x2-gap-fill"
    },
    {
      "index": 761,
      "class": "bi bi-grid-3x2-gap"
    },
    {
      "index": 762,
      "class": "bi bi-grid-3x2"
    },
    {
      "index": 763,
      "class": "bi bi-grid-3x3-gap-fill"
    },
    {
      "index": 764,
      "class": "bi bi-grid-3x3-gap"
    },
    {
      "index": 765,
      "class": "bi bi-grid-3x3"
    },
    {
      "index": 766,
      "class": "bi bi-grid-fill"
    },
    {
      "index": 767,
      "class": "bi bi-grid"
    },
    {
      "index": 768,
      "class": "bi bi-grip-horizontal"
    },
    {
      "index": 769,
      "class": "bi bi-grip-vertical"
    },
    {
      "index": 770,
      "class": "bi bi-hammer"
    },
    {
      "index": 771,
      "class": "bi bi-hand-index-fill"
    },
    {
      "index": 772,
      "class": "bi bi-hand-index-thumb-fill"
    },
    {
      "index": 773,
      "class": "bi bi-hand-index-thumb"
    },
    {
      "index": 774,
      "class": "bi bi-hand-index"
    },
    {
      "index": 775,
      "class": "bi bi-hand-thumbs-down-fill"
    },
    {
      "index": 776,
      "class": "bi bi-hand-thumbs-down"
    },
    {
      "index": 777,
      "class": "bi bi-hand-thumbs-up-fill"
    },
    {
      "index": 778,
      "class": "bi bi-hand-thumbs-up"
    },
    {
      "index": 779,
      "class": "bi bi-handbag-fill"
    },
    {
      "index": 780,
      "class": "bi bi-handbag"
    },
    {
      "index": 781,
      "class": "bi bi-hash"
    },
    {
      "index": 782,
      "class": "bi bi-hdd-fill"
    },
    {
      "index": 783,
      "class": "bi bi-hdd-network-fill"
    },
    {
      "index": 784,
      "class": "bi bi-hdd-network"
    },
    {
      "index": 785,
      "class": "bi bi-hdd-rack-fill"
    },
    {
      "index": 786,
      "class": "bi bi-hdd-rack"
    },
    {
      "index": 787,
      "class": "bi bi-hdd-stack-fill"
    },
    {
      "index": 788,
      "class": "bi bi-hdd-stack"
    },
    {
      "index": 789,
      "class": "bi bi-hdd"
    },
    {
      "index": 790,
      "class": "bi bi-headphones"
    },
    {
      "index": 791,
      "class": "bi bi-headset-vr"
    },
    {
      "index": 792,
      "class": "bi bi-headset"
    },
    {
      "index": 793,
      "class": "bi bi-heart-fill"
    },
    {
      "index": 794,
      "class": "bi bi-heart-half"
    },
    {
      "index": 795,
      "class": "bi bi-heart"
    },
    {
      "index": 796,
      "class": "bi bi-heptagon-fill"
    },
    {
      "index": 797,
      "class": "bi bi-heptagon-half"
    },
    {
      "index": 798,
      "class": "bi bi-heptagon"
    },
    {
      "index": 799,
      "class": "bi bi-hexagon-fill"
    },
    {
      "index": 800,
      "class": "bi bi-hexagon-half"
    },
    {
      "index": 801,
      "class": "bi bi-hexagon"
    },
    {
      "index": 802,
      "class": "bi bi-hourglass-bottom"
    },
    {
      "index": 803,
      "class": "bi bi-hourglass-split"
    },
    {
      "index": 804,
      "class": "bi bi-hourglass-top"
    },
    {
      "index": 805,
      "class": "bi bi-hourglass"
    },
    {
      "index": 806,
      "class": "bi bi-house-door-fill"
    },
    {
      "index": 807,
      "class": "bi bi-house-door"
    },
    {
      "index": 808,
      "class": "bi bi-house-fill"
    },
    {
      "index": 809,
      "class": "bi bi-house"
    },
    {
      "index": 810,
      "class": "bi bi-hr"
    },
    {
      "index": 811,
      "class": "bi bi-hurricane"
    },
    {
      "index": 812,
      "class": "bi bi-image-alt"
    },
    {
      "index": 813,
      "class": "bi bi-image-fill"
    },
    {
      "index": 814,
      "class": "bi bi-image"
    },
    {
      "index": 815,
      "class": "bi bi-images"
    },
    {
      "index": 816,
      "class": "bi bi-inbox-fill"
    },
    {
      "index": 817,
      "class": "bi bi-inbox"
    },
    {
      "index": 818,
      "class": "bi bi-inboxes-fill"
    },
    {
      "index": 819,
      "class": "bi bi-inboxes"
    },
    {
      "index": 820,
      "class": "bi bi-info-circle-fill"
    },
    {
      "index": 821,
      "class": "bi bi-info-circle"
    },
    {
      "index": 822,
      "class": "bi bi-info-lg"
    },
    {
      "index": 823,
      "class": "bi bi-info-square-fill"
    },
    {
      "index": 824,
      "class": "bi bi-info-square"
    },
    {
      "index": 825,
      "class": "bi bi-info"
    },
    {
      "index": 826,
      "class": "bi bi-input-cursor-text"
    },
    {
      "index": 827,
      "class": "bi bi-input-cursor"
    },
    {
      "index": 828,
      "class": "bi bi-instagram"
    },
    {
      "index": 829,
      "class": "bi bi-intersect"
    },
    {
      "index": 830,
      "class": "bi bi-journal-album"
    },
    {
      "index": 831,
      "class": "bi bi-journal-arrow-down"
    },
    {
      "index": 832,
      "class": "bi bi-journal-arrow-up"
    },
    {
      "index": 833,
      "class": "bi bi-journal-bookmark-fill"
    },
    {
      "index": 834,
      "class": "bi bi-journal-bookmark"
    },
    {
      "index": 835,
      "class": "bi bi-journal-check"
    },
    {
      "index": 836,
      "class": "bi bi-journal-code"
    },
    {
      "index": 837,
      "class": "bi bi-journal-medical"
    },
    {
      "index": 838,
      "class": "bi bi-journal-minus"
    },
    {
      "index": 839,
      "class": "bi bi-journal-plus"
    },
    {
      "index": 840,
      "class": "bi bi-journal-richtext"
    },
    {
      "index": 841,
      "class": "bi bi-journal-text"
    },
    {
      "index": 842,
      "class": "bi bi-journal-x"
    },
    {
      "index": 843,
      "class": "bi bi-journal"
    },
    {
      "index": 844,
      "class": "bi bi-journals"
    },
    {
      "index": 845,
      "class": "bi bi-joystick"
    },
    {
      "index": 846,
      "class": "bi bi-justify-left"
    },
    {
      "index": 847,
      "class": "bi bi-justify-right"
    },
    {
      "index": 848,
      "class": "bi bi-justify"
    },
    {
      "index": 849,
      "class": "bi bi-kanban-fill"
    },
    {
      "index": 850,
      "class": "bi bi-kanban"
    },
    {
      "index": 851,
      "class": "bi bi-key-fill"
    },
    {
      "index": 852,
      "class": "bi bi-key"
    },
    {
      "index": 853,
      "class": "bi bi-keyboard-fill"
    },
    {
      "index": 854,
      "class": "bi bi-keyboard"
    },
    {
      "index": 855,
      "class": "bi bi-ladder"
    },
    {
      "index": 856,
      "class": "bi bi-lamp-fill"
    },
    {
      "index": 857,
      "class": "bi bi-lamp"
    },
    {
      "index": 858,
      "class": "bi bi-laptop-fill"
    },
    {
      "index": 859,
      "class": "bi bi-laptop"
    },
    {
      "index": 860,
      "class": "bi bi-layer-backward"
    },
    {
      "index": 861,
      "class": "bi bi-layer-forward"
    },
    {
      "index": 862,
      "class": "bi bi-layers-fill"
    },
    {
      "index": 863,
      "class": "bi bi-layers-half"
    },
    {
      "index": 864,
      "class": "bi bi-layers"
    },
    {
      "index": 865,
      "class": "bi bi-layout-sidebar-inset-reverse"
    },
    {
      "index": 866,
      "class": "bi bi-layout-sidebar-inset"
    },
    {
      "index": 867,
      "class": "bi bi-layout-sidebar-reverse"
    },
    {
      "index": 868,
      "class": "bi bi-layout-sidebar"
    },
    {
      "index": 869,
      "class": "bi bi-layout-split"
    },
    {
      "index": 870,
      "class": "bi bi-layout-text-sidebar-reverse"
    },
    {
      "index": 871,
      "class": "bi bi-layout-text-sidebar"
    },
    {
      "index": 872,
      "class": "bi bi-layout-text-window-reverse"
    },
    {
      "index": 873,
      "class": "bi bi-layout-text-window"
    },
    {
      "index": 874,
      "class": "bi bi-layout-three-columns"
    },
    {
      "index": 875,
      "class": "bi bi-layout-wtf"
    },
    {
      "index": 876,
      "class": "bi bi-life-preserver"
    },
    {
      "index": 877,
      "class": "bi bi-lightbulb-fill"
    },
    {
      "index": 878,
      "class": "bi bi-lightbulb-off-fill"
    },
    {
      "index": 879,
      "class": "bi bi-lightbulb-off"
    },
    {
      "index": 880,
      "class": "bi bi-lightbulb"
    },
    {
      "index": 881,
      "class": "bi bi-lightning-charge-fill"
    },
    {
      "index": 882,
      "class": "bi bi-lightning-charge"
    },
    {
      "index": 883,
      "class": "bi bi-lightning-fill"
    },
    {
      "index": 884,
      "class": "bi bi-lightning"
    },
    {
      "index": 885,
      "class": "bi bi-link-45deg"
    },
    {
      "index": 886,
      "class": "bi bi-link"
    },
    {
      "index": 887,
      "class": "bi bi-linkedin"
    },
    {
      "index": 888,
      "class": "bi bi-list-check"
    },
    {
      "index": 889,
      "class": "bi bi-list-nested"
    },
    {
      "index": 890,
      "class": "bi bi-list-ol"
    },
    {
      "index": 891,
      "class": "bi bi-list-stars"
    },
    {
      "index": 892,
      "class": "bi bi-list-task"
    },
    {
      "index": 893,
      "class": "bi bi-list-ul"
    },
    {
      "index": 894,
      "class": "bi bi-list"
    },
    {
      "index": 895,
      "class": "bi bi-lock-fill"
    },
    {
      "index": 896,
      "class": "bi bi-lock"
    },
    {
      "index": 897,
      "class": "bi bi-mailbox"
    },
    {
      "index": 898,
      "class": "bi bi-mailbox2"
    },
    {
      "index": 899,
      "class": "bi bi-map-fill"
    },
    {
      "index": 900,
      "class": "bi bi-map"
    },
    {
      "index": 901,
      "class": "bi bi-markdown-fill"
    },
    {
      "index": 902,
      "class": "bi bi-markdown"
    },
    {
      "index": 903,
      "class": "bi bi-mask"
    },
    {
      "index": 904,
      "class": "bi bi-megaphone-fill"
    },
    {
      "index": 905,
      "class": "bi bi-megaphone"
    },
    {
      "index": 906,
      "class": "bi bi-menu-app-fill"
    },
    {
      "index": 907,
      "class": "bi bi-menu-app"
    },
    {
      "index": 908,
      "class": "bi bi-menu-button-fill"
    },
    {
      "index": 909,
      "class": "bi bi-menu-button"
    },
    {
      "index": 910,
      "class": "bi bi-menu-button-wide-fill"
    },
    {
      "index": 911,
      "class": "bi bi-menu-button-wide"
    },
    {
      "index": 912,
      "class": "bi bi-menu-down"
    },
    {
      "index": 913,
      "class": "bi bi-menu-up"
    },
    {
      "index": 914,
      "class": "bi bi-mic-fill"
    },
    {
      "index": 915,
      "class": "bi bi-mic-mute-fill"
    },
    {
      "index": 916,
      "class": "bi bi-mic-mute"
    },
    {
      "index": 917,
      "class": "bi bi-mic"
    },
    {
      "index": 918,
      "class": "bi bi-minecart-loaded"
    },
    {
      "index": 919,
      "class": "bi bi-minecart"
    },
    {
      "index": 920,
      "class": "bi bi-moisture"
    },
    {
      "index": 921,
      "class": "bi bi-moon-fill"
    },
    {
      "index": 922,
      "class": "bi bi-moon-stars-fill"
    },
    {
      "index": 923,
      "class": "bi bi-moon-stars"
    },
    {
      "index": 924,
      "class": "bi bi-moon"
    },
    {
      "index": 925,
      "class": "bi bi-mouse-fill"
    },
    {
      "index": 926,
      "class": "bi bi-mouse"
    },
    {
      "index": 927,
      "class": "bi bi-mouse2-fill"
    },
    {
      "index": 928,
      "class": "bi bi-mouse2"
    },
    {
      "index": 929,
      "class": "bi bi-mouse3-fill"
    },
    {
      "index": 930,
      "class": "bi bi-mouse3"
    },
    {
      "index": 931,
      "class": "bi bi-music-note-beamed"
    },
    {
      "index": 932,
      "class": "bi bi-music-note-list"
    },
    {
      "index": 933,
      "class": "bi bi-music-note"
    },
    {
      "index": 934,
      "class": "bi bi-music-player-fill"
    },
    {
      "index": 935,
      "class": "bi bi-music-player"
    },
    {
      "index": 936,
      "class": "bi bi-newspaper"
    },
    {
      "index": 937,
      "class": "bi bi-node-minus-fill"
    },
    {
      "index": 938,
      "class": "bi bi-node-minus"
    },
    {
      "index": 939,
      "class": "bi bi-node-plus-fill"
    },
    {
      "index": 940,
      "class": "bi bi-node-plus"
    },
    {
      "index": 941,
      "class": "bi bi-nut-fill"
    },
    {
      "index": 942,
      "class": "bi bi-nut"
    },
    {
      "index": 943,
      "class": "bi bi-octagon-fill"
    },
    {
      "index": 944,
      "class": "bi bi-octagon-half"
    },
    {
      "index": 945,
      "class": "bi bi-octagon"
    },
    {
      "index": 946,
      "class": "bi bi-option"
    },
    {
      "index": 947,
      "class": "bi bi-outlet"
    },
    {
      "index": 948,
      "class": "bi bi-paint-bucket"
    },
    {
      "index": 949,
      "class": "bi bi-palette-fill"
    },
    {
      "index": 950,
      "class": "bi bi-palette"
    },
    {
      "index": 951,
      "class": "bi bi-palette2"
    },
    {
      "index": 952,
      "class": "bi bi-paperclip"
    },
    {
      "index": 953,
      "class": "bi bi-paragraph"
    },
    {
      "index": 954,
      "class": "bi bi-patch-check-fill"
    },
    {
      "index": 955,
      "class": "bi bi-patch-check"
    },
    {
      "index": 956,
      "class": "bi bi-patch-exclamation-fill"
    },
    {
      "index": 957,
      "class": "bi bi-patch-exclamation"
    },
    {
      "index": 958,
      "class": "bi bi-patch-minus-fill"
    },
    {
      "index": 959,
      "class": "bi bi-patch-minus"
    },
    {
      "index": 960,
      "class": "bi bi-patch-plus-fill"
    },
    {
      "index": 961,
      "class": "bi bi-patch-plus"
    },
    {
      "index": 962,
      "class": "bi bi-patch-question-fill"
    },
    {
      "index": 963,
      "class": "bi bi-patch-question"
    },
    {
      "index": 964,
      "class": "bi bi-pause-btn-fill"
    },
    {
      "index": 965,
      "class": "bi bi-pause-btn"
    },
    {
      "index": 966,
      "class": "bi bi-pause-circle-fill"
    },
    {
      "index": 967,
      "class": "bi bi-pause-circle"
    },
    {
      "index": 968,
      "class": "bi bi-pause-fill"
    },
    {
      "index": 969,
      "class": "bi bi-pause"
    },
    {
      "index": 970,
      "class": "bi bi-paypal"
    },
    {
      "index": 971,
      "class": "bi bi-peace-fill"
    },
    {
      "index": 972,
      "class": "bi bi-peace"
    },
    {
      "index": 973,
      "class": "bi bi-pen-fill"
    },
    {
      "index": 974,
      "class": "bi bi-pen"
    },
    {
      "index": 975,
      "class": "bi bi-pencil-fill"
    },
    {
      "index": 976,
      "class": "bi bi-pencil-square"
    },
    {
      "index": 977,
      "class": "bi bi-pencil"
    },
    {
      "index": 978,
      "class": "bi bi-pentagon-fill"
    },
    {
      "index": 979,
      "class": "bi bi-pentagon-half"
    },
    {
      "index": 980,
      "class": "bi bi-pentagon"
    },
    {
      "index": 981,
      "class": "bi bi-people-fill"
    },
    {
      "index": 982,
      "class": "bi bi-people"
    },
    {
      "index": 983,
      "class": "bi bi-percent"
    },
    {
      "index": 984,
      "class": "bi bi-person-badge-fill"
    },
    {
      "index": 985,
      "class": "bi bi-person-badge"
    },
    {
      "index": 986,
      "class": "bi bi-person-bounding-box"
    },
    {
      "index": 987,
      "class": "bi bi-person-check-fill"
    },
    {
      "index": 988,
      "class": "bi bi-person-check"
    },
    {
      "index": 989,
      "class": "bi bi-person-circle"
    },
    {
      "index": 990,
      "class": "bi bi-person-dash-fill"
    },
    {
      "index": 991,
      "class": "bi bi-person-dash"
    },
    {
      "index": 992,
      "class": "bi bi-person-fill"
    },
    {
      "index": 993,
      "class": "bi bi-person-lines-fill"
    },
    {
      "index": 994,
      "class": "bi bi-person-plus-fill"
    },
    {
      "index": 995,
      "class": "bi bi-person-plus"
    },
    {
      "index": 996,
      "class": "bi bi-person-square"
    },
    {
      "index": 997,
      "class": "bi bi-person-x-fill"
    },
    {
      "index": 998,
      "class": "bi bi-person-x"
    },
    {
      "index": 999,
      "class": "bi bi-person"
    },
    {
      "index": 1000,
      "class": "bi bi-phone-fill"
    },
    {
      "index": 1001,
      "class": "bi bi-phone-landscape-fill"
    },
    {
      "index": 1002,
      "class": "bi bi-phone-landscape"
    },
    {
      "index": 1003,
      "class": "bi bi-phone-vibrate-fill"
    },
    {
      "index": 1004,
      "class": "bi bi-phone-vibrate"
    },
    {
      "index": 1005,
      "class": "bi bi-phone"
    },
    {
      "index": 1006,
      "class": "bi bi-pie-chart-fill"
    },
    {
      "index": 1007,
      "class": "bi bi-pie-chart"
    },
    {
      "index": 1008,
      "class": "bi bi-piggy-bank-fill"
    },
    {
      "index": 1009,
      "class": "bi bi-piggy-bank"
    },
    {
      "index": 1010,
      "class": "bi bi-pin-angle-fill"
    },
    {
      "index": 1011,
      "class": "bi bi-pin-angle"
    },
    {
      "index": 1012,
      "class": "bi bi-pin-fill"
    },
    {
      "index": 1013,
      "class": "bi bi-pin"
    },
    {
      "index": 1014,
      "class": "bi bi-pip-fill"
    },
    {
      "index": 1015,
      "class": "bi bi-pip"
    },
    {
      "index": 1016,
      "class": "bi bi-play-btn-fill"
    },
    {
      "index": 1017,
      "class": "bi bi-play-btn"
    },
    {
      "index": 1018,
      "class": "bi bi-play-circle-fill"
    },
    {
      "index": 1019,
      "class": "bi bi-play-circle"
    },
    {
      "index": 1020,
      "class": "bi bi-play-fill"
    },
    {
      "index": 1021,
      "class": "bi bi-play"
    },
    {
      "index": 1022,
      "class": "bi bi-plug-fill"
    },
    {
      "index": 1023,
      "class": "bi bi-plug"
    },
    {
      "index": 1024,
      "class": "bi bi-plus-circle-dotted"
    },
    {
      "index": 1025,
      "class": "bi bi-plus-circle-fill"
    },
    {
      "index": 1026,
      "class": "bi bi-plus-circle"
    },
    {
      "index": 1027,
      "class": "bi bi-plus-lg"
    },
    {
      "index": 1028,
      "class": "bi bi-plus-square-dotted"
    },
    {
      "index": 1029,
      "class": "bi bi-plus-square-fill"
    },
    {
      "index": 1030,
      "class": "bi bi-plus-square"
    },
    {
      "index": 1031,
      "class": "bi bi-plus"
    },
    {
      "index": 1032,
      "class": "bi bi-power"
    },
    {
      "index": 1033,
      "class": "bi bi-printer-fill"
    },
    {
      "index": 1034,
      "class": "bi bi-printer"
    },
    {
      "index": 1035,
      "class": "bi bi-puzzle-fill"
    },
    {
      "index": 1036,
      "class": "bi bi-puzzle"
    },
    {
      "index": 1037,
      "class": "bi bi-question-circle-fill"
    },
    {
      "index": 1038,
      "class": "bi bi-question-circle"
    },
    {
      "index": 1039,
      "class": "bi bi-question-diamond-fill"
    },
    {
      "index": 1040,
      "class": "bi bi-question-diamond"
    },
    {
      "index": 1041,
      "class": "bi bi-question-octagon-fill"
    },
    {
      "index": 1042,
      "class": "bi bi-question-octagon"
    },
    {
      "index": 1043,
      "class": "bi bi-question-square-fill"
    },
    {
      "index": 1044,
      "class": "bi bi-question-square"
    },
    {
      "index": 1045,
      "class": "bi bi-question"
    },
    {
      "index": 1046,
      "class": "bi bi-rainbow"
    },
    {
      "index": 1047,
      "class": "bi bi-receipt-cutoff"
    },
    {
      "index": 1048,
      "class": "bi bi-receipt"
    },
    // {
    //   "index": 1049,
    //   "class": "bi bi-receipt2-cutoff"
    // },
    // {
    //   "index": 1050,
    //   "class": "bi bi-receipt2"
    // },
    {
      "index": 1051,
      "class": "bi bi-record-btn-fill"
    },
    {
      "index": 1052,
      "class": "bi bi-record-btn"
    },
    {
      "index": 1053,
      "class": "bi bi-record-circle-fill"
    },
    {
      "index": 1054,
      "class": "bi bi-record-circle"
    },
    {
      "index": 1055,
      "class": "bi bi-record-fill"
    },
    {
      "index": 1056,
      "class": "bi bi-record"
    },
    {
      "index": 1057,
      "class": "bi bi-record2-fill"
    },
    {
      "index": 1058,
      "class": "bi bi-record2"
    },
    {
      "index": 1059,
      "class": "bi bi-recycle"
    },
    {
      "index": 1060,
      "class": "bi bi-reddit"
    },
    {
      "index": 1061,
      "class": "bi bi-reply-all-fill"
    },
    {
      "index": 1062,
      "class": "bi bi-reply-all"
    },
    {
      "index": 1063,
      "class": "bi bi-reply-fill"
    },
    {
      "index": 1064,
      "class": "bi bi-reply"
    },
    {
      "index": 1065,
      "class": "bi bi-rss-fill"
    },
    {
      "index": 1066,
      "class": "bi bi-rss"
    },
    {
      "index": 1067,
      "class": "bi bi-rulers"
    },
    {
      "index": 1068,
      "class": "bi bi-safe-fill"
    },
    {
      "index": 1069,
      "class": "bi bi-safe"
    },
    {
      "index": 1070,
      "class": "bi bi-safe2-fill"
    },
    {
      "index": 1071,
      "class": "bi bi-safe2"
    },
    {
      "index": 1072,
      "class": "bi bi-save-fill"
    },
    {
      "index": 1073,
      "class": "bi bi-save"
    },
    {
      "index": 1074,
      "class": "bi bi-save2-fill"
    },
    {
      "index": 1075,
      "class": "bi bi-save2"
    },
    {
      "index": 1076,
      "class": "bi bi-scissors"
    },
    {
      "index": 1077,
      "class": "bi bi-screwdriver"
    },
    {
      "index": 1078,
      "class": "bi bi-sd-card-fill"
    },
    {
      "index": 1079,
      "class": "bi bi-sd-card"
    },
    {
      "index": 1080,
      "class": "bi bi-search"
    },
    {
      "index": 1081,
      "class": "bi bi-segmented-nav"
    },
    {
      "index": 1082,
      "class": "bi bi-database-fill"
    },
    {
      "index": 1083,
      "class": "bi bi-server"
    },
    {
      "index": 1084,
      "class": "bi bi-share-fill"
    },
    {
      "index": 1085,
      "class": "bi bi-share"
    },
    {
      "index": 1086,
      "class": "bi bi-shield-check"
    },
    {
      "index": 1087,
      "class": "bi bi-shield-exclamation"
    },
    {
      "index": 1088,
      "class": "bi bi-shield-fill-check"
    },
    {
      "index": 1089,
      "class": "bi bi-shield-fill-exclamation"
    },
    {
      "index": 1090,
      "class": "bi bi-shield-fill-minus"
    },
    {
      "index": 1091,
      "class": "bi bi-shield-fill-plus"
    },
    {
      "index": 1092,
      "class": "bi bi-shield-fill-x"
    },
    {
      "index": 1093,
      "class": "bi bi-shield-fill"
    },
    {
      "index": 1094,
      "class": "bi bi-shield-lock-fill"
    },
    {
      "index": 1095,
      "class": "bi bi-shield-lock"
    },
    {
      "index": 1096,
      "class": "bi bi-shield-minus"
    },
    {
      "index": 1097,
      "class": "bi bi-shield-plus"
    },
    {
      "index": 1098,
      "class": "bi bi-shield-shaded"
    },
    {
      "index": 1099,
      "class": "bi bi-shield-slash-fill"
    },
    {
      "index": 1100,
      "class": "bi bi-shield-slash"
    },
    {
      "index": 1101,
      "class": "bi bi-shield-x"
    },
    {
      "index": 1102,
      "class": "bi bi-shield"
    },
    {
      "index": 1103,
      "class": "bi bi-shift-fill"
    },
    {
      "index": 1104,
      "class": "bi bi-shift"
    },
    {
      "index": 1105,
      "class": "bi bi-shop-window"
    },
    {
      "index": 1106,
      "class": "bi bi-shop"
    },
    {
      "index": 1107,
      "class": "bi bi-shuffle"
    },
    {
      "index": 1108,
      "class": "bi bi-signpost-2-fill"
    },
    {
      "index": 1109,
      "class": "bi bi-signpost-2"
    },
    {
      "index": 1110,
      "class": "bi bi-signpost-fill"
    },
    {
      "index": 1111,
      "class": "bi bi-signpost-split-fill"
    },
    {
      "index": 1112,
      "class": "bi bi-signpost-split"
    },
    {
      "index": 1113,
      "class": "bi bi-signpost"
    },
    {
      "index": 1114,
      "class": "bi bi-sim-fill"
    },
    {
      "index": 1115,
      "class": "bi bi-sim"
    },
    {
      "index": 1116,
      "class": "bi bi-skip-backward-btn-fill"
    },
    {
      "index": 1117,
      "class": "bi bi-skip-backward-btn"
    },
    {
      "index": 1118,
      "class": "bi bi-skip-backward-circle-fill"
    },
    {
      "index": 1119,
      "class": "bi bi-skip-backward-circle"
    },
    {
      "index": 1120,
      "class": "bi bi-skip-backward-fill"
    },
    {
      "index": 1121,
      "class": "bi bi-skip-backward"
    },
    {
      "index": 1122,
      "class": "bi bi-skip-end-btn-fill"
    },
    {
      "index": 1123,
      "class": "bi bi-skip-end-btn"
    },
    {
      "index": 1124,
      "class": "bi bi-skip-end-circle-fill"
    },
    {
      "index": 1125,
      "class": "bi bi-skip-end-circle"
    },
    {
      "index": 1126,
      "class": "bi bi-skip-end-fill"
    },
    {
      "index": 1127,
      "class": "bi bi-skip-end"
    },
    {
      "index": 1128,
      "class": "bi bi-skip-forward-btn-fill"
    },
    {
      "index": 1129,
      "class": "bi bi-skip-forward-btn"
    },
    {
      "index": 1130,
      "class": "bi bi-skip-forward-circle-fill"
    },
    {
      "index": 1131,
      "class": "bi bi-skip-forward-circle"
    },
    {
      "index": 1132,
      "class": "bi bi-skip-forward-fill"
    },
    {
      "index": 1133,
      "class": "bi bi-skip-forward"
    },
    {
      "index": 1134,
      "class": "bi bi-skip-start-btn-fill"
    },
    {
      "index": 1135,
      "class": "bi bi-skip-start-btn"
    },
    {
      "index": 1136,
      "class": "bi bi-skip-start-circle-fill"
    },
    {
      "index": 1137,
      "class": "bi bi-skip-start-circle"
    },
    {
      "index": 1138,
      "class": "bi bi-skip-start-fill"
    },
    {
      "index": 1139,
      "class": "bi bi-skip-start"
    },
    {
      "index": 1140,
      "class": "bi bi-slack"
    },
    {
      "index": 1141,
      "class": "bi bi-slash-circle-fill"
    },
    {
      "index": 1142,
      "class": "bi bi-slash-circle"
    },
    {
      "index": 1143,
      "class": "bi bi-slash-lg"
    },
    {
      "index": 1144,
      "class": "bi bi-slash-square-fill"
    },
    {
      "index": 1145,
      "class": "bi bi-slash-square"
    },
    {
      "index": 1146,
      "class": "bi bi-slash"
    },
    {
      "index": 1147,
      "class": "bi bi-sliders"
    },
    {
      "index": 1148,
      "class": "bi bi-smartwatch"
    },
    {
      "index": 1149,
      "class": "bi bi-snow"
    },
    {
      "index": 1150,
      "class": "bi bi-snow2"
    },
    {
      "index": 1151,
      "class": "bi bi-snow3"
    },
    {
      "index": 1152,
      "class": "bi bi-sort-alpha-down-alt"
    },
    {
      "index": 1153,
      "class": "bi bi-sort-alpha-down"
    },
    {
      "index": 1154,
      "class": "bi bi-sort-alpha-up-alt"
    },
    {
      "index": 1155,
      "class": "bi bi-sort-alpha-up"
    },
    {
      "index": 1156,
      "class": "bi bi-sort-down-alt"
    },
    {
      "index": 1157,
      "class": "bi bi-sort-down"
    },
    {
      "index": 1158,
      "class": "bi bi-sort-numeric-down-alt"
    },
    {
      "index": 1159,
      "class": "bi bi-sort-numeric-down"
    },
    {
      "index": 1160,
      "class": "bi bi-sort-numeric-up-alt"
    },
    {
      "index": 1161,
      "class": "bi bi-sort-numeric-up"
    },
    {
      "index": 1162,
      "class": "bi bi-sort-up-alt"
    },
    {
      "index": 1163,
      "class": "bi bi-sort-up"
    },
    {
      "index": 1164,
      "class": "bi bi-soundwave"
    },
    {
      "index": 1165,
      "class": "bi bi-speaker-fill"
    },
    {
      "index": 1166,
      "class": "bi bi-speaker"
    },
    {
      "index": 1167,
      "class": "bi bi-speedometer"
    },
    {
      "index": 1168,
      "class": "bi bi-speedometer2"
    },
    {
      "index": 1169,
      "class": "bi bi-spellcheck"
    },
    {
      "index": 1170,
      "class": "bi bi-square-fill"
    },
    {
      "index": 1171,
      "class": "bi bi-square-half"
    },
    {
      "index": 1172,
      "class": "bi bi-square"
    },
    {
      "index": 1173,
      "class": "bi bi-stack"
    },
    {
      "index": 1174,
      "class": "bi bi-star-fill"
    },
    {
      "index": 1175,
      "class": "bi bi-star-half"
    },
    {
      "index": 1176,
      "class": "bi bi-star"
    },
    {
      "index": 1177,
      "class": "bi bi-stickies-fill"
    },
    {
      "index": 1178,
      "class": "bi bi-stickies"
    },
    {
      "index": 1179,
      "class": "bi bi-sticky-fill"
    },
    {
      "index": 1180,
      "class": "bi bi-sticky"
    },
    {
      "index": 1181,
      "class": "bi bi-stop-btn-fill"
    },
    {
      "index": 1182,
      "class": "bi bi-stop-btn"
    },
    {
      "index": 1183,
      "class": "bi bi-stop-circle-fill"
    },
    {
      "index": 1184,
      "class": "bi bi-stop-circle"
    },
    {
      "index": 1185,
      "class": "bi bi-stop-fill"
    },
    {
      "index": 1186,
      "class": "bi bi-stop"
    },
    {
      "index": 1187,
      "class": "bi bi-stoplights-fill"
    },
    {
      "index": 1188,
      "class": "bi bi-stoplights"
    },
    {
      "index": 1189,
      "class": "bi bi-stopwatch-fill"
    },
    {
      "index": 1190,
      "class": "bi bi-stopwatch"
    },
    {
      "index": 1191,
      "class": "bi bi-subtract"
    },
    {
      "index": 1192,
      "class": "bi bi-suit-club-fill"
    },
    {
      "index": 1193,
      "class": "bi bi-suit-club"
    },
    {
      "index": 1194,
      "class": "bi bi-suit-diamond-fill"
    },
    {
      "index": 1195,
      "class": "bi bi-suit-diamond"
    },
    {
      "index": 1196,
      "class": "bi bi-suit-heart-fill"
    },
    {
      "index": 1197,
      "class": "bi bi-suit-heart"
    },
    {
      "index": 1198,
      "class": "bi bi-suit-spade-fill"
    },
    {
      "index": 1199,
      "class": "bi bi-suit-spade"
    },
    {
      "index": 1200,
      "class": "bi bi-sun-fill"
    },
    {
      "index": 1201,
      "class": "bi bi-sun"
    },
    {
      "index": 1202,
      "class": "bi bi-sunglasses"
    },
    {
      "index": 1203,
      "class": "bi bi-symmetry-horizontal"
    },
    {
      "index": 1204,
      "class": "bi bi-symmetry-vertical"
    },
    {
      "index": 1205,
      "class": "bi bi-table"
    },
    {
      "index": 1206,
      "class": "bi bi-tablet-fill"
    },
    {
      "index": 1207,
      "class": "bi bi-tablet-landscape-fill"
    },
    {
      "index": 1208,
      "class": "bi bi-tablet-landscape"
    },
    {
      "index": 1209,
      "class": "bi bi-tablet"
    },
    {
      "index": 1210,
      "class": "bi bi-tag-fill"
    },
    {
      "index": 1211,
      "class": "bi bi-tag"
    },
    {
      "index": 1212,
      "class": "bi bi-tags-fill"
    },
    {
      "index": 1213,
      "class": "bi bi-tags"
    },
    {
      "index": 1214,
      "class": "bi bi-telegram"
    },
    {
      "index": 1215,
      "class": "bi bi-telephone-fill"
    },
    {
      "index": 1216,
      "class": "bi bi-telephone-forward-fill"
    },
    {
      "index": 1217,
      "class": "bi bi-telephone-forward"
    },
    {
      "index": 1218,
      "class": "bi bi-telephone-inbound-fill"
    },
    {
      "index": 1219,
      "class": "bi bi-telephone-inbound"
    },
    {
      "index": 1220,
      "class": "bi bi-telephone-minus-fill"
    },
    {
      "index": 1221,
      "class": "bi bi-telephone-minus"
    },
    {
      "index": 1222,
      "class": "bi bi-telephone-outbound-fill"
    },
    {
      "index": 1223,
      "class": "bi bi-telephone-outbound"
    },
    {
      "index": 1224,
      "class": "bi bi-telephone-plus-fill"
    },
    {
      "index": 1225,
      "class": "bi bi-telephone-plus"
    },
    {
      "index": 1226,
      "class": "bi bi-telephone-x-fill"
    },
    {
      "index": 1227,
      "class": "bi bi-telephone-x"
    },
    {
      "index": 1228,
      "class": "bi bi-telephone"
    },
    {
      "index": 1229,
      "class": "bi bi-terminal-fill"
    },
    {
      "index": 1230,
      "class": "bi bi-terminal"
    },
    {
      "index": 1231,
      "class": "bi bi-text-center"
    },
    {
      "index": 1232,
      "class": "bi bi-text-indent-left"
    },
    {
      "index": 1233,
      "class": "bi bi-text-indent-right"
    },
    {
      "index": 1234,
      "class": "bi bi-text-left"
    },
    {
      "index": 1235,
      "class": "bi bi-text-paragraph"
    },
    {
      "index": 1236,
      "class": "bi bi-text-right"
    },
    {
      "index": 1237,
      "class": "bi bi-textarea-resize"
    },
    {
      "index": 1238,
      "class": "bi bi-textarea-t"
    },
    {
      "index": 1239,
      "class": "bi bi-textarea"
    },
    {
      "index": 1240,
      "class": "bi bi-thermometer-half"
    },
    {
      "index": 1241,
      "class": "bi bi-thermometer-high"
    },
    {
      "index": 1242,
      "class": "bi bi-thermometer-low"
    },
    {
      "index": 1243,
      "class": "bi bi-thermometer-snow"
    },
    {
      "index": 1244,
      "class": "bi bi-thermometer-sun"
    },
    {
      "index": 1245,
      "class": "bi bi-thermometer"
    },
    {
      "index": 1246,
      "class": "bi bi-three-dots-vertical"
    },
    {
      "index": 1247,
      "class": "bi bi-three-dots"
    },
    {
      "index": 1248,
      "class": "bi bi-toggle-off"
    },
    {
      "index": 1249,
      "class": "bi bi-toggle-on"
    },
    {
      "index": 1250,
      "class": "bi bi-toggle2-off"
    },
    {
      "index": 1251,
      "class": "bi bi-toggle2-on"
    },
    {
      "index": 1252,
      "class": "bi bi-toggles"
    },
    {
      "index": 1253,
      "class": "bi bi-toggles2"
    },
    {
      "index": 1254,
      "class": "bi bi-tools"
    },
    {
      "index": 1255,
      "class": "bi bi-tornado"
    },
    {
      "index": 1256,
      "class": "bi bi-trash-fill"
    },
    {
      "index": 1257,
      "class": "bi bi-trash"
    },
    {
      "index": 1258,
      "class": "bi bi-trash2-fill"
    },
    {
      "index": 1259,
      "class": "bi bi-trash2"
    },
    {
      "index": 1260,
      "class": "bi bi-tree-fill"
    },
    {
      "index": 1261,
      "class": "bi bi-tree"
    },
    {
      "index": 1262,
      "class": "bi bi-triangle-fill"
    },
    {
      "index": 1263,
      "class": "bi bi-triangle-half"
    },
    {
      "index": 1264,
      "class": "bi bi-triangle"
    },
    {
      "index": 1265,
      "class": "bi bi-trophy-fill"
    },
    {
      "index": 1266,
      "class": "bi bi-trophy"
    },
    {
      "index": 1267,
      "class": "bi bi-truck-flatbed"
    },
    {
      "index": 1268,
      "class": "bi bi-truck"
    },
    {
      "index": 1269,
      "class": "bi bi-tv-fill"
    },
    {
      "index": 1270,
      "class": "bi bi-tv"
    },
    {
      "index": 1271,
      "class": "bi bi-twitch"
    },
    {
      "index": 1272,
      "class": "bi bi-twitter"
    },
    {
      "index": 1273,
      "class": "bi bi-type-bold"
    },
    {
      "index": 1274,
      "class": "bi bi-type-h1"
    },
    {
      "index": 1275,
      "class": "bi bi-type-h2"
    },
    {
      "index": 1276,
      "class": "bi bi-type-h3"
    },
    {
      "index": 1277,
      "class": "bi bi-type-italic"
    },
    {
      "index": 1278,
      "class": "bi bi-type-strikethrough"
    },
    {
      "index": 1279,
      "class": "bi bi-type-underline"
    },
    {
      "index": 1280,
      "class": "bi bi-type"
    },
    {
      "index": 1281,
      "class": "bi bi-ui-checks-grid"
    },
    {
      "index": 1282,
      "class": "bi bi-ui-checks"
    },
    {
      "index": 1283,
      "class": "bi bi-ui-radios-grid"
    },
    {
      "index": 1284,
      "class": "bi bi-ui-radios"
    },
    {
      "index": 1285,
      "class": "bi bi-union"
    },
    {
      "index": 1286,
      "class": "bi bi-unlock-fill"
    },
    {
      "index": 1287,
      "class": "bi bi-unlock"
    },
    {
      "index": 1288,
      "class": "bi bi-upc-scan"
    },
    {
      "index": 1289,
      "class": "bi bi-upc"
    },
    {
      "index": 1290,
      "class": "bi bi-upload"
    },
    {
      "index": 1291,
      "class": "bi bi-vector-pen"
    },
    {
      "index": 1292,
      "class": "bi bi-view-list"
    },
    {
      "index": 1293,
      "class": "bi bi-view-stacked"
    },
    {
      "index": 1294,
      "class": "bi bi-vinyl-fill"
    },
    {
      "index": 1295,
      "class": "bi bi-vinyl"
    },
    {
      "index": 1296,
      "class": "bi bi-voicemail"
    },
    {
      "index": 1297,
      "class": "bi bi-volume-down-fill"
    },
    {
      "index": 1298,
      "class": "bi bi-volume-down"
    },
    {
      "index": 1299,
      "class": "bi bi-volume-mute-fill"
    },
    {
      "index": 1300,
      "class": "bi bi-volume-mute"
    },
    {
      "index": 1301,
      "class": "bi bi-volume-off-fill"
    },
    {
      "index": 1302,
      "class": "bi bi-volume-off"
    },
    {
      "index": 1303,
      "class": "bi bi-volume-up-fill"
    },
    {
      "index": 1304,
      "class": "bi bi-volume-up"
    },
    {
      "index": 1305,
      "class": "bi bi-vr"
    },
    {
      "index": 1306,
      "class": "bi bi-wallet-fill"
    },
    {
      "index": 1307,
      "class": "bi bi-wallet"
    },
    {
      "index": 1308,
      "class": "bi bi-wallet2"
    },
    {
      "index": 1309,
      "class": "bi bi-watch"
    },
    {
      "index": 1310,
      "class": "bi bi-water"
    },
    {
      "index": 1311,
      "class": "bi bi-whatsapp"
    },
    {
      "index": 1312,
      "class": "bi bi-wifi-1"
    },
    {
      "index": 1313,
      "class": "bi bi-wifi-2"
    },
    {
      "index": 1314,
      "class": "bi bi-wifi-off"
    },
    {
      "index": 1315,
      "class": "bi bi-wifi"
    },
    {
      "index": 1316,
      "class": "bi bi-wind"
    },
    {
      "index": 1317,
      "class": "bi bi-window-dock"
    },
    {
      "index": 1318,
      "class": "bi bi-window-sidebar"
    },
    {
      "index": 1319,
      "class": "bi bi-window"
    },
    {
      "index": 1320,
      "class": "bi bi-windows"
    },
    // {
    //   "index": 1321,
    //   "class": "bi bi-wind"
    // },
    {
      "index": 1322,
      "class": "bi bi-wrench"
    },
    {
      "index": 1323,
      "class": "bi bi-x-circle-fill"
    },
    {
      "index": 1324,
      "class": "bi bi-x-circle"
    },
    {
      "index": 1325,
      "class": "bi bi-x-diamond-fill"
    },
    {
      "index": 1326,
      "class": "bi bi-x-diamond"
    },
    {
      "index": 1327,
      "class": "bi bi-x-octagon-fill"
    },
    {
      "index": 1328,
      "class": "bi bi-x-octagon"
    },
    {
      "index": 1329,
      "class": "bi bi-x-square-fill"
    },
    {
      "index": 1330,
      "class": "bi bi-x-square"
    },
    {
      "index": 1331,
      "class": "bi bi-x"
    },
    {
      "index": 1332,
      "class": "bi bi-youtube"
    },
    {
      "index": 1333,
      "class": "bi bi-zoom-in"
    },
    {
      "index": 1334,
      "class": "bi bi-zoom-out"
    }
  ];

  onClipboardCopy(event: any)
  {
    if(event)
      alert("coppied");
  }

}
