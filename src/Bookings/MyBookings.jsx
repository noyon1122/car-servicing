

const MyBookings = ({booking,index}) => {
    const {name,email,date}=booking;
    const ind=index;

  return (
    <tbody>
    {/* row 1 */}
    <tr>
      <th>{ind+1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td><button className="btn btn-outline btn-success">Pending</button></td>
    </tr>

   
  </tbody>
  )
}

export default MyBookings