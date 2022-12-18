// type MTProps<T> = {
//         columns: Array<{ name: string, property: keyof T, classNamesData: Record<any, any> }>;
//         data: T[];
//      onPageChange: (p: number) => void
//     };

//      function MTable<T>(p: MTProps<T>) {     return (         <table>
//              <thead>
//                 {p.columns.map((c) => (<th>{c.name}</th>)}
//              </thead>
//              <tbody>
//              {
//                  p.data.map((d) => (
//                      <tr>
//                          {
//                              p.columns.map((c) => (
//                                  <td
//                                      className={classNames("my-super-design", c.classNamesData)}
//                                  >
//                                      {d[c.property]}
//                                  </td>
//                              ))
//                          }
//                      </tr>
//                  ))
//              }
//              </tbody>
//          </table>
//      )
//  }

//  class MUser {
//      public first_name: string;
//      public age: number;
//      public c1: number;
//      constructor(firstName: string) {
//             this.first_name = firstName;
//      }
//  }

//  function UserPage() {
//         const meta = [{
//                 name: 'First Name',
//                 property: 'first_name' as const,
//                 classNamesData: {
//                     [styles.appContainer]: (c: MUser) => c.age > 50
//                 }
//             },
//             {
//                 name: 'User age',
//                 property: 'age' as const,
//                 classNamesData: {
//            }
//             },
//         {
//              name: 'User c1',
//                      [styles.appContainer]: (c: MUser) => c.age > 50
//              }
//          },
//      ];
//      const myData = [
//              new MUser('user1'), new MUser('user2'), new MUser('user3')
//          ];
//          return (
//              <MTable<MUser> data = {myData} columns = {meta} />
//          );
//      }

//      class Room {
//          roomNumber: number;
//          constructor(num: number) {
//              this.roomNumber = num;
//          }
//      }

//      function RoomsPage() {
//          const meta = [
//              {
//                  name: 'Room Number',
//                  property: 'roomNumber' as const,
//                  classNamesData: {
//                      [styles.appContainer]: (c: MUser) => c.age > 50
//              }
//                  }
//          ];
//         const myData = [
//             new Room(1), new Room(2), new Room(3)
//        ];
//          return (
//              <MTable<Room> data = {myData} columns = {meta} />
//          );
//      }
