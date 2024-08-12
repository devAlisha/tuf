// src/components/FormActions.js

import { Button, Stack } from "@chakra-ui/react";

const FormActions = ({ isEditable, onEdit, onSave, onCancel, isLoading }) => {
  return (
    <Stack direction="row" spacing={4}>
      {!isEditable ? (
        <Button colorScheme="purple" variant={'outline'} onClick={onEdit}>
          Edit
        </Button>
      ) : (
        <>
          <Button colorScheme="purple" variant={'outline'} onClick={onSave} isLoading={isLoading}>
            Save
          </Button>
          <Button colorScheme="red" variant={'outline'} onClick={onCancel}>
            Cancel
          </Button>
        </>
      )}
    </Stack>
  );
};

export default FormActions;
