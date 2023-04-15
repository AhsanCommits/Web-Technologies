import React from 'react'

function Table() {
    return (
        <div className='row my-4'>
            <div className="col table-responsive text-nowrap">
                <table style={{ border: "1px solid black" }} className="table">
                    <thead>
                        <tr><th>S.No</th>
                            <th>Name</th>
                            <th>Relation</th>
                            <th>D.O.B</th>
                            <th>CNIC</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table