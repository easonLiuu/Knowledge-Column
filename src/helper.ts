import { ColumnProps, ImageProps, UserProps } from './store'

export function generateFitUrl (column: ColumnProps, width: number, height: number, format = ['m_pad']) {
  if (column.avatar) {
    column.avatar.fitUrl = column.avatar.url + `?x-oss-process=image/resize,${format}h_${height},w_${width}`
  } else {
    column.avatar = {}
  }
}

interface CheckCondition {
  format?: string[];
  size?: number;
}
type ErrorType = 'size' | 'format' | null
export function beforeUploadCheck (file: File, conditon: CheckCondition) {
  const { format, size } = conditon
  const isValidFormat = format ? format.includes(file.type) : true
  const isValidSize = size ? (file.size / 1024 / 1024 < size) : true
  let error: ErrorType = null
  if (!isValidFormat) {
    error = 'format'
  }
  if (!isValidSize) {
    error = 'size'
  }
  return {
    passed: isValidFormat && isValidSize,
    error
  }
}
