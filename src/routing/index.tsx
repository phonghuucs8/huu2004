import React from 'react'
import { Route, Switch } from 'react-router'
import CkeditorPage from '../component/ckeditor/ckeditor'
import TablePage from '../component/table/table'

const Routing = () => (
    <Switch>

        <Route path='/ckeditor' exact component={() => <CkeditorPage />} />
        <Route path='/table' exact component={() => <TablePage />} />
    </Switch>
)

export default Routing
