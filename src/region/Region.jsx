import {Counrty} from '../country/Country';
import style from './Region.module.css';

export function Region({title}) {
    return(
        <div className = {style.region)>
            <h2>{title}</h2>
            <div className={style.countryList}>
                <Country/>
                <Country/>
                <Country/>
                <Country/>

            </div>
    )
}
