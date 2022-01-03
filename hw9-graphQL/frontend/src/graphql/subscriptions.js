import { gql } from "@apollo/client";

export const MESSAGE_SUBSRIPTION =gql`
    subscription message($from: String!, $to: String!) {
        message(from: $from, to: $to) {
            message {
                sender {
                    name
                }
                body
            }
        }
    }
`;