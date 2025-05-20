const mirrorDelete = (head, k) => {
  // Create 2 pointers (follow and lead) that start at the head
  let follow = head;
  let lead = head;

  /*
      Since we want to delete the k node,
      we set our follow pointer to be one spot beyond the deleted node.
  
      So instead of iterating `0 to i < k` as with most problems,
      we iterate `0 to i < k + 1` to account for that extra spot.
    */
  for (let i = 0; i < k + 1; i++) {
    // If we hit a null, k is larger than our linked list,
    // so we return the head without deleting an item.
    if (lead === null) {
      return head;
    }

    lead = lead.next;
  }

  /*
      Our lead pointer will end exactly at the terminating null
      when the head node should be removed (k == linkedList.length - 1).
  
      Since we iterate to k + 1, our lead pointer is 1 item past
      the end of the linked list, which is the terminating null value.
    */
  if (lead === null) {
    return head.next;
  }

  // Increment until lead reaches the tail.
  // Once here, we know the node we want to delete is at k, and our follow is at k + 1.
  while (lead.next !== null) {
    follow = follow.next;
    lead = lead.next;
  }

  // Delete the kth node (skip past it in our linked list)
  follow.next = follow.next.next;

  // The head will be the same, but the list will not contain the node we deleted
  return head;
};
