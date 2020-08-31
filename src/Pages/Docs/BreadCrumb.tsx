import React, { useState, useEffect } from 'react'
import { Input, Space } from 'antd'
import { SaveOutlined, PlusOutlined, HomeOutlined } from '@ant-design/icons'

import { Link } from 'react-router-dom'

interface BreadCrumbHeaderType {
  saveItem: Function
  currentDirName: string
  currentCateName: string
  currentFileName: string
  isReadOnly: boolean
}
const BreadCrumbHeader: React.FC<BreadCrumbHeaderType> = ({
  saveItem,
  currentDirName,
  currentCateName,
  currentFileName,
  isReadOnly,
}) => {
  const [fileName, setFileName] = useState(currentFileName)
  useEffect(() => {
    setFileName(currentFileName)
  }, [currentFileName])
  return (
    <div style={{ margin: '16px 0' }}>
      <Space>
        <Link className="text" to="/">
          <HomeOutlined />
        </Link>
        {currentDirName} / {currentCateName} /
        <Input
          style={{ width: '300px' }}
          value={fileName}
          onChange={(e): void => {
            setFileName(e.target.value)
          }}
          readOnly={isReadOnly}
        />
        {!isReadOnly && (
          <>
            <SaveOutlined
              onClick={(): void => {
                saveItem(fileName)
              }}
            />
            <Link to={`/${currentDirName}/${currentCateName}`}>
              <PlusOutlined />
            </Link>
          </>
        )}
      </Space>
    </div>
  )
}
export default BreadCrumbHeader