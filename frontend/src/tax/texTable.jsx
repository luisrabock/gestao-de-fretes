import React from 'react'
import moment from 'moment'

import Grid from '../common/layout/grid'
import IconButton from '../common/layout/iconButton';


export default props => {


  const renderRows = () => {
    const list = props.list || []
    return list.map(doc => (
      <tbody key={doc._id}>
        <tr className='text-center'>
          <td>{doc.regions}</td>
          <td>{doc.transp}</td>
          <td><span className='teste'><IconButton style='warning' icon='pencil'
          onClick={() => props.openModal()}></IconButton></span>
          </td>
        </tr>
      </tbody>
    ))
}
    return (
      <Grid cols='12 9 12'>
        <table className='table table-bordered table-hover table-striped'>
            <thead>
                <tr className='text-center'>
                    <th>Região</th>
                    <th>Transportadora</th>
                    <th>Taxas e tarifas</th>
                </tr>
            </thead>
          {renderRows()}
        </table>
      </Grid>
    )
}
