import { Checkbox, Form, Modal, Radio } from 'antd'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

function ModalForm({ formChildren, modalState, title, triggerClose }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClose = (e) => {
        triggerClose(e)
        setIsModalOpen(false)
    }

    useEffect(() => {
        modalState==true? setIsModalOpen(true) : setIsModalOpen(false)
    }, [modalState])
    

    return (
        <Modal
            title={title}
            open={isModalOpen}
            // onOk={handleOk}
            onCancel={handleClose}
            footer={null}
            width={650}
            style={{
                top: 20,
            }}
        >
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                // disabled={componentDisabled}
                style={{ maxWidth: 600 }}
            >
                {formChildren}
            </Form>
        </Modal>
    )
}

ModalForm.propTypes = {
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    triggerClose: PropTypes.any.isRequired,
}

export default ModalForm