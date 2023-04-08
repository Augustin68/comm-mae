import './calendar-page.css'

export function CalendarPage() {
    return (
        <div className='bg-pale-100 h-screen w-screen'>
            <div className="stendig flex">
                <div className='text-3xl gap-7'>
                    <h2 className="year writing-vertical-rl rotate-180">2014</h2>
                    <h2 className="month writing-vertical-rl rotate-180">October</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>M</td>
                            <td>T</td>
                            <td>W</td>
                            <td>T</td>
                            <td>F</td>
                            <td>S</td>
                            <td>S</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td className="k10">10</td>
                            <td className="k13">11</td>
                            <td className="k10">12</td>
                        </tr>
                        <tr>
                            <td className="k10">13</td>
                            <td className="k10">14</td>
                            <td className="k10">15</td>
                            <td className="k10">16</td>
                            <td className="k10">17</td>
                            <td className="k10">18</td>
                            <td className="k10">19</td>
                        </tr>
                        <tr>
                            <td className="k3">20</td>
                            <td>21</td>
                            <td className="k3">22</td>
                            <td className="k3">23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td className="k3">28</td>
                            <td className="k3">29</td>
                            <td className="k3">30</td>
                            <td className="k10">31</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}