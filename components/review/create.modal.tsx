import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    
    container: {
        width: "90%",
        maxWidth: 500,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 10, //Giống với padddingTop và paddingBottom
        marginBottom: 20
    },

    groupInput: {
        marginBottom: 15
    },

    text: {
        fontSize: 20,
        fontWeight: "400"
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }

})

interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
    addNew: any;
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props;
    const [title, setTitle] = useState("");
    const [star, setStar] = useState("");

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleSubmit = () => {
        if (!title) {
            Alert.alert("Thông tin không hợp lệ", "Nội dung không được để trống")
            return;
        }

        if (!star) {
            Alert.alert("Thông tin không hợp lệ", "Rating không được để trống")
            return;
        }

        addNew({
            id: randomInteger(2, 2000000),
            title,
            star
        })

        setModalVisible(false);
        setStar("");
        setTitle("")

    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={{ fontSize: 25 }}>Create a review</Text>
                            <AntDesign
                                onPress={() => {
                                    setModalVisible(false);
                                    setTitle("");
                                    setStar("");
                                }}
                                name="close" size={24} color="black" />
                        </View>

                        {/* body */}
                        <View>
                            <View style={styles.groupInput}>
                                <Text style={styles.text}>Nội dung</Text>
                                <TextInput
                                    value={title}
                                    style={styles.input}
                                    onChangeText={(v) => setTitle(v)}
                                />
                            </View>
                            <View>
                                <Text style={styles.text}>Rating</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    style={styles.input}
                                    value={star}
                                    onChangeText={(v) => setStar(v)}
                                />
                            </View>

                        </View>
                        {/* footer */}
                        <View style={{ marginTop: 20 }}>
                            <Button title="Add"
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </>
    )
}

export default CreateModal;
