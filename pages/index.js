
import { Page, Wrapper } from '@components';

export default function Home() {
  return (
    <Page title="Invoice">
      <Wrapper>
        <h1>Invoice</h1>
        <table>
          <tbody>
            <tr>
              <td className="label"><strong>From:</strong></td>
              <td><input type="text" placeholder="Your name" /></td>
              <td className="label"><strong>Invoice For:</strong></td>
              <td><input type="text" placeholder="Ambush Consulting LLC." /></td>
            </tr>
            <tr>
              <td className="label"><strong>Address:</strong></td>
              <td><input type="text" placeholder="Your Adress" /></td>
              <td className="label"><strong>Address:</strong></td>
              <td><input type="text" placeholder="7421 Burnet Rd. Suite 276 Austin, TX 78757" /></td>
            </tr>
            <tr>
              <td className="label"><strong>City:</strong></td>
              <td><input type="text" placeholder="Your city" /></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="label"><strong>Country:</strong></td>
              <td><input type="text" placeholder="Brazil" /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="divider" />
        <table>
          <tbody>
            <tr>
              <td className="label"><strong>Invoice Number:</strong></td>
              <td><input type="text" placeholder="0001" /></td>
              
            </tr>
            <tr>
              <td className="label"><strong>Issue Date:</strong></td>
              <td><input type="text" placeholder="YYYY/MM/DD" /></td>
             
            </tr>
            <tr>
              <td className="label"><strong>Due Date:</strong></td>
              <td><input type="text" placeholder="YYYY/MM/DD" /></td>
            </tr>
            
          </tbody>
        </table>
        
        <div className="divider" />

        <table className="bordered" cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <td>Quantity</td>
              <td>Description</td>
              <td>Unit Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr className="center">
              <td className="label"><input type="text" value="01" /></td>
              <td><input type="text" value="[Web Design or Software Development] Consulting Services - Month/YYYY - Prorated" /></td>
              <td className="label-2"><input type="text" placeholder="$0.00" /></td>
              <td className="label-2"><input type="text" placeholder="$0.00" /></td>
            </tr>
            <tr>
              <td colSpan={2} className="right" >Total</td>
              <td className="center"><input type="text" placeholder="$0.00" /></td>
              <td className="center"><input type="text" placeholder="$0.00" /></td>
            </tr>
          </tbody>
        </table>

        <div className="divider" />

        <table cellPadding={0} cellSpacing={0}>
          <tbody>
            <td className="label"><strong>Bank Details:</strong></td>
            <td><textarea /></td>
          </tbody>
        </table>

      </Wrapper>
    </Page>
  )
}
