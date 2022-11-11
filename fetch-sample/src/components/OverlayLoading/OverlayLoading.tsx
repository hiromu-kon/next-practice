import { RootState } from '@/features/store';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

type Props = {};

/**
 * OverlayLoading
 *
 * @param props
 * @returns
 */
export const OverlayLoading = (props: Props) => {
  const {} = props;

  const toastMessageStatus = useSelector((state: RootState) => state.toastMessage.status);

  return (
    <>
      {toastMessageStatus ? (
        <div className={styles.overlay}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
