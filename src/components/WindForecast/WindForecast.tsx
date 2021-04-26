import React from 'react';



const WindForecast = () => {
    return (
        <div>
            <div className={`header`}>
                <span>wind speed in: </span>

                <select value={wind_speed_multiplier} onChange={handle_wind_speed_multiplier_change} disabled={true}>
                    {wind_speed_multipliers.map(multiplier => <option key={multiplier.id} value={multiplier.id}>{multiplier.scale}</option>)}
                </select>
            </div>

            <div className={`wind-values`}>
                <WindValue key={0} label={`prediction:`} value={wind_speed} />
                <WindValue key={1} label={`lower limit:`} value={wind_speed_lower} />
                <WindValue key={2} label={`upper limit:`} value={wind_speed_upper} />
            </div>

            <form>
                <div className={`select-group`}>
                    <FormSelect start={1} end={32} label={`day:`} value={day} handle_change={set_day} />
                    <FormSelect start={1} end={13} label={`month:`} value={month} handle_change={set_month} />
                    <FormSelect start={2021} end={2022} label={`year:`} value={year} handle_change={set_year} />
                </div>
                <input type={`button`} value={`submit`} onClick={fetch_wind_speed}/>
            </form> 
        </div>
    );
}

type WindValueProps = {
    label: string;
    value: number;
}

const WindValue: React.FC<WindValueProps> = ({ label, value }) => {
    return(
        <div>
            <label>{ label }</label>
            <input type="text" value={value} readOnly={true} disabled={true} />
        </div>
    )
}

type FormSelectProps = {
    label: string;
    value: number;
    start: number;
    end: number;
    callback: (value: number) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, value, start, end, callback }) => {

    let items = []
    for (let i=start; i<end; i++) {
        items.push(<option key={i} value={i}>{ i }</option>)
    }

    return (
        <div className={`select-item`}>
            <label>{ label }</label>

            <select 
                value={value} 
                onChange={(event) => callback(+event.target.value)} 
            >{ items }</select>
        </div>
    )  
}

export default WindForecast;