/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: mingbo.zhang@hand-china.com
 * @Date: 2019-12-01 13:36:31
 * @LastEditors:  
 * @LastEditTime: 2019-12-01 13:45:32
 */
import {
  CHANGE_INPUT_VALUE,
  CHANGE_LIST,
  DELETE_TODO_ITEM
} from './actionType'
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const changeList = (value) => ({
  type: CHANGE_LIST,
  value
})
export const deleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})