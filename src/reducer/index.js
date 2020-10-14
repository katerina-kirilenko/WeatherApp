import { DEMO_ACTION } from '@/actions'

export default (state = 0, action) => {
    switch (action.type) {
      case DEMO_ACTION:
        return state
      default:
        return state
    }
}