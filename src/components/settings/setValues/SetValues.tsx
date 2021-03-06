import React from 'react';
import '../../../App.css';

export type SetValuesType = {
    findMaxValue: (maxInputValue: number) => void
    findStartValue: (firstInputValue: number) => void
    maxValue: number
    startValue: number
    errorMin: boolean
    errorMax: boolean
}

export function SetValues(props: SetValuesType) {

    return (
        <div className={'display'}>
            <div className={'Value'}>max value:
                <input
                    className={props.errorMax?'ValueErrorInput':'ValueInput'}
                    value={props.maxValue} type="number"
                    onChange={(event) => props.findMaxValue(event.currentTarget.valueAsNumber)}/>
            </div>
            <div className={'Value'}>start value:
                <input
                    className={props.errorMin?'ValueErrorInput':'ValueInput'}
                    value={props.startValue} type="number"
                    onChange={(event) => props.findStartValue(event.currentTarget.valueAsNumber)}/>
            </div>
        </div>)
}
