import css from './Transition.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.transaction_types}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(items) &&
                    items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}