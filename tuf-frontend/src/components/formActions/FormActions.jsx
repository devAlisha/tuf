// src/components/FormActions.js

import { Button, Stack } from "@chakra-ui/react";

const FormActions = ({ isEditable, onEdit, onSave, onCancel, isLoading }) => {
  return (
    <Stack direction="row" spacing={4}>
      {!isEditable ? (
        <Button colorScheme="teal" onClick={onEdit}>
          Edit
        </Button>
      ) : (
        <>
          <Button colorScheme="teal" onClick={onSave} isLoading={isLoading}>
            Save
          </Button>
          <Button colorScheme="gray" onClick={onCancel}>
            Cancel
          </Button>
        </>
      )}
    </Stack>
  );
};

export default FormActions;
