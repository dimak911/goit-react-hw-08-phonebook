import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Contact, Btn } from './ContactListItem.styled';
import { Box } from 'components/Box';
import {
  useDeleteContactByIdMutation,
  useEditContactMutation,
} from 'services/contactsApi';
import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isSuccess, isLoading, isError }] =
    useDeleteContactByIdMutation();
  const [
    editContact,
    {
      isSuccess: isEditSuccess,
      isLoading: isEditLoading,
      isError: isEditError,
    },
  ] = useEditContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted');
    }

    if (isError) {
      toast.error('Oops!! Something went wrong!');
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" gridGap="10px">
        <Contact>
          {name}: {number}
        </Contact>
        <Box display="flex" gridGap="10px">
          <Btn type="button" onClick={() => editContact(id)}>
            <FaRegEdit color="blue" />
          </Btn>
          <Btn
            type="button"
            onClick={() => deleteContact(id)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Oval
                height={10}
                width={10}
                color="red"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="red"
                strokeWidth={10}
                strokeWidthSecondary={10}
              />
            ) : (
              <FaRegTrashAlt color="red" />
            )}
          </Btn>
        </Box>
      </Box>
    </>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
