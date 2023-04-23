import { useEffect, useState } from 'react'
import Stick from 'react-stick'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { Caption } from '../Caption'
import { randomBool, sleep, handleErrors } from '../utils'
import Results from './Result'
import ResultsY from './ResultY'
import Thumbnail from './Thumbnail'
import { inflect } from './utils'

export interface File {
  name: string
  type: string
  id: string
  success?: boolean
}
export interface Files extends Array<File> {}

function ResultsDemo(): JSX.Element {
  const [isOpen, setStatus] = useState(false)
  const [message, setMessage] = useState<'fail' | 'success' | ''>('')

  const hideCaption = (): void => {
    setStatus(false)
    setMessage('')
  }

  const [newFiles, setFiles] = useState<Files>([])
  const [resultFiles, setResultFiles] = useState<Files>([])

  useEffect(() => {
    if (message !== '') {
      setStatus(true)
    }
  }, [message])

  const {
    getRootProps,
    getInputProps,
    fileRejections: fileRejectionsList,
  } = useDropzone({
    disabled: newFiles.length > 0,
    maxFiles: 20,
    onDrop: (
      acceptedFiles: Array<Record<string, any>>,
      fileRejections: Array<Record<string, any>>,
    ) => {
      const droppedFiles = acceptedFiles.map((file, pos: number) => ({
        name: file.name,
        type: file.type,
        id: `file-${pos}`,
      }))
      setFiles(droppedFiles)
    },
  })

  useEffect(() => {
    if (fileRejectionsList.length > 0) {
      fileRejectionsList.map(fileWithErrors => {
        console.log({ fileWithErrors })
        return fileWithErrors
      })
    }
  }, [fileRejectionsList])

  const onFakeUpoad = handleErrors(async () => {
    await sleep(2000)
    const filesWithResults = newFiles.map(result => ({
      ...result,
      success: randomBool(),
    }))
    setResultFiles(filesWithResults)
  })

  const resetState = (): void => {
    setFiles([])
    setResultFiles([])
  }

  const pluralizeFiles = inflect('File')
  return (
    <div data-ad="" className="quicksand" id="demo-4">
      <div data-ad-item="6">
        <div className="col fill gap">
          <div
            // key={forceReset}
            {...getRootProps({
              className: 'dropzone',
            })}
            style={{
              opacity: newFiles.length > 0 ? 0.2 : 1,
            }}
          >
            <div className="col  gap">
              <input {...getInputProps()} />

              <svg
                className="ml-auto mr-auto"
                width="45px"
                height="45px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 20h12M12 16V4m0 0l3.5 3.5M12 4L8.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <p>drop files</p>
            </div>
          </div>
        </div>
      </div>

      <div data-ad-item="6" className="sm" style={{ placeItems: 'start' }}>
        <div className="col fill gap">
          <div className="row fill" style={{ alignItems: 'center' }}>
            <p className="xl">
              {newFiles.length} {pluralizeFiles(newFiles.length)}
            </p>
            <button
              type="button"
              className="ml-auto"
              disabled={newFiles.length === 0}
              onClick={resetState}
            >
              Clear
            </button>
            <button
              type="button"
              disabled={newFiles.length === 0 || resultFiles.length > 0}
              onClick={onFakeUpoad}
            >
              {newFiles.length > 0 ? 'Upload now' : 'Upload'}
            </button>
          </div>
          {newFiles?.map(file => (
            <div className="row gap" key={file.id}>
              <Thumbnail type={file.type} />
              <span className="tag">{file.type ?? 'unknown'}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        data-ad-item="4"
        style={{ opacity: resultFiles.length === 0 ? 0.1 : 1 }}
      >
        <Stick
          className="stick"
          sameWidth
          autoFlipVertically
          node={<Caption m={message} isOpen={isOpen} results={resultFiles} />}
          position="top center"
          onClickOutside={hideCaption}
        >
          <Results
            results={resultFiles}
            successColor="#ff5500"
            failColor="#ff0055"
            onSelect={res => {
              setMessage(res ? 'success' : 'fail')
            }}
          />
        </Stick>
      </div>
      <div
        data-ad-item="4"
        style={{
          placeItems: 'start',
          opacity: resultFiles.length === 0 ? 0.1 : 1,
        }}
      >
        <div className="row fill">
          <div className="col">
            <div className="row gap">
              <p>Fail</p>
              <span className="fail"></span>
            </div>

            <div className="row gap mt-auto">
              <p>Success</p>
              <span className="success"></span>
            </div>
          </div>

          <div
            style={{
              width: '2em',
              height: '8em',
              marginLeft: 'auto',
            }}
          >
            <ResultsY
              results={resultFiles}
              onSelect={isSuccess => {
                const fileNames = resultFiles.map(rf => `${rf.name}`).join(',')
                toast(`${isSuccess ? 'success' : 'fail'}:${fileNames}`, {
                  className: 'toast',
                  bodyClassName: 'toast-body-results',
                  position: 'top-left',
                  autoClose: 10000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                })
              }}
            />
          </div>
        </div>
      </div>
      <div
        data-ad-item="4"
        style={{
          placeItems: 'start',
          opacity: resultFiles.length === 0 ? 0.1 : 1,
        }}
      >
        <Results
          results={resultFiles}
          //  onHover={(res) => console.log(res ? "success" : "fail")}
          onSelect={isSuccess => {
            const fileNames = resultFiles
              .map(rf => `${rf.name}:${rf.type}`)
              .join(',')
            toast(`${isSuccess ? 'success' : 'fail'}:${fileNames}`, {
              className: 'toast',
              bodyClassName: 'toast-body-results',
              position: 'top-left',
              autoClose: 10000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            })
          }}
        />
        <div className="col fill">
          <div className="row">
            <p>Fail</p>
            <span className="fail"></span>
          </div>

          <div className="row">
            <p>Success</p>
            <span className="success"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsDemo
