import React, { useEffect, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Table, Button, Spin } from "antd";
import { UserOutlined } from '@ant-design/icons';
import "./timeSLot.css"
import { getUsers } from "./actions";
import EditWebsite from "./editWebsite";

const { Column } = Table;

const Users = (props) => {

    const [userDetails, setUserDetails] = useState()
    const [website, setWebsite] = useState("")
    const [selectedId, setSelectedId] = useState("")
    const [editModalOpen, setEditModalOpen] = useState(false)


    useEffect(() => {
        if (props.userData)
            setUserDetails(props.userData)
        else
            props.getUsers()

    }, [props.userData]);

    const setSuccess = (value) => {
        setEditModalOpen(false)
        setUserDetails(
            userDetails.map((item) =>
              item.id === selectedId ? { ...item, website: value } : item
            )
          );

    }


    return (
        <div className="time-slot-layout">
            <div className="timeslot-header" >
                {" "}

                <div style={{ fontWeight: "600", color: "#000", fontSize: "15px" }}> Users</div>


            </div>
            {props.loading ?
                <Spin size="large" className="loader-slot" />
                :
                <Table
                    dataSource={userDetails ? userDetails : []}
                    pagination={false}
                    className="slot-table"
                   

                >
                    <Column
                        title={""}
                        dataIndex="firstName"
                        render={(name, item) => (

                            <Avatar size="large" icon={<UserOutlined />} />

                        )}
                    />

                    <Column
                        title={"userName"}
                        dataIndex="id"
                        render={(name, item) => (
                            <React.Fragment>
                                <div className="customer-name">{item.name}</div>

                            </React.Fragment>
                        )}
                    />
                    <Column
                        title={"Email"}
                        dataIndex="name"
                        render={(name, item) => (
                            <React.Fragment>

                                <div className="customer-name">{item.email}</div>
                            </React.Fragment>

                        )}
                    />
                    <Column
                        title={"Mobile"}
                        dataIndex="name"
                        render={(name, item) => (
                            <React.Fragment>
                                <div className="customer-name">{item.phone}</div>
                                {/* <div className="table-customer-name">{tConvert(item.time)}</div> */}
                            </React.Fragment>

                        )}
                    />

                    <Column
                        title={"Website"}
                        dataIndex="name"
                        render={(name, item) => (
                            <div style={{display:"flex"}}>
                                <div className="customer-name">{item.website}</div>
                                <Button
                                    type={"primary"}
                                    style={{ backgroundColor: "red", border: "none",marginLeft:"10px" }}

                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedId(item.id)
                                        setWebsite(item.website)
                                        setEditModalOpen(true)

                                    }}
                                >
                                    Edit
              </Button>
                            </div>

                        )}
                    />
                </Table>
            }

            <EditWebsite
                visible={editModalOpen}
                setCancel={setEditModalOpen}
                website={website}
                setSuccess={setSuccess} />
        </div>

    );
};


const mapDispatchToProps = {
    getUsers: getUsers,
};
const mapStateToProps = (state) => ({
    loading: state.loading,
    userData: state.users
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));
