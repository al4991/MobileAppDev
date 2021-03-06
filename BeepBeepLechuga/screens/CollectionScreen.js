import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native'; 
import { Text, Button, Title, Card, TextInput } from 'react-native-paper';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: { 
       display: 'flex', 
       flex: 1,
       flexDirection: 'column', 
       justifyContent: 'center', 
       alignContent:'center',
    },
    flatlistStyle : {
        paddingLeft: 30, 
        paddingRight: 30, 
        paddingTop: 80,


    },
    titleStyle: {
        textAlign: 'center', 
    }, 
    textStyle: { 
        textAlign: 'center', 
        opacity: 0.7,
    },
})

class CollectionScreen extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.flatlistStyle}
                    data={this.props.history.map((item, i) => ({...item, i}))}
                    removeClippedSubviews={true}
                    extraData={this.props.history.length}
                    renderItem={(props) => (
                        <Card style={{ elevation: 10, marginTop: 10, marginLeft: 10, marginRight: 10}}> 
                            <Card.Content>
                                <Title style={styles.titleStyle}> 
                                    {props.item.title}
                                </Title>
                                <Text style={styles.textStyle}> 
                                    {props.item.artist}
                                </Text>
                            </Card.Content>
                        </Card>
                    )}
                    keyExtractor={item => String(item.i)}
                />  
            </View>
            
        )
    }
}


const mapStateToProps = (state) => { 
    const { history } = state; 
    return { history }; 
}

const mapDispatchToProps  = (dispatch) => (
    bindActionCreators({}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CollectionScreen);
