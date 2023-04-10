import './calendar.css'

function CalendarTile({monthDay, onDateClick}) {
    return (
        <td onClick={() => onDateClick(monthDay)} className="w-20 h-11 leading-10 text-left border-l border-black align-top ease-in duration-100">
            <p>{monthDay.toString()}</p>
        </td>
    )
}

export default function Calendar({ onDateClick }) {
    return (
        <div className="stendig flex">
                <div className='text-3xl gap-7'>
                    <h2 className="year writing-vertical-rl rotate-180">2023</h2>
                    <h2 className="month writing-vertical-rl rotate-180">December</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <CalendarTile monthDay="M"/>
                            <CalendarTile monthDay="T"/>
                            <CalendarTile monthDay="W"/>
                            <CalendarTile monthDay="T"/>
                            <CalendarTile monthDay="F"/>
                            <CalendarTile monthDay="S"/>
                            <CalendarTile monthDay="S"/>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <CalendarTile onDateClick={onDateClick} monthDay="1"/>
                            <CalendarTile onDateClick={onDateClick} monthDay="2"/>
                            <CalendarTile onDateClick={onDateClick} monthDay="3"/>
                            <CalendarTile onDateClick={onDateClick} monthDay="4"/>
                            <CalendarTile onDateClick={onDateClick} monthDay="5"/>
                        </tr>
                        <tr>
                            <CalendarTile onDateClick={onDateClick} monthDay="6" />
                            <CalendarTile onDateClick={onDateClick} monthDay="7" />
                            <CalendarTile onDateClick={onDateClick} monthDay="8" />
                            <CalendarTile onDateClick={onDateClick} monthDay="9" />
                            <CalendarTile onDateClick={onDateClick} monthDay="10" />
                            <CalendarTile onDateClick={onDateClick} monthDay="11" />
                            <CalendarTile onDateClick={onDateClick} monthDay="12" />
                        </tr>
                        <tr>
                            <CalendarTile onDateClick={onDateClick} monthDay="13" />
                            <CalendarTile onDateClick={onDateClick} monthDay="14" />
                            <CalendarTile onDateClick={onDateClick} monthDay="15" />
                            <CalendarTile onDateClick={onDateClick} monthDay="16" />
                            <CalendarTile onDateClick={onDateClick} monthDay="17" />
                            <CalendarTile onDateClick={onDateClick} monthDay="18" />
                            <CalendarTile onDateClick={onDateClick} monthDay="19" />
                        </tr>
                        <tr>
                            <CalendarTile onDateClick={onDateClick} monthDay="20" />
                            <CalendarTile onDateClick={onDateClick} monthDay="21" />
                            <CalendarTile onDateClick={onDateClick} monthDay="22" />
                            <CalendarTile onDateClick={onDateClick} monthDay="23" />
                            <CalendarTile onDateClick={onDateClick} monthDay="24" />
                            <CalendarTile onDateClick={onDateClick} monthDay="25" />
                            <CalendarTile onDateClick={onDateClick} monthDay="26" />
                        </tr>
                        <tr>
                            <CalendarTile onDateClick={onDateClick} monthDay="27" />
                            <CalendarTile onDateClick={onDateClick} monthDay="28" />
                            <CalendarTile onDateClick={onDateClick} monthDay="29" />
                            <CalendarTile onDateClick={onDateClick} monthDay="30" />
                            <CalendarTile onDateClick={onDateClick} monthDay="31" />
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}