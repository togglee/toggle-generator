import * as React from "react"
import { useEffect, useState } from "react"
import { Table, Button, Form } from "react-bootstrap"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import  faker from "faker"
import { v4 as uuid } from 'uuid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./index.scss"

const DefaultPage = ({ finishedLoading }) => {
  const [data,setData] = useState({
      toggles:[]
  });

  useEffect(finishedLoading ,[finishedLoading]);
  return (<>
    <Table striped hover size="sm" data-testid="main-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Type</th>
                <th><div className="actions">
                    Actions
                    <Button onClick={() => setData({ ...data, toggles: [...data.toggles, {
                      name: faker.random.word(),
                      type: "release",
                      status: false,
                    }]})}><FontAwesomeIcon icon={['fas', 'plus']} /></Button>
                </div></th>
            </tr>
        </thead>
        <tbody>
          {
            data.toggles.map( (toggle, index) =>(
              <tr key={toggle.name}>
                <td>{toggle.name}</td>
                <td><BootstrapSwitchButton
                    checked={toggle.status}
                    onChange={(checked) => console.log("update")}/>
                </td>
                <td><Form.Control 
                        as="select"
                        onChange={event => console.log("update")}
                        value={toggle.type} 
                        required>
                    {
                        ["release", "context"].map(type => 
                            <option key={`toggleType${uuid()}`}>{type}</option>
                        )
                    }
                    </Form.Control>
                </td>
                <td>
                    <div className="actions">
                    <Button onClick={() => setData({ ...data, toggles: data.toggles.filter((_, indexDelete) => index !== indexDelete)})}><FontAwesomeIcon icon={['fas', 'trash']} /></Button>
                    </div>
                </td>
              </tr>
            ))
          }
        </tbody>
    </Table>
  </>)
}

export const Default = (props) => <DefaultPage {...props} />;
