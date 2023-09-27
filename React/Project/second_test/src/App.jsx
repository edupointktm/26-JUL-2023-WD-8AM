import React from "react";
import Student from "./Student"
function App() {
    
    return (
        <>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Moible</th>
                    </tr>
                </thead>
                <tbody>
                    {Student.map((data) =>
                        <tr>
                            <th scope="row">{data.stdName}</th>
                            <td>{data.Address}</td>
                            <td>{data.Moible}</td>

                        </tr>
                    )}
                </tbody>
            </table>

           

        </>
    )
}

export default App