import css from './Statistics.module.css'
import { getRandomHexColor } from '../helper.js';

export const Statistics = ({ stats, title = "" }) => {
    return (
        <>
            <section className={css.statistics}>
                {title.length > 0 && <h2 className={css.title}>{title}</h2>}
                <ul className={css.stat_list}>
                    {Array.isArray(stats) &&
                        stats.map((stat) => (
                            <li style={{backgroundColor: getRandomHexColor()}} className={css.item} key={stat.id}>
                                <span className={css.label}>{stat.label}</span>
                                <span className={css.percentage}>{stat.percentage}</span>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}