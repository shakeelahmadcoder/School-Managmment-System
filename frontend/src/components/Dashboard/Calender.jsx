import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
  return (
    <div className="bg-white shadow-sm p-5 my-5" >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Event Calendar</h2>
        </div>
        <div className="flex gap-2">
          <button className="text-green-500 hover:bg-green-50 p-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-red-500 hover:bg-red-50 p-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        /* Calendar Container */
        .school-calendar-wrapper {
          background: white;
        }

        /* Remove default FullCalendar padding */
        .fc {
          padding: 0;
        }

        /* Toolbar with yellow icon and date */
        .fc-toolbar {
          margin-bottom: 15px !important;
          padding: 0 8px;
        }

        .fc-toolbar-chunk {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Yellow calendar icon before title */
        .fc-toolbar-title::before {
          content: "📅";
          display: inline-flex;
          width: 40px;
          height: 40px;
          background: #fbbf24;
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          font-size: 20px;
        }

        .fc-toolbar-title {
          font-size: 15px !important;
          font-weight: 600 !important;
          color: #374151;
          display: flex;
          align-items: center;
        }

        /* Navigation buttons */
        .fc-button {
          background: transparent !important;
          border: none !important;
          color: #6b7280 !important;
          padding: 4px 8px !important;
          box-shadow: none !important;
        }

        .fc-button:hover {
          background: #f3f4f6 !important;
        }

        .fc-button-primary:not(:disabled):active,
        .fc-button-primary:not(:disabled).fc-button-active {
          background: transparent !important;
          color: #6b7280 !important;
        }

        /* Hide the "today" button if exists */
        .fc-today-button {
          display: none !important;
        }

        /* Table borders */
        .fc-scrollgrid {
          border: 1px solid #e5e7eb !important;
          border-radius: 8px;
          overflow: hidden;
        }

        /* Header days */
        .fc-col-header {
          background: #f9fafb;
        }

        .fc-col-header-cell {
          border: 1px solid #e5e7eb !important;
          padding: 8px 0;
          font-weight: 600;
          font-size: 13px;
          color: #6b7280;
          text-align: center;
        }

        /* Day cells - FIXED HEIGHT */
        .fc-daygrid-day {
          height: 48px !important;
          min-height: 48px !important;
          max-height: 48px !important;
          border: 1px solid #e5e7eb !important;
        }

        .fc-daygrid-day-frame {
          height: 48px !important;
          min-height: 48px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 !important;
        }

        .fc-daygrid-day-top {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        /* Date numbers */
        .fc-daygrid-day-number {
          font-size: 13px;
          color: #374151;
          font-weight: 500;
          padding: 0 !important;
        }

        /* Other month dates (grayed out) */
        .fc-day-other .fc-daygrid-day-number {
          color: #9ca3af;
        }

        .fc-day-other {
          background: #f9fafb;
        }

        /* Today highlight - Purple background for today */
        .fc-day-today {
          background: white !important;
        }

        .fc-day-today .fc-daygrid-day-number {
          background: #6c5ce7 !important;
          color: white !important;
          border-radius: 8px !important;
          width: calc(100% - 4px) !important;
          height: calc(100% - 4px) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 2px !important;
        }

        /* Events - Full cell colored badges */
        .fc-event {
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          border-radius: 8px !important;
          width: calc(100% - 4px) !important;
          height: calc(100% - 4px) !important;
          position: absolute;
          top: 2px;
          left: 2px;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-weight: 500;
          font-size: 13px;
        }

        .fc-event-main {
          color: white !important;
          padding: 0 !important;
        }

        .fc-daygrid-event {
          margin-top: 0 !important;
        }

        .fc-daygrid-event-harness {
          position: absolute !important;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        /* Event colors */
        .event-purple {
          background: #6c5ce7 !important;
        }

        .event-green {
          background: #00b894 !important;
        }

        .event-pink {
          background: #fd79a8 !important;
        }

        /* Remove scrollbars */
        .fc-scroller {
          overflow: hidden !important;
        }

        /* Calendar height */
        .fc-daygrid-body {
          height: auto !important;
        }

        .fc-scrollgrid-sync-table {
          height: auto !important;
        }
      `}</style>

      <div className="school-calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: '',
            center: 'title',
            right: 'prev,next'
          }}
          height="auto"
          fixedWeekCount={false}
          showNonCurrentDates={true}
          dayMaxEventRows={false}
          events={[
            { 
              title: '14', 
              date: '2025-12-14', 
              display: 'background',
              classNames: ['event-purple']
            },
            { 
              title: '18', 
              date: '2025-12-18', 
              display: 'background',
              classNames: ['event-green']
            },
            { 
              title: '27', 
              date: '2025-12-27', 
              display: 'background',
              classNames: ['event-pink']
            }
          ]}
          eventContent={(arg) => {
            return { html: `<div style="color: white; font-weight: 500;">${arg.event.title}</div>` }
          }}
        />
      </div>
    </div>
  );
}