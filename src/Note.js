// when useState Value updated the component is rerenderd
// when r using useState value array or object don't try to update directly( u got error), using with the help of spread operator  u can update
// useEffect is used to rerender the component based on the dependency(provide dependency as arguments)
// useRef is hold the previous value and it doesn't rerender the component
// useRef value is object, u get value in current variable(refname.current)
// useMemo memorise the  value
// usememo is used to don't rerender the component or fn
// useMemo used at the highlevel complex code(optimize expensive operations) and referntial equality
// useCallback memorize the fn
