/* ---------==== custom validators ====--------- */



/* ---------===== auth validators =====--------- */

export const handleErrMsg = (
  err: unknown, 
  stateSetter: (err: string) => void
) => {
  if( err && typeof err === 'object' && "message" in err ) {
    if(typeof err.message === 'string') return stateSetter(err.message)
  }
}
